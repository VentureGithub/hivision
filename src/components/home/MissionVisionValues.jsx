import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const cards = [
  {
    title: "VISION",
    color: "#19aa5a",
    img: "eye.png",
    text: "To become the leading institute transforming accounting skills by creating industry-ready professionals and fostering lifelong success in finance and business.",
  },
  {
    title: "MISSION",
    color: "#ef9b15",
    img: "targeting.png",
    text: "Our mission is to empower students with genuine accounting expertise and professional skills, linking theoretical learning with practical experience.",
  },
  {
    title: "VALUES",
    color: "#334b94",
    img: "diamond.png",
    text: "We focus on integrity in accounting, support student growth, offer hands-on learning, stay updated with industry trends, and build trust, innovation, and excellence.",
  },
];

const MissionVisionValuesModern = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, margin: "-100px" }); // triggers only first scroll

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section className="bg-[#fdf9e9] py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="mb-16 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-[#334b94] flex flex-wrap justify-center md:justify-start items-center gap-2">
            <span>Our</span>
            <span className="text-[#ef9b15]">Mission, Vision, and Values</span>
          </h2>
          <p className="text-gray-600/90 text-base md:text-lg max-w-2xl mx-auto md:mx-0">
            At Hi Vision, we strive to help students learn by doing and to achieve professional excellence and best practice, based on our mission, vision, and values.
          </p>




          
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {cards.map((card, idx) => (
            <motion.div
              className="flex flex-col items-center relative"
              key={card.title}
              custom={idx}
              initial="hidden"
              animate={controls}
              variants={cardVariants}
            >
              {/* Icon */}
              <div className="w-32 h-32 flex items-center justify-center mb-6 relative z-10">
                <img src={card.img} alt={card.title} className="w-26 h-26" />
              </div>

              {/* Title */}
              <h3
                className="text-2xl font-extrabold mb-5 mt-2 text-center"
                style={{ color: card.color, letterSpacing: "0.04em" }}
              >
                {card.title}
              </h3>

              {/* Text */}
              <p className="text-gray-600 text-center text-base leading-relaxed">
                {card.text}
              </p>

              {/* Vertical Divider */}
              {idx !== 2 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 h-40 border-r-2 border-[#d5e2ee]" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValuesModern;
