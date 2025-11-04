import React, { useState } from "react";
import { Link } from "react-router-dom";

const advancedCourses = [
  {
    id: 1,
    title: "Accounts (English & Hindi)",
    desc: "Learn the core of accounting principles and practices.",
    img: "/accounting.png",
    link: "/accounting",
  },
  {
    id: 2,
    title: "GST (Goods & Services Tax)",
    desc: "Understand GST compliance, filing, and practical applications.",
    img: "/gst.png",
    link: "/gst",
  },
];

const premiumCourses = [
  {
    id: 1,
    title: "Accounts",
    desc: "Learn the core of accounting principles and practices.",
    img: "/accounting.png",
    link: "/accounting",
  },
  {
    id: 2,
    title: "GST (Goods & Services Tax)",
    desc: "Understand GST compliance, filing, and practical applications.",
    img: "/gst.png",
    link: "/gst",
  },
  {
    id: 3,
    title: "Company Law",
    desc: "Understand the legal and compliance framework for companies.",
    img: "/company.png",
    link: "/company-law",
  },
    {
    id: 4,
    title: "Tax Audit",
    desc: "Learn the process of tax auditing and compliance with government rules.",
    img: "/tax.png",
    link: "/tax-audit",
  },
    {
    id: 5,
    title: "TDS and TCS ",
    desc: "Understand Tax Deducted at Source and Tax Collected at Source procedures.",
    img: "/company.png",
    link: "/tds-and-tcs",
  },
    {
    id: 6,
    title: "Income Tax",
    desc: "Master personal and corporate income tax filing and calculations.",
    img: "/income.png",
    link: "/income-tax",
  },

];

const premiumPackageDetails = [

  { label: "Tenure", value: "Course + Training (9+2 Months)" },
  { label: "Syllabus", value: "Accounting, GST, Company Law, Tax Audit, TDS and TCS, Income Tax" },
  { label: "Training Criteria", value: "Per Month Test, 65%+ Average Required" },
  { label: "Exam for Placement", value: "After Training, 80%+ Required" },
  { label: "Kit", value: "T-shirt, Bag, I Card, Stationery" },
    { label: "Amount", value: "₹50,000" },
];

const advancedPackageDetails = [
  
  { label: "Tenure", value: "Course + Training (6+1 Months)" },
  { label: "Syllabus", value: "Full Accounting, Full GST" },
  { label: "Training Criteria", value: "Per Month Test, 65%+ Average Required" },
  { label: "Exam for Placement", value: "After Training, 80%+ Required" },
  { label: "Kit", value: "T-shirt, Bag, I Card, Stationery" },
  { label: "Amount", value: "₹25,000" },
];



const AllCourses = () => {
  const [activeTab, setActiveTab] = useState("advanced");
  const courses = activeTab === "advanced" ? advancedCourses : premiumCourses;
  const packageDetails = activeTab === "advanced" ? advancedPackageDetails : premiumPackageDetails;

  return (
    <section className="w-full py-12 bg-[#fffefa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-[#334b94]">
            <span>Our </span>
            <span className="text-[#ef9b15]">Accounting & Taxation Courses</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto">
            Choose between our Advanced and Premium Packages for professional accounting and taxation training.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <button
            onClick={() => setActiveTab("advanced")}
            className={`px-6 py-2 font-semibold rounded-l-full border border-[#ef9b15] cursor-pointer ${
              activeTab === "advanced"
                ? "bg-[#ef9b15] text-[#334b94]"
                : "text-[#334b94] hover:bg-[#fdf0d9]"
            } transition-all duration-300`}
          >
            Advanced Package
          </button>
          <button
            onClick={() => setActiveTab("premium")}
            className={`px-6 py-2 font-semibold rounded-r-full border border-[#ef9b15] cursor-pointer ${
              activeTab === "premium"
                ? "bg-[#ef9b15] text-[#334b94]"
                : "text-[#334b94] hover:bg-[#fdf0d9]"
            } transition-all duration-300`}
          >
            Premium Package
          </button>
        </div>

        {/* Package Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-10">
          {packageDetails.map((info, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-white border border-[#ef9b15] shadow group hover:shadow-2xl transition-all text-center"
            >
              <p className="text-[#334b94] font-bold text-lg mb-1">{info.label}</p>
              <p className="text-[#ef9b15] font-semibold">{info.value}</p>
            </div>
          ))}
        </div>

        {/* Cards Grid */}
        <div
          className={`grid gap-8 ${
            activeTab === "advanced"
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow group hover:shadow-2xl border border-[#ef9b15] flex flex-col overflow-hidden transition-all hover:-translate-y-1"
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
              <div className="flex flex-col flex-1 px-4 py-3 items-center text-center">
                <h3 className="text-xl sm:text-xl font-bold mb-1 text-[#334b94]">
                  {course.title}
                </h3>
                <p className="text-gray-800 text-sm mb-3">{course.desc}</p>
                {!course.hideButton && (
                  <Link
                    to={course.link}
                    className="mt-auto px-5 py-2 rounded-full font-medium text-base bg-[#ef9b15] text-[#334b94] shadow hover:shadow-lg hover:bg-[#e38910] hover:text-white transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1"
                  >
                    Read More
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AllCourses;
