import { useEffect, useState } from "react";

const usePost = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("postItem.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setPosts(data);
        setLoading(false);
      });
  }, []);
  return [posts, loading];
};

export default usePost;
