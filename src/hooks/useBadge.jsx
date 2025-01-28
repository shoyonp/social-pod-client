import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";
import useAxiosSecure from "./useAxiosSecure";

const useBadge = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: badge = {} } = useQuery({
    queryKey: ["badge", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/badge/${user?.email}`);
      return res.data;
    },
  });
  return { badge };
};

export default useBadge;
