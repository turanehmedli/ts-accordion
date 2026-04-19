import { fetchUsers } from "../api/users";
import { useQuery } from "@tanstack/react-query";

export const useUsers = (page:number)=>{
    return useQuery({
        queryKey:['users',page],
        queryFn:()=> fetchUsers(page),
        staleTime: 1000 * 60 * 2
    })
}