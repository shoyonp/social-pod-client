import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAnnouncement = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: announcements = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["announcement"],
    queryFn: async () => {
      const res = await axiosPublic.get("/getAnnouncements");
      return res.data;
    },
  });
  return [announcements, isLoading];
};

export default useAnnouncement;
