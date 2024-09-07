import { useQuery } from "react-query"
import axiosInstance from "../services/axiosInstance"
import { IComment } from "../types/main"

const useGetComments = () => {

    const query = useQuery({
        queryKey: ["comments"],
        queryFn: () => {
            return axiosInstance.get<IComment[]>(`/comments`)
            .then(res => res.data)
        }
    })

    return query;
}

export default useGetComments;