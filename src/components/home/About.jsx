import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 + 0.5, duration: 0.6 },
    }),
  };

  return (
    <section className="w-full py-20 bg-[#fffefa]" ref={ref}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 px-6">

        {/* Content Side (Left) */}
        <motion.div
          className="flex-1 w-full flex flex-col items-start"
          initial="hidden"
          animate={controls}
          variants={textVariants}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight text-[#334b94] relative">
            <span className="pr-2">
              About <span className="text-[#ef9b15] relative z-10">Hi‑Vision</span>
            </span>
            <span className="block w-16 h-1 bg-[#ef9b15] absolute bottom-[-8px] left-0 rounded-full opacity-60"></span>
          </h2>

          <p className="text-gray-600 text-lg mb-2 leading-relaxed">
            At Hi Vision, we are committed to equipping you with real-world and value-adding accounting and taxation skills. Moreover, our comprehensive training programs can assist you in entering industries such as banking, textiles, and other industry types.

          </p>

          <p className="text-gray-600 text-lg mb-5 leading-relaxed">
            We offer structured training programs that offer development around the skills you actually need.
          </p>

          <ul className="space-y-3 mb-8">
            {[
              "Modern learning environment & resources",
              "Dedicated and experienced instructors",
              "Skill‑driven academic excellence",
            ].map((text, i) => (
              <motion.li
                key={i}
                className="flex items-center gap-3"
                custom={i}
                initial="hidden"
                animate={controls}
                variants={listVariants}
              >
                <FaCheckCircle className="text-[#ef9b15] text-xl" />
                <span className="text-[#334b94] font-medium">{text}</span>
              </motion.li>
            ))}
          </ul>
<Link to='/about'>
          <motion.button
            className="bg-[#334b94] text-[#fffefa] px-8 py-3 rounded-full font-semibold shadow hover:bg-[#ef9b15] hover:text-[#334b94] transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{ visible: { opacity: 1, y: 0, transition: { delay: 1, duration: 0.6 } } }}
          >
            Discover More
          </motion.button>
          </Link>
        </motion.div>

        {/* Image Side (Right) */}
        <motion.div
          className="flex-1 w-full flex justify-end"
          initial="hidden"
          animate={controls}
          variants={imageVariants}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#e6e6e6]">
            <img
              src="https://t3.ftcdn.net/jpg/03/30/64/04/360_F_330640491_iC8vW96TsrgNdTrHtLqmT7CDw9ZdkcMJ.jpg"
              alt="Hi‑Vision Institute"
              className="w-full h-[370px] md:w-[550px] object-cover object-center scale-105 hover:scale-110 transition duration-500"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#ef9b15] w-24 h-24 rounded-full blur-lg opacity-20 z-0"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
