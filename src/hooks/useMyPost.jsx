import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useMyPost = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  //   get posted data
  const {
    data: myPosts = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["myPosts", user.email],
    queryFn: async () => {
      const result = await axiosSecure.get(`/mypost/${user.email}`);
      return result?.data;
    },
  });
  return [myPosts, loading, refetch];
};

export default useMyPost;
