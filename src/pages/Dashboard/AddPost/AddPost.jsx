import Select from "react-select";
import makeAnimated from "react-select/animated";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import moment from "moment/moment";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useMyPost from "../../../hooks/useMyPost";
import useBadge from "../../../hooks/useBadge";
import useTag from "../../../hooks/useTag";

const AddPost = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset, setValue, watch } = useForm();
  const selectedTags = watch("tags");
  const formattedDate = moment().format("MMMM Do YYYY, h:mm A");
  const navigate = useNavigate();
  const animatedComponents = makeAnimated();
  const [myPosts] = useMyPost();
  const { badge } = useBadge();
  const [tags] = useTag();
  console.log(tags);

  // tags
  const tagOptions = tags?.map((tag) => ({
    value: tag?.value,
    label: tag?.label,
  }));

  const onSubmit = (data) => {
    console.log(data);
    const newPost = {
      ...data,
      tags: data.tags?.map((tag) => tag.value) || [],
      authorName: user?.displayName,
      authorImg: user?.photoURL,
      authorEmail: user?.email,
      upVote: parseInt(0),
      downVote: parseInt(0),
      postTime: formattedDate,
    };
    console.log(newPost);

    axiosPublic.post("/newPost", newPost).then((res) => {
      toast.success("post success");
      navigate("/dashboard/myPost");
      //   console.log(res.data);
    });
  };

  const postCount = myPosts?.length;
  const isBronzeUser = badge?.badge === "Bronze" && postCount >= 5;

  return (
    <>
      <Helmet>
        <title>Social Pod | Add Post</title>
      </Helmet>
      <div className="max-w-md mx-auto mt-8 p-6 rounded-sm shadow-md">
        {isBronzeUser ? (
          <div className="flex flex-col items-center justify-center text-center p-8 ">
            <p className="text-gray-800  text-lg font-semibold mb-4">
              You've reached the maximum limit of 5 posts. Upgrade to Gold
              membership to post more.
            </p>
            <button
              onClick={() => navigate("/membership")}
              className="btn btn-primary btn-block text-white font-semibold rounded-lg shadow-md transform transition duration-300 ease-in-out hover:scale-105"
            >
              Become a Member
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-semibold mb-4">Add New Post</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/*  Image */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Author Image URL
                </label>
                <input
                  type="text"
                  defaultValue={user?.photoURL}
                  readOnly
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter Image URL"
                />
              </div>

              {/*  Name */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Author Name
                </label>
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  readOnly
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter Author Name"
                />
              </div>

              {/*  Email */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Author Email
                </label>
                <input
                  type="email"
                  defaultValue={user?.email}
                  readOnly
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter Author Email"
                />
              </div>

              {/* Post Title */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Post Title
                </label>
                <input
                  type="text"
                  name="title"
                  {...register("title", { required: true })}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter Post Title"
                />
              </div>

              {/* Post Description */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Post Description
                </label>
                <textarea
                  name="description"
                  {...register("description", { required: true })}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  rows="4"
                  placeholder="Enter Post Description"
                />
              </div>

              {/* Tag Selector */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Tag
                </label>
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  options={tagOptions}
                  onChange={(selectedOptions) => {
                    setValue("tags", selectedOptions); // Set value in react-hook-form
                  }}
                  value={selectedTags} // Watch the selected values
                  isClearable
                  placeholder="Select a Tag"
                  className="mt-1"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
              >
                Submit Post
              </button>
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default AddPost;
