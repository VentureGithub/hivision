import React, { useRef } from "react";
import { motion, useAnimation } from "framer-motion";

import flexible from "/fast-time.png";
import smallBatch from "/community.png";
import curriculum from "/sync.png";
import support from "/support.png";
import studyMaterial from "/analysis.png";
import employment from "/computer-worker.png";

const features = [
  { id: 1, title: "Flexible Timings", img: flexible },
  { id: 2, title: "Small Batch Size", img: smallBatch },
  { id: 3, title: "Updated Curriculum", img: curriculum },
];

const featuress = [
  { id: 4, title: "Lifetime Support", img: support },
  { id: 5, title: "Study Material", img: studyMaterial },
  { id: 6, title: "Employment Opportunities", img: employment },
];

const CourseFeaturesScroll = () => {
  const topControls = useAnimation();
  const bottomControls = useAnimation();
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  const repeatedFeatures = [...features, ...features, ...features, ...features];
  const repeatedFeaturess = [...featuress, ...featuress, ...featuress, ...featuress];

  return (
    <section className="relative py-20 bg-[#fffefa] overflow-hidden">
      {/* Title */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 text-center mb-12">
        <h2 className="text-4xl md:text-4xl font-extrabold mb-2 text-[#334b94]">
          Course <span className="text-[#ef9b15]">Features</span>
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          At Hi Vision, we highlight the key features that make our courses effective and practical.
        </p>
      </div>

      {/* Top Row — Right to Left Infinite Scroll + Manual Scroll */}
      <div
        ref={topRef}
        className="relative overflow-x-auto w-full z-10 scrollbar-hide cursor-grab active:cursor-grabbing"
      >
        <motion.div
          className="flex gap-6 w-max p-4"
          animate={topControls}
          drag="x"
          dragConstraints={topRef}
          initial={{ x: 0 }}
          onAnimationComplete={() => {
            topControls.start({ x: 0 });
          }}
          transition={{ ease: "linear", duration: 0 }}
        >
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 35,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex gap-6 w-max"
          >
            {repeatedFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white min-w-[250px] rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col items-center justify-center"
              >
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-18 h-18 object-contain mb-4"
                />
                <h3 className="text-lg font-semibold text-[#334b94] text-center">
                  {feature.title}
                </h3>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Row — Left to Right Infinite Scroll + Manual Scroll */}
      <div
        ref={bottomRef}
        className="relative overflow-x-auto w-full z-10 mt-8 scrollbar-hide cursor-grab active:cursor-grabbing"
      >
        <motion.div
          className="flex gap-6 w-max p-4"
          animate={bottomControls}
          drag="x"
          dragConstraints={bottomRef}
          initial={{ x: 0 }}
          onAnimationComplete={() => {
            bottomControls.start({ x: 0 });
          }}
          transition={{ ease: "linear", duration: 0 }}
        >
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 35,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex gap-6 w-max"
          >
            {repeatedFeaturess.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white min-w-[250px] rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col items-center justify-center"
              >
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-18 h-18 object-contain mb-4"
                />
                <h3 className="text-lg font-semibold text-[#334b94] text-center">
                  {feature.title}
                </h3>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseFeaturesScroll;
