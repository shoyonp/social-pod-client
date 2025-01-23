import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCommentById = ( postId ) => {
  const axiosSecure = useAxiosSecure();
  const { data: comments = [], refetch } = useQuery({
    queryKey: ["comments", postId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/getComments/${postId}`);
      return res?.data;
    },
  });
  return [comments, refetch];
};

export default useCommentById;
