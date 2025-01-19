import Select from "react-select";
import makeAnimated from "react-select/animated";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";

const AddPost = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset, setValue, watch } = useForm();
  const animatedComponents = makeAnimated();
  const tagOptions = [
    { value: "technology", label: "Technology" },
    { value: "health", label: "Health" },
    { value: "science", label: "Science" },
    { value: "entertainment", label: "Entertainment" },
    { value: "sports", label: "Sports" },
  ];
  const selectedTags = watch("tags");

  const onSubmit = (data) => {
    console.log(data);
    const newData = {
      ...data,
      authorName: user?.displayName,
      authorImg: user?.photoURL,
      authorEmail: user?.email,
      upVote: parseInt(0),
      downVote: parseInt(0),
    };
    console.log(newData);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
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
          <label className="block text-sm font-medium text-gray-700">Tag</label>
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
    </div>
  );
};

export default AddPost;
