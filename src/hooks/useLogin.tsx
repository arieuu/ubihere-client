import { useMutation } from "react-query"
import { redirect, useNavigate } from "react-router-dom";
import axiosInstance from "../services/axiosInstance";
import { IError, ILogin, ISignUp } from "../types/main";

const useLogin = () => {

    const navigate = useNavigate();

    // The generic typing: what we get, error object, what we send

    const mutation = useMutation({
        mutationFn: (login: ILogin) => {
        return axiosInstance.post("/token/", login)
                    .then(res => res.data)
       },

       onError: (error: IError) => {
        if (error.response?.status == 401) {
            error.message = "Email/password incorrect!";

        } else {
            error.message = "Something went wrong"
        }
       },
       
       onSuccess: (token) => {
        
        // When successfuly logged in save the received token to local storage and redirect to dashboard

            localStorage.setItem("loginToken", token.access);
            navigate("/");

       }
    });

    return mutation;
}

export default useLogin;