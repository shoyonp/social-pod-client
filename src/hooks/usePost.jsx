import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const usePost = (search) => {
  const axiosPublic = useAxiosPublic();

  const {
    data: posts = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["posts",search],
    queryFn: async () => {
      const res = await axiosPublic.get(`/post?search=${search || ""}`);
      return res.data;
    },
  });
  return [posts, loading, refetch];
};

export default usePost;
