import React from "react";
import { motion } from "framer-motion";
import EduHeader from "../Header";
import {
  FaGraduationCap,
  FaUserTie,
  FaBook,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const cardData = [
  {
    icon: (
      <FaGraduationCap className="text-[#ef9b15] text-4xl xl:text-5xl mb-4 sm:mb-6" />
    ),
    title: "Professional Training",
    desc: "Get hands-on practical experience through real-world projects that prepare you for the industry.",
  },
  {
    icon: (
      <FaUserTie className="text-[#ef9b15] text-4xl xl:text-5xl mb-4 sm:mb-6" />
    ),
    title: "Expert Instructors",
    desc: "Learn from highly qualified and experienced mentors who guide you every step of the way.",
  },
  {
    icon: (
      <FaBook className="text-[#ef9b15] text-4xl xl:text-5xl mb-4 sm:mb-6" />
    ),
    title: "Extensive Library & Resources",
    desc: "Access a wide range of books, study materials, and digital resources to enhance your learning.",
  },
  {
    icon: (
      <FaChalkboardTeacher className="text-[#ef9b15] text-4xl xl:text-5xl mb-4 sm:mb-6" />
    ),
    title: "Global Certification",
    desc: "Earn recognized certifications that validate your skills and open doors to international opportunities.",
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 60, scale: 0.95 },
  onscreen: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.6 + i * 0.2,
      duration: 0.7,
      type: "spring",
      bounce: 0.25,
    },
  }),
};

const Hero = () => {
  return (
    <section className="relative w-full min-h-[700px] overflow-visible mt-28">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-[70vh] xl:h-[600px] 2xl:h-[700px] bg-cover bg-center xl:bg-top"
        style={{
          backgroundImage: "url('/3webbanner.png')",
        }}
      ></div>

      {/* Header */}
      <div className="absolute top-0 left-0 w-full z-100">
        <EduHeader />
      </div>

      {/* Hero Section */}
      <div className="relative z-20 h-[70vh] flex flex-col lg:flex-row items-center justify-center px-6 sm:px-10 lg:px-20 xl:px-28 2xl:px-44">
        {/* Left Text Section */}
        <div className="max-w-3xl xl:max-w-4xl 2xl:max-w-6xl text-left flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4"
          >
            <span className="h-8 sm:h-10 w-1 rounded-md bg-[#334b94] block"></span>
            <span className="uppercase text-[#334b94] font-semibold tracking-widest text-xs sm:text-sm xl:text-base">
              HI-VISION Institute
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-[#d88a10] text-2xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-4 sm:mb-5 leading-tight"
          >
            <span className="block">Take the First Step Toward</span>
            <span className="block">
              a <span className="text-[#334b94]">Successful Tax Career</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-[#d88a10] text-base sm:text-lg lg:text-lg xl:text-xl 2xl:text-2xl leading-relaxed max-w-2xl mb-6 sm:mb-7 drop-shadow-lg"
          >
            Our aim is not only to{" "}
            <span className="text-[#334b94] font-semibold">
              teach you finance
            </span>{" "}
            but to make you{" "}
            <span className="text-[#334b94] font-semibold">
              financially sound
            </span><span className="text-gray-800 font-semibold">.
            </span>
            
          </motion.p>

          <Link to="/courses">
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              className="bg-[#334b94] text-[#fffefa] cursor-pointer font-semibold py-3 px-6 sm:px-8 xl:px-14 2xl:px-20 rounded-full shadow-lg hover:bg-[#d88a10] transition w-fit text-sm sm:text-base xl:text-lg"
            >
              Enroll Today
            </motion.button>
          </Link>

          {/* 👇 Image visible only on mobile view */}
          <motion.img
            src="/home.png"
            alt="student illustration"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-14 w-3/4 mx-auto sm:w-1/2 md:w-1/2  block lg:hidden"
          />
        </div>

        {/* 👇 Image visible only on large screens */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="hidden lg:block lg:w-[55%] xl:w-[60%] 2xl:w-[50%] pl-10 mt-4"
        >
          <img
            src="/home.png"
            alt="student illustration"
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>

      {/* Feature Cards */}
      <div className="relative left-1/2 z-99 w-full max-w-7xl xl:max-w-8xl -translate-x-1/2 -mt-6 sm:-mt-12 md:mt-4 xl:px-6 2xl:px-4 px-4 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 xl:gap-4 justify-center">
          {cardData.map((card, idx) => (
            <motion.div
              key={idx}
              initial="offscreen"
              animate="onscreen"
              custom={idx}
              variants={cardVariants}
              className="bg-[#e6e6e6] rounded-lg p-4 sm:p-8 xl:p-6 flex flex-col items-start text-left shadow-xl w-full"
            >
              {card.icon}
              <h3 className="font-semibold text-md sm:text-lg xl:text-xl mb-2 text-[#334b94]">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base xl:text-md leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
