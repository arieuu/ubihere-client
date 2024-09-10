import { useMutation } from "react-query"
import { redirect, useNavigate } from "react-router-dom";
import axiosInstance from "../services/axiosInstance";
import { IError, IProject, ISignUp } from "../types/main";

const useCreateProject = () => {

    const navigate = useNavigate();

    // The generic typing: what we get, error object, what we send

    const mutation = useMutation({
        mutationFn: (project: IProject) => {

        return axiosInstance.post("/projects/", project, {headers: {
                Authorization: `Bearer ${localStorage.getItem("loginToken")}`,
                "Content-Type": "multipart/form-data"}})
                .then(res => res.data)
       },

       onError: (error: IError) => {
            error.message = "Something went wrong"
       },
       
       onSuccess: (token) => {
        
        // When successfuly logged in save the received token to local storage and redirect to dashboard

        // localStorage.setItem("loginToken", token);
        navigate("/");
       }
    });

    return mutation;
}

export default useCreateProject;