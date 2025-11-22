import React, { useRef, useState, useEffect } from "react";
import { useInView, motion, AnimatePresence } from "framer-motion";
import { FaUserGraduate, FaAward, FaBookOpen, FaUser } from "react-icons/fa";

const stats = [
  { icon: <FaUser className="text-3xl md:text-4xl text-[#ef9b15]" />, count: 890, label: "Students" },
  { icon: <FaUserGraduate className="text-3xl md:text-4xl text-[#ef9b15]" />, count: 670, label: "Graduates" },
  { icon: <FaAward className="text-3xl md:text-4xl text-[#ef9b15]" />, count: 160, label: "Awards" },
  { icon: <FaBookOpen className="text-3xl md:text-4xl text-[#ef9b15]" />, count: 200, label: "Faculties" },
];

const testimonials = [
  {
    text: "HI-VISION transformed my career completely. I joined with basic commerce knowledge and left with expertise in GST.",
    name: "Deepti Gupta",
    role: "Student, GST Expert",
  },
  {
    text: "While preparing for CA, I joined HI-VISION for practical GST training. The faculty's experience and real case studies gave me an edge.",
    name: "Neha Saxena",
    role: "CA Student",
  },
  {
    text: "As a business owner, I needed to understand taxation for my company. HI-VISION's courses on TDS, TCS, and GST compliance gave me the confidence to manage my accounts independently.",
    name: "Riya Nigam",
    role: "Business Owner",
  },
  {
    text: "Hands-on training at HI-VISION. Landed my dream job with a great salary!",
    name: "Raunak",
    role: "Finance Executive",
  },
  {
    text: "I'm grateful to HI-VISION for giving me a real career, not just a certificate. Highly recommend!",
    name: "Chandan Jaiswal",
    role: "Accountant",
  },
];

