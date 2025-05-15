import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Guidelines = () => {
  return (
    <div className="max-w-5xl mx-auto py-16 px-4 md:px-8 text-gray-800">
      <Helmet>
        <title>Social Pod | Community Guidelines</title>
      </Helmet>

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-3xl md:text-4xl font-bold text-blue-700 mb-6"
      >
        Community Guidelines
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="space-y-6 leading-relaxed text-[17px]"
      >
        <p>
          Welcome to <strong>Social Pod</strong> – a community of thoughtful discussions and shared insights. To maintain a safe, respectful, and engaging environment, please follow the guidelines below:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>✅ Be respectful to all members – no hate speech, harassment, or discrimination.</li>
          <li>✅ Stay on topic and contribute meaningfully to discussions.</li>
          <li>✅ Use clear, concise language. Avoid excessive slang or spam.</li>
          <li>✅ Give credit where due – do not plagiarize content.</li>
          <li>✅ No self-promotion or ads unless permitted.</li>
          <li>✅ Respect privacy – don't share others’ personal info.</li>
          <li>✅ Report any inappropriate content to moderators.</li>
        </ul>

        <p>
          Violations of these rules may result in content removal, temporary suspension, or permanent bans depending on severity.
        </p>

        <p className="font-medium">
          Let's keep Social Pod a safe space for idea exchange and friendly collaboration. ❤️
        </p>
      </motion.div>
    </div>
  );
};

export default Guidelines;
