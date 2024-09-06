import { useQuery } from "react-query"
import axiosInstance from "../services/axiosInstance"

const useGetProjects = () => {

    const query = useQuery({
        queryKey: ["projects"],
        queryFn: () => {
            return axiosInstance.get("/projects/")
            .then(res => res.data)
        }
    })

    return query;
}

export default useGetProjects;