import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const AboutPage = () => {
  return (
    <div className="w-full mx-auto px-4 md:px-8 py-16 text-gray-800 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed">
      <Helmet>
        <title>About Us | Social Pod</title>
      </Helmet>

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-3xl md:text-5xl font-bold text-center text-blue-700 mb-10"
      >
        About Social Pod
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-lg text-gray-700 leading-relaxed mb-10 text-center"
      >
        Welcome to <span className="font-semibold text-blue-600">Social Pod</span> — a next-gen community forum designed to foster vibrant discussions, valuable connections, and shared growth. Whether you're a tech enthusiast, lifelong learner, or casual browser, there's something here for you.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12"
      >
        <div>
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Our goal is to create a platform where curiosity meets community. Social Pod is built to be safe, inclusive, and intellectually enriching. Whether you're here to read, write, share, or simply scroll — you'll feel right at home.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Premium user interface with responsive design</li>
            <li>Role-based access for better control</li>
            <li>Secure Stripe payments for membership</li>
            <li>Instant social sharing features</li>
            <li>Data-driven decisions using real-time analytics</li>
            <li>Built on powerful technologies like React, Firebase, and Node.js</li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-blue-100 to-blue-50 p-8 rounded-xl shadow-md text-gray-700"
      >
        <h3 className="text-2xl font-bold text-blue-700 mb-4">What Makes Us Different?</h3>
        <p className="mb-4">
          Social Pod is not just a forum — it's a movement. We integrate modern web technologies and community-focused features to create a place where your voice matters. Admins have granular control over the platform while users enjoy sleek interfaces and engaging tools.
        </p>
        <p className="mb-4">
          Every discussion can be amplified through social media with one click. Whether you’re sharing your thoughts, discovering ideas, or making new connections, Social Pod ensures a smooth, elegant experience across all devices.
        </p>
        <p>
          <span className="font-semibold">Join the pod.</span> Share ideas. Build community. Be heard.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutPage;
