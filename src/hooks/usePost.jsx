import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const usePost = (currentPage, postsPerPage, search) => {
  const axiosPublic = useAxiosPublic();

  const {
    data: posts = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["posts", currentPage, postsPerPage, search],
    queryFn: async () => {
      //  console.log("Fetching posts for search:", search);
      const res = await axiosPublic.get(
        `/post?page=${currentPage}&size=${postsPerPage}&search=${search}`
      );
      return res.data;
    },
  });
  return [posts, loading, refetch];
};

export default usePost;
