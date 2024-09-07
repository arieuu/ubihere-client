import { useQuery } from "react-query"
import axiosInstance from "../services/axiosInstance"
import { IProject } from "../types/main"

const useRetrieveProject = (projectId: string) => {

    const query = useQuery({
        queryKey: ["project"],
        queryFn: () => {
            return axiosInstance.get<IProject>(`/projects/${projectId}`)
            .then(res => res.data)
        }
    })

    return query;
}

export default useRetrieveProject;
