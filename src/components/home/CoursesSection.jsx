import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { Link } from "react-router-dom";

const courses = [
  { id: 5, title: "Accounting", desc: "Get practical knowledge of bookkeeping, ledgers, and financial statements.", img: "/accounting.png", link: "/accounting" },
  { id: 2, title: "GST (Goods & Services Tax)", desc: "Understand GST compliance, filing, and practical applications.", img: "/gst.png", link: "/gst" },
  { id: 4, title: "Income Tax", desc: "Learn personal and corporate income tax calculation and filing.", img: "/income.png", link: "/income-tax" },
  { id: 3, title: "Company Law", desc: "Master company taxation procedures and corporate compliance.", img: "/company.png", link: "/company-law" },
  { id: 1, title: "Tax Audit", desc: "Learn the process of auditing taxes in compliance with regulations.", img: "/tax.png", link: "/tax-audit" },
  { id: 6, title: "TDS and TCS", desc: "Understand Tax Deducted at Source and Tax Collected at Source procedures.", img: "/Gemini_Generated_Image_yhczoeyhczoeyhcz.png", link: "/tds-and-tcs" },
];

const cardWidth = 360; // card width in px
const gap = 32; // gap between cards in px
const fullCardWidth = cardWidth + gap;

const AllCourses = () => {
  const [isDragging, setIsDragging] = useState(false);
  const x = useMotionValue(0);
  const containerRef = useRef(null);

  // To create seamless infinite loop, we repeat the courses list multiple times
  const repetitionCount = 5;
  const repeatedCourses = Array(repetitionCount).fill(courses).flat();

  // Total width of one courses set (without repetition)
  const singleSetWidth = fullCardWidth * courses.length;

  useAnimationFrame(() => {
    if (isDragging) return;
    const currentX = x.get();
    let newX = currentX - 1; // auto-scroll speed (negative to scroll left automatically)
    // Loop the scroll position to keep infinite
    if (newX <= -singleSetWidth * (repetitionCount - 1)) {
      newX += singleSetWidth * (repetitionCount - 2);
    } else if (newX >= 0) {
      newX -= singleSetWidth * (repetitionCount - 2);
    }
    x.set(newX);
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const wheelHandler = (e) => {
      e.preventDefault();
      let newX = x.get() - e.deltaY - e.deltaX;

      if (newX <= -singleSetWidth * (repetitionCount - 1)) {
        newX += singleSetWidth * (repetitionCount - 2);
      } else if (newX >= 0) {
        newX -= singleSetWidth * (repetitionCount - 2);
      }
      x.set(newX);
    };

    container.addEventListener("wheel", wheelHandler, { passive: false });
    return () => container.removeEventListener("wheel", wheelHandler);
  }, [x]);

  const handleDragEnd = () => {
    setIsDragging(false);
    const currentX = x.get();

    if (currentX <= -singleSetWidth * (repetitionCount - 1)) {
      x.set(currentX + singleSetWidth * (repetitionCount - 2));
    } else if (currentX >= 0) {
      x.set(currentX - singleSetWidth * (repetitionCount - 2));
    }
  };

  return (
    <section className="w-full py-12 bg-[#fffefa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-[#334b94]">
            <span>Our </span>
            <span className="text-[#ef9b15]">Accounting & Taxation Courses</span>
          </h2>
          <p className="text-gray-600 text-base md:text-md max-w-2xl mx-auto">
            We provide expert, career-focused training in accounting and taxation, preparing students with practical skills.
            Key subjects include Accounting, GST, Income Tax, Company Law, Tax Audit, TDS and TCS.
          </p>

        </div>

        {/* Infinite Scroll Carousel */}
        <div
          ref={containerRef}
          className="relative overflow-hidden w-full touch-pan-x"
          style={{ touchAction: 'pan-x' }}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          onMouseEnter={() => setIsDragging(true)}
          onMouseLeave={() => setIsDragging(false)}
        >
          <motion.div
            className="flex gap-6 p-3 sm:gap-8 sm:p-4 cursor-grab active:cursor-grabbing"
            style={{ x, willChange: 'transform', width: singleSetWidth * repetitionCount }}
            drag="x"
            dragConstraints={{ left: -Infinity, right: Infinity }}
            dragElastic={0}
            dragMomentum={false}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
          >
            {repeatedCourses.map((course, idx) => (
              <div
                key={`${course.id}-${idx}`}
                className="bg-white rounded-lg shadow group hover:shadow-2xl border border-[#ef9b15] flex flex-col overflow-hidden transition-all hover:-translate-y-1 flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px]"
              >
                {/* Image */}
                <div className="relative w-full h-[160px] sm:h-[180px] md:h-[200px] overflow-hidden">
                  <img
                    src={course.img}
                    alt={course.title}
                    className="w-full h-full object-cover"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 88%, 0 100%)" }}
                  />
                </div>

                {/* Card Content */}
                <div className="flex flex-col flex-1 px-3 sm:px-4 py-3 items-center text-center">
                  <h3 className="text-lg sm:text-xl font-bold mb-1 text-[#334b94]">
                    {course.title}
                  </h3>
                  <p className="text-gray-800 text-xs sm:text-sm mb-3">
                    {course.desc}
                  </p>

                  <Link
                    to={course.link}
                    className="mt-auto px-4 sm:px-5 py-2 rounded-full font-bold text-sm sm:text-base bg-[#ef9b15] text-[#334b94] shadow hover:shadow-lg hover:bg-[#e38910] hover:text-white transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AllCourses;
