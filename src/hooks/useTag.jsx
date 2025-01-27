import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
const useTag = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: tags = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["tags"],
    queryFn: async () => {
      const res = await axiosPublic.get("/tags");
      return res.data;
    },
  });
  return [tags, loading, refetch];
};

export default useTag;
