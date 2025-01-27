import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUsers = (search) => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
      queryKey: ["users", search],
      queryFn: async () => {
        const res = await axiosSecure.get(search ? `/users?search=${search}` : "/users");
        return res.data;
      },
    });
    return [users,refetch]
};

export default useUsers;