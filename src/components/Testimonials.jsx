import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Sarah Ahmed",
    title: "Frontend Developer",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    review:
      "This platform has transformed the way I interact with dev communities. The UI is slick, performance is top-notch, and the vibe is just modern."
  },
  {
    id: 2,
    name: "Jonathan Lee",
    title: "Software Engineer",
    image:
      "https://randomuser.me/api/portraits/men/46.jpg",
    rating: 4,
    review:
      "Highly intuitive and responsive! I love how easy it is to navigate and how rich the features are. The animations make the experience delightful."
  },
  {
    id: 3,
    name: "Purna",
    title: "UI/UX Designer",
    image:
      "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
    review:
      "As a designer, I really appreciate the design system. It's modern, fluid, and feels very premium."
  },
  {
    id: 4,
    name: "Asif Rahman",
    title: "Full Stack Developer",
    image:
      "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 4,
    review:
      "Fantastic for collaboration and finding like-minded developers. Love the tag-based filtering and post discovery features."
  }
];

const cardVariants = {
  offscreen: {
    opacity: 0,
    y: 80
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
        >
          What People Say About Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition duration-300"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full mr-4 border-2 border-blue-500"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-blue-600">{testimonial.title}</p>
                </div>
              </div>
              <div className="flex items-center mb-2">
                {Array(testimonial.rating)
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 mr-1 text-sm" />
                  ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {testimonial.review}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;