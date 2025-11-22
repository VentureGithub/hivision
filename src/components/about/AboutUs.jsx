import React from "react";
import { motion } from "framer-motion";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=800&q=80";

const AboutUs = () => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch gap-16">
          {/* Left: Image Section */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-1 flex-col justify-center relative"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex flex-1 h-full relative min-h-[370px]">
              <motion.img
                src={ABOUT_IMAGE}
                alt="HI-VISION Team"
                className="w-full h-full max-h-[580px] object-cover rounded-xl shadow-xl bg-[#e6e6e6]"
                style={{ minHeight: "350px" }}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Right: Content Section */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-1 flex-col justify-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Leading Excellence in{" "}
              <span className="text-[#1d9bf0]">Finance</span> &{" "}
              <span className="text-[#ef9b15]">Taxation</span>
            </motion.h2>

            <motion.div
              className="space-y-5 text-gray-600 text-base leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <p>
                Established in{" "}
                <span className="font-semibold text-gray-800">August 2025</span>,
                HI-VISION is a private limited company located in Lucknow, Uttar
                Pradesh. Our mission is to deliver finance and taxation
                knowledge, empowering individuals with real-world expertise.
              </p>
              <p>
                Since its founding, HI-VISION has focused on bridging the gap
                between theory and practice. Our courses equip students with
                technical skills and critical thinking needed for success in
                today’s finance and taxation industries.
              </p>
            </motion.div>

            {/* Key Features */}
            <motion.div
              className="grid grid-cols-2 gap-4 mb-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
            >
              {[
                { color: "#1d9bf0", label: "Expert Faculty" },
                { color: "#ef9b15", label: "Practical Training" },
                { color: "#1d9bf0", label: "Industry Ready" },
                { color: "#ef9b15", label: "Modern Curriculum" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-sm text-gray-700">{item.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Social Media */}
            {/* Social Media */}
            <motion.div
              className="flex items-center gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <span className="text-gray-700 font-semibold">Connect With Us:</span>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/hi-vision-taxation-education-08aa88387/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-[#1d9bf0] hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61581359084578"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-[#1d9bf0] hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <FaFacebook size={18} />
                </a>
                <a
                  href="https://www.instagram.com/hivisiontaxationeducation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-[#ef9b15] hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <FaInstagram size={18} />
                </a>
                <a
                  href="https://www.youtube.com/@Hi-VisionTaxationEducation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-[#ef9b15] hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <FaYoutube size={18} />
                </a>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
