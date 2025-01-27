import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const usePost = (currentPage, postsPerPage) => {
  const axiosPublic = useAxiosPublic();

  const {
    data: posts = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["posts", currentPage, postsPerPage],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/post?page=${currentPage}&size=${postsPerPage}`
      );
      return res.data;
    },
  });
  return [posts, loading, refetch];
};

export default usePost;
