import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

// Demo teacher data with professional images
const teachers = [
  {
    name: "CA Rajesh Kumar",
    role: "Tax Expert",
    detail: "15+ years in Direct & Indirect Taxation, GST compliance specialist.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
  },
  {
    name: "CA Priya Sharma",
    role: "Audit Professional",
    detail: "Expert in Financial Auditing and Corporate Compliance with Big 4 experience.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
  },
  {
    name: "CA Amit Verma",
    role: "GST Consultant",
    detail: "Specialized in GST Returns, ITC Reconciliation and Advisory Services.",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop",
  },
  {
    name: "CA Neha Singh",
    role: "Finance Mentor",
    detail: "Corporate Finance & Financial Planning expert with practical industry insights.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
  },
  {
    name: "CA Vikram Mehta",
    role: "TDS Specialist",
    detail: "Income Tax, TDS compliance and Return Filing expert with 12+ years experience.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
  },
];

const cardVariants = {
  offscreen: {
    opacity: 0,
    y: 50,
    scale: 0.9
  },
  onscreen: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      type: "spring",
      bounce: 0.3,
    }
  })
};

const TeacherCard = ({ img, name, role, detail, index }) => (
  <motion.div
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.3 }}
    custom={index}
    variants={cardVariants}
    whileHover={{ y: -10 }}
    className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
  >
    {/* Image Container with Overlay */}
    <div className="relative h-56 sm:h-64 overflow-hidden">
      <img
        src={img}
        alt={name}
        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
      />

      {/* Gradient Overlay - Always visible but darker on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/70 transition-all duration-300"></div>

      {/* Name & Role - Always visible at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="font-bold text-lg sm:text-xl mb-1">
          {name}
        </h3>
        <p className="text-[#ef9b15] font-semibold text-xs sm:text-sm uppercase tracking-wide">
          {role}
        </p>
      </div>

      {/* Hover Overlay - Full Detail */}
      <div className="absolute inset-0 bg-[#334b94]/95 backdrop-blur-sm p-6 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="text-center">
          <h3 className="font-bold text-xl text-white mb-2">
            {name}
          </h3>
          <p className="text-[#ef9b15] font-semibold text-sm uppercase tracking-wide mb-3">
            {role}
          </p>
          <p className="text-white text-sm leading-relaxed mb-4">
            {detail}
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-3">
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="#"
              className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-[#ef9b15] transition-colors"
            >
              <FaLinkedin className="text-white text-base" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="#"
              className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-[#ef9b15] transition-colors"
            >
              <FaTwitter className="text-white text-base" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="#"
              className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-[#ef9b15] transition-colors"
            >
              <FaEnvelope className="text-white text-base" />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Top Badge */}
      <div className="absolute top-3 left-3 bg-[#ef9b15] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
        Expert Faculty
      </div>
    </div>
  </motion.div>
);

const TeacherSection = () => (
  <section className="w-full bg-[#fdf9e9] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-2 text-[#334b94] flex flex-wrap items-center gap-2 justify-center md:justify-start">
          <span> Meet Our  </span>
          <span className="text-[#ef9b15]">Expert Teachers</span>
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto md:mx-0 text-center md:text-left">
          Learn from industry professionals with years of practical experience in taxation, auditing, and financial consulting.
        </p>
      </motion.div>

      {/* Teachers Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
        {teachers.map((teacher, idx) => (
          <TeacherCard key={idx} {...teacher} index={idx} />
        ))}
      </div>

    </div>
  </section>
);

export default TeacherSection;
