import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const usePost = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: posts = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await axiosPublic.get("/post");
      return res.data;
    },
  });
  return [posts, loading, refetch];
};

export default usePost;
