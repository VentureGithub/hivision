// import React from "react";
// import { 
//   FaGraduationCap, 
//   FaChalkboardTeacher, 
//   FaBook, 
//   FaFlask 
// } from "react-icons/fa";

// // Replace with path to your actual image
// const STUDENT_IMAGE = "/assets/banner.png";

// const features = [
//   {
//     icon: <FaGraduationCap className="text-3xl" />,
//     title: "Scholarship Facility",
//     desc: "Magna aliqua. Ut enim ad minim veniam consectetur adipisicing elit sed do exercitation ullamco.",
//     color: "#1d9bf0",
//   },
//   {
//     icon: <FaChalkboardTeacher className="text-3xl" />,
//     title: "Best Teacher",
//     desc: "Magna aliqua. Ut enim ad minim veniam consectetur adipisicing elit sed do exercitation ullamco.",
//     color: "#ef9b15",
//   },
//   {
//     icon: <FaBook className="text-3xl" />,
//     title: "Library & Book Store",
//     desc: "Magna aliqua. Ut enim ad minim veniam consectetur adipisicing elit sed do exercitation ullamco.",
//     color: "#1d9bf0",
//   },
//   {
//     icon: <FaFlask className="text-3xl" />,
//     title: "25 Years of Experience",
//     desc: "Magna aliqua. Ut enim ad minim veniam consectetur adipisicing elit sed do exercitation ullamco.",
//     color: "#ef9b15",
//   },
// ];

// const FeatureSection = () => {
//   return (
//     <section className="w-full bg-[#fffefa] py-12 px-6 md:px-16 lg:px-24">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-extrabold mb-2 text-[#334b94] flex flex-wrap items-center gap-2 justify-center md:justify-start">
//             <span>Why Choose </span>
//             <span className="text-[#ef9b15]">Our Institution</span>
//           </h2>
//         </div>

//         <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
//           {/* Features Grid */}
//           <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="group bg-white rounded-2xl p-4 border-2 border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300"
//                 style={{
//                   animation: `fadeIn 0.7s cubic-bezier(.42,.19,.57,.93) ${index * 0.12}s both`
//                 }}
//               >
//                 {/* Icon */}
//                 <div
//                   className="inline-flex p-4 rounded-xl mb-5 transition-transform duration-300 group-hover:scale-105"
//                   style={{ backgroundColor: `${feature.color}21` }}
//                 >
//                   <div style={{ color: feature.color }}>
//                     {feature.icon}
//                   </div>
//                 </div>
//                 {/* Content */}
//                 <h3 className="text-lg font-bold text-gray-900 mb-2">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm leading-relaxed">
//                   {feature.desc}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Image Section */}
//           <div className="w-full lg:w-1/3 flex justify-center">
//             <div className="relative">
//               <div className="w-80 h-96 bg-gradient-to-br from-[#1d9bf0] to-[#ef9b15] rounded-2xl shadow-lg flex items-center justify-center overflow-hidden ">
//                 <img
//                   src='https://res.cloudinary.com/jerrick/image/upload/v1509742245/q0l5lwzd91liplir3odz.jpg'
//                   alt="Student Banner"
//                   className="object-cover w-full h-full rounded-2xl opacity-95 transition-transform duration-500 hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(24px);}
//           to { opacity: 1; transform: translateY(0);}
//         }
//       `}</style>
//     </section>
//   );
// };

// export default FeatureSection;

import React from "react";
import { motion } from "framer-motion";

const sectionOneImg =
  "https://thumbs.dreamstime.com/b/conceptual-image-online-training-skill-enhancement-hands-typing-keyboard-emphasizing-education-e-learning-404444770.jpg";
const sectionTwoImg =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80";

// Animation Variants
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // each child animates one by one
    },
  },
};

const fadeUpZoom = {
  hidden: { opacity: 0, y: 80, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const InfoSection = () => (
  <section className="w-full p-0 m-0 overflow-hidden">
    {/* White Triangle Top SVG */}
    <div className="w-full flex justify-center overflow-hidden h-10 relative z-10 bg-[#fdf9e9]">
      <svg width="70" height="40" viewBox="0 0 70 40" className="block">
        <polygon points="0,0 70,0 35,40" fill="#fff" fillOpacity="1" />
      </svg>
    </div>

    {/* First Section */}
    <div className="bg-[#fdf9e9]">
      <motion.div
        className="flex flex-col md:flex-row items-center max-w-7xl mx-auto px-4 gap-16 py-20"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-start"
          variants={fadeUpZoom}
        >
          <img
            src={sectionOneImg}
            alt="Skill-based Education"
            className="rounded-2xl shadow-xl w-full max-w-[520px] h-[370px] object-cover hover:scale-[1.03] transition-transform duration-500"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col items-start md:items-start text-center md:text-left"
          variants={fadeUpZoom}
        >
          <h3 className="text-[#334b94] text-3xl md:text-4xl font-extrabold mb-5 leading-snug">
            Encouraging Students With Education Based on Skills
          </h3>
          <p className="text-gray-800 mb-3 text-[17px] leading-relaxed">
            Hi Vision ensures that every learner gains industry exposure through
            seminars, case studies, and live sessions, addressing the growing
            demand for experts with real-world experience. Our programs prepare
            students for the practical realities of commercial accounting, tax
            compliance, and financial management, going beyond theoretical
            knowledge.
          </p>
          <p className="text-gray-800 text-[17px] leading-relaxed">
            Education should be about empowerment, not confusion. Our main goal
            is to ensure that every student who walks through our doors leaves
            with the skills, confidence, and clarity they need to succeed.
          </p>
        </motion.div>
      </motion.div>
    </div>

    {/* Divider Triangle */}
    <div className="w-full flex justify-center overflow-hidden h-10 relative z-10">
      <svg width="70" height="40" viewBox="0 0 70 40" className="block">
        <polygon points="0,0 70,0 35,40" fill="#fdf9e9" fillOpacity="1" />
      </svg>
    </div>

    {/* Second Section */}
    <div className="bg-white">
      <motion.div
        className="flex flex-col md:flex-row-reverse items-center max-w-7xl mx-auto px-4 gap-16 py-20"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-end"
          variants={fadeUpZoom}
        >
          <img
            src={sectionTwoImg}
            alt="Path to Success"
            className="rounded-2xl shadow-xl w-full max-w-[520px] h-[370px] object-cover hover:scale-[1.03] transition-transform duration-500"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col items-start md:items-start text-center md:text-left"
          variants={fadeUpZoom}
        >
          <h3 className="text-[#334b94] text-3xl md:text-4xl font-extrabold mb-5 leading-snug">
            Our Path to Success and Development
          </h3>
          <p className="text-gray-800 mb-3 text-[17px] leading-relaxed">
            As it stands, Hi Vision is one of the most trusted brands in the
            realm of financial and tax education. We take immense pride in the
            many students we have helped to embark on successful careers in
            corporate finance, tax consulting, and accounting organizations
            throughout India.
          </p>
          <p className="text-gray-800 text-[17px] leading-relaxed">
            As we have evolved from a single vision-driven institute into a
            renowned name shaping the future of finance professionals, our
            commitment has become evident. Our journey has been guided at every
            step by creativity, integrity, and a deep understanding of industry
            standards.
          </p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default InfoSection;
