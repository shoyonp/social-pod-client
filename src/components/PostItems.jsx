import PostItemCard from "./PostItemCard";
import usePost from "../hooks/usePost";

const PostItems = () => {
  const [posts] = usePost();
  return (
    <div>
      <h2>Posts Here</h2>
      <div>
        {[...posts]?.reverse()?.map((post) => (
          <PostItemCard post={post} key={post._id}></PostItemCard>
        ))}
      </div>
    </div>
  );
};

export default PostItems;
