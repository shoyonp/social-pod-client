import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 text-gray-800">
      <Helmet>
        <title>About Us | Social Pod</title>
      </Helmet>
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-8"
      >
        About Social Pod
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-lg text-gray-600 leading-relaxed mb-6"
      >
        Social Pod is a premium forum platform designed for meaningful discussions and community interaction. Whether you're a tech enthusiast, developer, or curious mind, our space is crafted to help you connect, share ideas, and grow.
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="text-lg text-gray-600 leading-relaxed mb-6"
      >
        With a clean interface, role-based features, Stripe integration, and advanced sharing capabilities, Social Pod empowers both users and admins to contribute to a vibrant knowledge-sharing ecosystem.
      </motion.p>
      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
        viewport={{ once: true }}
        className="list-disc list-inside text-gray-700 space-y-2"
      >
        <li>Connect with developers and thinkers globally</li>
        <li>Post and explore a wide range of topics</li>
        <li>Role-based dashboards for personalized control</li>
        <li>Safe, responsive, and performance-optimized</li>
        <li>Seamless payment and sharing integrations</li>
      </motion.ul>
    </div>
  );
};

export default AboutPage;
