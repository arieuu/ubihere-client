import { useMutation } from "react-query"
import { redirect, useNavigate } from "react-router-dom";
import axiosInstance from "../services/axiosInstance";
import { ILogin, ISignUp } from "../types/main";

const useLogin = () => {

    const navigate = useNavigate();

    // The generic typing: what we get, error object, what we send

    const mutation = useMutation({
        mutationFn: (login: ILogin) => {
        return axiosInstance.post("/token/", login)
                    .then(res => res.data)
       },

       /*
       onError: (error: IError) => {
        if (error.response?.status == 400) error.message = "Please fill in the data properly";
        if (error.response?.status == 401) error.message = "Username/password incorrect!";
        console.log(error)
       },
       */
       
       onSuccess: (token) => {
        
        // When successfuly logged in save the received token to local storage and redirect to dashboard

        navigate("/");
        
       }
    });

    return mutation;
}

export default useLogin;