import { useQuery } from "react-query"
import axiosInstance from "../services/axiosInstance"
import { IProject } from "../types/main"

const useGetProjects = () => {

    const query = useQuery({
        queryKey: ["projects"],
        queryFn: () => {
            return axiosInstance.get<IProject[]>("/projects/")
            .then(res => res.data)
        }
    })

    return query;
}

export default useGetProjects;