import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

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

const InfiniteScrollRow = ({ items, direction = "left", speed = 1 }) => {
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const cardWidth = 274; // 250px card + 24px gap
  const repeatedItems = Array(8).fill(items).flat();

  // Total width for one repetition of items
  const totalWidth = cardWidth * items.length;

  useAnimationFrame(() => {
    if (isDragging) return;
    // Move in the specified direction
    const moveBy = direction === "left" ? -speed : speed;
    let newX = x.get() + moveBy;

    // Wrap the scroll position to create infinite effect
    if (newX <= -totalWidth * (repeatedItems.length / items.length - 1)) {
      newX += totalWidth * (repeatedItems.length / items.length - 2);
    } else if (newX >= 0) {
      newX -= totalWidth * (repeatedItems.length / items.length - 2);
    }
    x.set(newX);
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onWheel = (e) => {
      e.preventDefault();
      let newX = x.get() - e.deltaY - e.deltaX;

      if (newX <= -totalWidth * (repeatedItems.length / items.length - 1)) {
        newX += totalWidth * (repeatedItems.length / items.length - 2);
      } else if (newX >= 0) {
        newX -= totalWidth * (repeatedItems.length / items.length - 2);
      }
      x.set(newX);
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => container.removeEventListener("wheel", onWheel);
  }, [x, totalWidth, repeatedItems.length, items.length]);

  const handleDragEnd = () => {
    setIsDragging(false);
    const currentX = x.get();

    if (currentX <= -totalWidth * (repeatedItems.length / items.length - 1)) {
      x.set(currentX + totalWidth * (repeatedItems.length / items.length - 2));
    } else if (currentX >= 0) {
      x.set(currentX - totalWidth * (repeatedItems.length / items.length - 2));
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden w-full touch-pan-x"
      style={{ touchAction: "pan-x" }}
    >
      <motion.div
        className="flex gap-6 p-4 cursor-grab active:cursor-grabbing"
        style={{ x, willChange: "transform" }}
        drag="x"
        dragConstraints={{ left: -Infinity, right: Infinity }}
        dragElastic={0}
        dragMomentum={false}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={handleDragEnd}
      >
        {repeatedItems.map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            className="bg-white min-w-[230px]  sm:min-w-[240px] md:min-w-[250px]  lg:min-w-[250px]  rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-4 sm:p-4 md:p-4 lg:p-6  flex flex-col items-center justify-center flex-shrink-0"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-14 h-14 sm:w-18 sm:h-18 md:w-24 md:h-24 lg:w-22 lg:h-22 object-contain mb-4 pointer-events-none select-none"
              draggable={false}
            />

            <h3 className="text-sm sm:text-sm md:text-md lg:text-lg font-semibold text-[#334b94] text-center select-none">
              {item.title}
            </h3>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const CourseFeaturesScroll = () => {
  return (
    <section className="relative py-20 bg-[#fffefa] overflow-hidden">
      {/* Title */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 text-center mb-12">
        <h2 className="text-4xl md:text-4xl font-extrabold mb-2 text-[#334b94]">
          Course <span className="text-[#ef9b15]">Features</span>
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          At HI-VISION, we highlight the key features that make our courses effective and practical.
        </p>
      </div>

      {/* Top Row — Right to Left Infinite */}
      <InfiniteScrollRow items={features} direction="left" speed={1} />

      {/* Bottom Row — Left to Right Infinite */}
      <div className="mt-8">
        <InfiniteScrollRow items={featuress} direction="right" speed={1} />
      </div>
    </section>
  );
};

export default CourseFeaturesScroll;
