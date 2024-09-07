import { useMutation } from "react-query"
import { redirect, useNavigate } from "react-router-dom";
import axiosInstance from "../services/axiosInstance";
import { ISignUp } from "../types/main";

interface Ilogin {
    username: string,
    password: string,
}

const useSignUp = () => {

    const navigate = useNavigate();

    // The generic typing: what we get, error object, what we send

    const mutation = useMutation({
        mutationFn: (signUp: ISignUp) => {
        return axiosInstance.post("/users/", signUp)
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

        // localStorage.setItem("loginToken", token);
        navigate("/login");
       }
    });

    return mutation;
}

export default useSignUp;