import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // TODO: use email js or other package
    toast.success("Message sent successfully");
    reset();
  };

  return (
    <>
      <Helmet>
        <title>Social Pod | Contact Us</title>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 py-12 px-4 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-blue-700 text-center mb-10">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                  })}
                  className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none"
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  {...register("subject", { required: "Subject is required" })}
                  className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none"
                  placeholder="Subject..."
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  {...register("message", { required: "Message is required" })}
                  className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none"
                  placeholder="Write your message here..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
                >
                  Send Message
                </motion.button>
              </div>
            </form>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white shadow-lg rounded-xl p-6 md:p-10"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                Get in Touch
              </h3>
              <p className="text-gray-700 mb-4">
                We’d love to hear from you! Whether you have a question about
                features, pricing, need a demo, or anything else, our team is
                ready to answer all your questions.
              </p>
              <ul className="space-y-4 text-gray-700">
                <li>
                  <strong>Address:</strong> 123 Modern Lane, Dhaka, Bangladesh
                </li>
                <li>
                  <strong>Phone:</strong> +880 1234-567890
                </li>
                <li>
                  <strong>Email:</strong> support@socialpod.com
                </li>
                <li>
                  <strong>Support Hours:</strong> Sun - Fri | 9:00 AM - 6:00 PM
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ContactUs;
