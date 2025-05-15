import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import logo from "../../assets/assets/icons8-communicate-pieces-96.png";

const Guidelines = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50">
      <Helmet>
        <title>Social Pod | Community Guidelines</title>
      </Helmet>

      <div className="relative w-full min-h-[250px] md:min-h-[300px] lg:min-h-[350px] bg-gradient-to-r from-blue-500 to-blue-700 text-white flex flex-col justify-center items-center p-6  shadow-lg">
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-2xl md:text-4xl font-bold text-center"
        >
          Community Guidelines
        </motion.h1>

        {/* Subtitle */}
        <p className="mt-2 text-xs md:text-sm font-light flex items-center">
          STRUCTURE TO GET STARTED
        </p>

        {/* Bottom Text Elements */}
        <div className="absolute bottom-5 left-3 md:left-5 z-10 text-xs font-normal text-black md:text-sm ">
          Social Pod
        </div>
        <div className="absolute bottom-5 right-5 text-xs md:text-sm">
          Shoyon Kumar
        </div>

        {/* Decorative Curved Element */}
        <div className="absolute bottom-0 left-0 w-24 h-12 md:w-32 md:h-16 bg-white rounded-tr-full"></div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="space-y-4 leading-relaxed text-[17px] w-11/12 mx-auto mt-5"
      >
        <p>
          Welcome to <strong>Social Pod</strong> – a community of thoughtful
          discussions and shared insights. To maintain a safe, respectful, and
          engaging environment, please follow the guidelines below:
        </p>

        <ul className="list-disc pl-6 space-y-1">
          <li>
            Be respectful to all members – no hate speech, harassment, or
            discrimination.
          </li>
          <li> Stay on topic and contribute meaningfully to discussions.</li>
          <li>Use clear, concise language. Avoid excessive slang or spam.</li>
          <li> Give credit where due – do not plagiarize content.</li>
          <li> No self-promotion or ads unless permitted.</li>
          <li> Respect privacy – don't share others’ personal info.</li>
          <li> Report any inappropriate content to moderators.</li>
        </ul>
        <p>
          Violations of these rules may result in content removal, temporary
          suspension, or permanent bans depending on severity.
        </p>
        <p className="font-medium">
          Let's keep Social Pod a safe space for idea exchange and friendly
          collaboration.
        </p>
      </motion.div>
    </div>
  );
};

export default Guidelines;
