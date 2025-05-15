import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import boltShape from "../../assets/bolt_pc.svg";
import boltMobile from "../../assets/bolt_mobile.svg";

const faqs = [
  {
    question: "What is Social Pod?",
    answer:
      "Social Pod is a modern discussion platform where users can post, share, and engage in thoughtful conversations with others.",
  },
  {
    question: "How do I become an admin?",
    answer:
      "Admins are assigned by existing admins. If you're an active user and contribute meaningfully, you may be considered.",
  },
  {
    question: "Is there a membership fee?",
    answer:
      "Basic features are free, but advanced capabilities can be unlocked via Stripe-based membership payments.",
  },
  {
    question: "Can I share posts on social media?",
    answer:
      "Yes! You can easily share your favorite discussions on Facebook and WhatsApp using the built-in share features.",
  },
  {
    question: "Is the site mobile-friendly?",
    answer:
      "Absolutely. Social Pod is fully responsive and optimized for both desktop and mobile devices.",
  },
  {
    question: "Can I edit or delete my post?",
    answer: "Yes, users can manage their own posts through their dashboard.",
  },
  {
    question: "What kind of content is allowed?",
    answer:
      "Constructive, respectful, and topic-relevant discussions are encouraged. Offensive or spam content will be removed.",
  },
  {
    question: "How do I report inappropriate content?",
    answer:
      "You can report posts using the report button available under each post. Our admins will review and take action accordingly.",
  },
];

const FAQPage = () => {
  return (
    <div className="relative min-h-screen py-20 px-4 md:px-8 overflow-hidden">
      <Helmet>
        <title>Social Pod | FAQs</title>
      </Helmet>

      <div className="absolute inset-0 -z-10">
        <img
          src={boltShape}
          alt="background"
          className="hidden md:block w-full h-full object-cover "
        />
        <img
          src={boltMobile}
          alt="mobile background"
          className="block md:hidden w-full h-full object-cover "
        />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-4xl md:text-6xl font-bold text-center mb-6"
      >
        Frequently Asked Questions
      </motion.h1>

      <p className="text-center text-gray-700 text-lg max-w-2xl mx-auto mb-12">
        If you're new to Social Pod or looking to improve your experience on the
        platform, this guide will help you learn more about our platform and its
        features.
      </p>

      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-black mb-4">Social Pod</h2>
        <div className="">
          {faqs.map((faq, index) => (
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-b rounded-sm"
            >
              <div key={index} className="collapse-title font-semibold">
                {faq.question}
              </div>
              <div className="collapse-content text-sm">{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
