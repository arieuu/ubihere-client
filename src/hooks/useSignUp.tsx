import { useMutation } from "react-query"
import { useNavigate } from "react-router-dom";
import axiosInstance from "../services/axiosInstance";
import { IError, ISignUp } from "../types/main";

const useSignUp = () => {

    const navigate = useNavigate();

    // The generic typing: what we get, error object, what we send

    const mutation = useMutation({
        mutationFn: (signUp: ISignUp) => {
        return axiosInstance.post("/users/", signUp)
                    .then(res => res.data)
       },

       onError: (error: IError) => {
            if(error.response?.data.email) {
                error.message = "This email is already taken"
            }
            else {
                error.message = "Something went wrong"
            }
            
       },
       
       onSuccess: () => {
        
            // When successfuly logged in save the received token to local storage and redirect to dashboard

            navigate("/login");
       }
    });

    return mutation;
}

export default useSignUp;