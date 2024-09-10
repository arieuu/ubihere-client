import { useMutation } from "react-query"
import { redirect, useNavigate } from "react-router-dom";
import axiosInstance from "../services/axiosInstance";
import { IComment, IError, IProject, ISignUp } from "../types/main";

const useCreateComment = () => {

    const navigate = useNavigate();

    // The generic typing: what we get, error object, what we send

    console.log(localStorage.getItem("loginToken"))
    const mutation = useMutation({
        mutationFn: (comment: IComment) => {

        return axiosInstance.post("/comments/", comment, {headers: {
            Authorization: `Bearer ${localStorage.getItem("loginToken")}`,
                "Content-Type": "multipart/form-data"}})
                .then(res => res.data)
       },

       
       onError: (error: IError) => {
        
        if (error.response?.status == 401) {
            error.message = "Please log in first";

        } else {
            error.message = "Something went wrong"
        }

        console.log(error)
       },
      
       
       onSuccess: (token) => {
        // When successfuly logged in save the received token to local storage and redirect to dashboard

        // localStorage.setItem("loginToken", token);
        // navigate("/");
       }
    });

    return mutation;
}

export default useCreateComment;