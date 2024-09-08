import { useQuery } from "react-query"
import axiosInstance from "../services/axiosInstance"
import { IProject, IUser } from "../types/main"
import { useId } from "react"

const useRetrieveUser = (userId: string) => {

    const query = useQuery({
        queryKey: ["user"],
        queryFn: () => {
            return axiosInstance.get<IUser>(`/users/${userId}`)
            .then(res => res.data)
        }
    })

    return query;
}

export default useRetrieveUser;