// Hook for count up animation
const useCountUp = (target, duration = 1000, play = true) => {
  const [count, setCount] = useState(0);
  const startTime = useRef(null);

  useEffect(() => {
    if (!play) return;

    let rafId;
    const step = (timestamp) => {
      if (!startTime.current) startTime.current = timestamp;
      const progress = Math.min((timestamp - startTime.current) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) rafId = requestAnimationFrame(step);
      else setCount(target);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [target, duration, play]);

  return count;
};

const AchievementSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const counts = stats.map((stat) => useCountUp(stat.count, 1000, inView));

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full py-20 bg-[#fdf9e9]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Flex Section */}
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {/* Left Image */}
          <div className="flex-1 flex items-center justify-center bg-[#e6e6e6] rounded-xl overflow-hidden min-h-[240px] sm:min-h-[280px] md:min-h-[320px]">
            <img
              src="https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?cs=srgb&dl=pexels-pixabay-159866.jpg&fm=jpg"
              alt="Student"
              className="w-full h-full object-cover max-h-80 sm:max-h-96 md:max-h-full"
            />
          </div>

          {/* Right Testimonial Slider */}
          <div
            className="flex-1 rounded-xl flex items-center justify-center p-6 sm:p-10 shadow-md relative text-white overflow-hidden"
            style={{
              backgroundImage:
                "linear-gradient(rgba(239,155,21,0.88), rgba(239,155,21,0.88)), url('https://img.freepik.com/free-vector/hand-draw-educational-materials-pattern_1409-9153.jpg?semt=ais_hybrid&w=740&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="relative z-10 w-full max-w-lg text-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                >
                  <p className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed italic mb-6">
                    <span className="text-4xl font-extrabold opacity-70 align-top mr-2">“</span>
                    {testimonials[currentIndex].text}
                    <span className="text-4xl font-extrabold opacity-70 align-bottom ml-2">”</span>
                  </p>
                  <h4 className="font-bold text-sm sm:text-base md:text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-100 text-xs sm:text-sm md:text-base">{testimonials[currentIndex].role}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;

















// import React, { useRef, useState, useEffect } from "react";
// import { useInView } from "framer-motion";
// import { FaUserGraduate, FaAward, FaBookOpen, FaUser } from "react-icons/fa";

// const stats = [
//   { icon: <FaUser className="text-3xl md:text-4xl text-[#ef9b15]" />, count: 890, label: "Students" },
//   { icon: <FaUserGraduate className="text-3xl md:text-4xl text-[#ef9b15]" />, count: 670, label: "Graduates" },
//   { icon: <FaAward className="text-3xl md:text-4xl text-[#ef9b15]" />, count: 160, label: "Awards" },
//   { icon: <FaBookOpen className="text-3xl md:text-4xl text-[#ef9b15]" />, count: 200, label: "Faculties" },
// ];

// const people = [
//   "https://randomuser.me/api/portraits/men/41.jpg",
//   "https://randomuser.me/api/portraits/women/65.jpg",
//   "https://randomuser.me/api/portraits/men/35.jpg",
//   "https://randomuser.me/api/portraits/women/43.jpg",
// ];

// // Simple hook for count up
// const useCountUp = (target, duration = 1000, play = true) => {
//   const [count, setCount] = useState(0);
//   const startTime = useRef(null);

//   useEffect(() => {
//     if (!play) return;

//     let rafId;
//     const step = (timestamp) => {
//       if (!startTime.current) startTime.current = timestamp;
//       const progress = Math.min((timestamp - startTime.current) / duration, 1);
//       setCount(Math.floor(progress * target));
//       if (progress < 1) rafId = requestAnimationFrame(step);
//       else setCount(target);
//     };
//     rafId = requestAnimationFrame(step);

//     return () => cancelAnimationFrame(rafId);
//   }, [target, duration, play]);

//   return count;
// };

// const AchievementSection = () => {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true });

//   const counts = stats.map((stat) => useCountUp(stat.count, 1000, inView));

//   return (
//     <section className="w-full py-20 bg-[#fdf9e9]" ref={ref}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading and Stats */}
//         <div className="mb-16">
//           <h2 className="text-4xl md:text-5xl font-extrabold mb-2 text-[#334b94] flex flex-wrap items-center gap-2 justify-center md:justify-start">
//             <span>Our</span>
//             <span className="text-[#ef9b15]">Achievement</span>
//           </h2>
//           <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto md:mx-0 text-center md:text-left">
//             Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
//           </p>
//           <div className="flex flex-wrap justify-center md:justify-between gap-8 mt-10 border-t border-b border-[#e6e6e6] py-8">
//             {stats.map((stat, i) => (
//               <div key={i} className="flex flex-col items-center flex-1 min-w-[120px]">
//                 {stat.icon}
//                 <span className="text-3xl md:text-4xl font-extrabold mt-2 mb-1 text-[#334b94]">{counts[i]}</span>
//                 <span className="uppercase tracking-wider text-[#334b94] text-sm font-semibold">{stat.label}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Testimonial Section */}
//         <div className="flex flex-col md:flex-row gap-8 items-stretch">
//           {/* Image Box */}
//           <div className="flex-1 flex items-center justify-center bg-[#e6e6e6] rounded-xl overflow-hidden min-h-[240px] sm:min-h-[280px] md:min-h-[320px]">
//             <img
//               src="https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?cs=srgb&dl=pexels-pixabay-159866.jpg&fm=jpg"
//               alt="Student"
//               className="w-full h-full object-cover max-h-80 sm:max-h-96 md:max-h-full"
//             />
//           </div>

//           {/* Testimonial Box */}
//           <div
//             className="flex-1 rounded-xl flex flex-col justify-between p-6 sm:p-8 shadow-md relative text-white min-h-[280px] sm:min-h-[320px] md:min-h-[auto]"
//             style={{
//               backgroundImage:
//                 "linear-gradient(rgba(239,155,21,0.8), rgba(239,155,21,0.8)), url('https://img.freepik.com/free-vector/hand-draw-educational-materials-pattern_1409-9153.jpg?semt=ais_hybrid&w=740&q=80')",
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               backgroundRepeat: "no-repeat",
//             }}
//           >
//             <div className="absolute inset-0 bg-[#ef9c85]/120 rounded-xl opacity-80 mix-blend-multiply -z-10"></div>

//             <div className="relative z-10">
//               <p className="text-base sm:text-lg mb-5 font-semibold leading-relaxed">
//                 <span className="text-3xl sm:text-4xl leading-none align-top mr-2 font-extrabold opacity-70">“</span>
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                 Excepteur sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est laborum.
//                 <span className="text-3xl sm:text-4xl leading-none align-bottom ml-2 font-extrabold opacity-70">”</span>
//               </p>
//               <span className="font-bold block mb-1 text-sm sm:text-base">AYESHA HOQUE</span>
//               <span className="text-gray-900 text-xs sm:text-sm ">Student, Department of Hi-Vision</span>
//             </div>

//             <div className="flex gap-3 mt-6 sm:mt-8 relative z-10">
//               {people.map((img, idx) => (
//                 <img
//                   key={idx}
//                   src={img}
//                   alt="Person thumbnail"
//                   className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white hover:border-[#334b94] transition"
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AchievementSection;
