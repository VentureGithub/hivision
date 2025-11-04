import React from "react";
import { motion } from "framer-motion";
import {
  FaHandsHelping,
  FaBook,
  FaUserTie,
  FaBriefcase,
  FaCheckCircle,
} from "react-icons/fa";

const differentiators = [
  {
    icon: <FaHandsHelping className="text-5xl text-[#ef9b15] mb-6" />,
    title: "Hands-On and Practical Training",
    description:
      "Mock filings, real-time software experience, and engaging case studies from the real world.",
    features: ["Mock Filings", "Real-time Software", "Case Studies"],
  },
  {
    icon: <FaBook className="text-5xl text-[#ef9b15] mb-6" />,
    title: "Curriculum Informed by Industry",
    description:
      "Current GST amendments and provisions of the Tax Act are reflected in the curriculum.",
    features: ["Latest GST Updates", "Tax Act Provisions", "Industry Standards"],
  },
  {
    icon: <FaUserTie className="text-5xl text-[#ef9b15] mb-6" />,
    title: "Reliable Teachers",
    description:
      "Experts who have dedicated years to mastering their craft in the world of audit and tax consulting.",
    features: ["Industry Experts", "Audit Professionals", "Tax Consultants"],
  },
  {
    icon: <FaBriefcase className="text-5xl text-[#ef9b15] mb-6" />,
    title: "Placement & Career Counseling",
    description:
      "Help finding you a job in accounting or taxation after training.",
    features: ["Job Assistance", "Career Guidance", "Interview Prep"],
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 50, scale: 0.95 },
  onscreen: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      type: "spring",
      bounce: 0.2,
    },
  }),
};

const WhatMakesDifferent = () => {
  return (
    <section className="w-full py-16 sm:py-24 mx-auto px-4 sm:px-6 lg:px-8 bg-[#fdf9e9]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-4xl font-extrabold mb-5 text-[#334b94] flex flex-wrap justify-center md:justify-start items-center gap-3">
            <span>What Makes </span>
            <span className="text-[#ef9b15]">Hi Vision Different?</span>
          </h2>
          <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto md:mx-0 text-center md:text-left leading-relaxed">
            Empowering students with industry-relevant skills, expert guidance,
            and comprehensive support for a successful career in taxation and
            accounting.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
          {differentiators.map((item, idx) => (
            <motion.div
              key={idx}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              custom={idx}
              variants={cardVariants}
              className="bg-white rounded-2xl p-4 shadow-lg border border-[#ef9b15]/40 hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              {/* Icon */}
              <div className="flex justify-center">{item.icon}</div>

              {/* Title */}
              <h3 className="text-l sm:text-xl font-semibold text-[#334b94] mb-4 text-center">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-800 text-sm leading-relaxed mb-6 text-center">
                {item.description}
              </p>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatMakesDifferent;
