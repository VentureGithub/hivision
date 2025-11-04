import React from "react";
import { motion } from "framer-motion";
import {
  FaUserTie,
  FaLaptopCode,
  FaLightbulb,
  FaChalkboardTeacher,
  FaCogs,
  FaCalendarCheck,
} from "react-icons/fa";

const features = [
  {
    title: "Faculty with Experience in Industry",
    icon: <FaUserTie className="text-[#ef9b15] text-3xl mb-3" />,
    text: "With years of hands-on experience in taxation and finance, our instructors bring practical expertise and real-world knowledge into every session.",
  },
  {
    title: "Real-World Experience",
    icon: <FaLaptopCode className="text-[#334b94] text-3xl mb-3" />,
    text: "Gain practical learning through live projects, software training, and hands-on exposure to taxation and compliance systems.",
  },
  {
    title: "Career Guidance",
    icon: <FaLightbulb className="text-[#ef9b15] text-3xl mb-3" />,
    text: "Get expert training and placement support to build a successful career with confidence and real-world skills.",
  },
  {
    title: "Versatile Learning Choices",
    icon: <FaCalendarCheck className="text-[#334b94] text-3xl mb-3" />,
    text: "Choose flexible batches—weekend or regular—to suit your schedule and preferred learning pace.",
  },
  {
    title: "Updated Curriculum",
    icon: <FaChalkboardTeacher className="text-[#ef9b15] text-3xl mb-3" />,
    text: "Our curriculum evolves constantly to stay in sync with current taxation trends, government policies, and real-world tools.",
  },
  {
    title: "Job-Readiness Proficiencies",
    icon: <FaCogs className="text-[#334b94] text-3xl mb-3" />,
    text: "We focus on building job-ready skills, ensuring every student can confidently contribute from day one.",
  },
];

const WhyJoin = () => (
  <section className="relative w-full py-20 px-6 bg-gradient-to-br from-[#fffef9] to-[#f8f5ec] overflow-hidden">
    {/* Decorative Background */}
    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#ef9b15_1%,_transparent_30%)]"></div>

    <div className="max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-extrabold text-[#334b94] mb-4">
          Why Join Us in Learning?
        </h2>
        <p className="text-gray-800 text-lg max-w-3xl mx-auto leading-relaxed">
          At <span className="font-semibold text-[#ef9b15]">Hi Vision</span>, we
          believe in learning that inspires real growth. Our programs are
          designed to blend theory with real-world application, ensuring every
          learner is ready to excel.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-sm border border-[#f2e9d5] rounded-2xl shadow-md hover:shadow-xl p-7 text-center transition-all duration-300"
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h4 className="text-xl font-semibold text-[#334b94] mb-2">
              {feature.title}
            </h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              {feature.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyJoin;
