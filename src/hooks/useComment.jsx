import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useComment = (title) => {
  const axiosSecure = useAxiosSecure();
  const {
    data: comments = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["comment", title],
    queryFn: async () => {
      const res = await axiosSecure.get(`/comments/${title}`);
      return res?.data;
    },
  });
  return [comments, loading, refetch];
};

export default useComment;
