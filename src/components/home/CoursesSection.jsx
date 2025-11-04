import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const courses = [
  { id: 1, title: "Tax Audit", desc: "Learn the process of auditing taxes in compliance with regulations.", img: "/tax.png", link: "/tax-audit" },
  { id: 2, title: "GST (Goods & Services Tax)", desc: "Understand GST compliance, filing, and practical applications.", img: "/gst.png", link: "/gst" },
  { id: 3, title: "Company Law", desc: "Master company taxation procedures and corporate compliance.", img: "/company.png", link: "/company-law" },
  { id: 4, title: "Income Tax", desc: "Learn personal and corporate income tax calculation and filing.", img: "/income.png", link: "/income-tax" },
  { id: 5, title: "Accounting", desc: "Get practical knowledge of bookkeeping, ledgers, and financial statements.", img: "/accounting.png", link: "/accounting" },
  { id: 6, title: "TDS and TCS", desc: "Understand Tax Deducted at Source and Tax Collected at Source procedures.", img: "/Gemini_Generated_Image_yhczoeyhczoeyhcz.png", link: "/tds-and-tcs" },
];

const AllCourses = () => {
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
            Key subjects include GST, corporate tax, income tax, accounting, TDS, and TCS.
          </p>
        </div>

        {/* Scrollable + Auto Scroll Container */}
        <div className="relative w-full overflow-x-auto overflow-y-hidden scrollbar-hide">
          <motion.div
            className="flex gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }} // Auto scroll half width
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 40, // control speed
            }}
          >
            {[...courses, ...courses].map((course, index) => (
              <div
                key={`${course.id}-${index}`}
                className="bg-white rounded-lg shadow group hover:shadow-2xl border border-[#ef9b15] flex flex-col overflow-hidden transition-all hover:-translate-y-1 flex-shrink-0 w-[300px] sm:w-[340px] lg:w-[360px]"
              >
                {/* Image */}
                <div className="relative w-full h-[200px] overflow-hidden">
                  <img
                    src={course.img}
                    alt={course.title}
                    className="w-full h-full object-cover"
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 100% 88%, 0 100%)",
                    }}
                  />
                </div>

                {/* Card Content */}
                <div className="flex flex-col flex-1 px-4 py-3 items-center text-center">
                  <h3 className="text-xl sm:text-xl font-bold mb-1 text-[#334b94]">
                    {course.title}
                  </h3>
                  <p className="text-gray-800 text-sm mb-3">
                    {course.desc}
                  </p>

                  <Link
                    to={course.link}
                    className="mt-auto px-5 py-2 rounded-full font-bold text-base bg-[#ef9b15] text-[#334b94] shadow hover:shadow-lg hover:bg-[#e38910] hover:text-white transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1"
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
