import React from "react";
import { Link } from "react-router-dom";

// Highlights for course benefits
const highlights = [
  {
    title: "Comprehensive GST Knowledge",
    description:
      "Gain deep understanding of India's new tax structure, covering all concepts from fundamentals to practical procedures.",
    icon: "📚",
  },
  {
    title: "Hands-on Return Filing",
    description:
      "Get practical training on all GST returns, reconciliation, adjustment entries, and annual filings including GSTR-9/9C.",
    icon: "📝",
  },
  {
    title: "Professional Practice Ready",
    description:
      "Learn everything you need to confidently start your own GST consultancy or manage compliance for organizations.",
    icon: "💼",
  },
  {
    title: "Software & Real World Cases",
    description:
      "Apply concepts in real business scenarios and accounting software, ensuring job-ready and consultancy skills.",
    icon: "💻",
  },
  {
    title: "Updates & Advanced Topics",
    description:
      "Course covers latest rules, digital records, QRMP, e-invoice, RCM, TDS/TCS, ITC complexities, and will receive all future major updates.",
    icon: "🆕",
  },
];

// Detailed course curriculum data
const courseContent = [
  // ... same as your courseContent array above
];

// Advanced package courses
const advancedCourses = [
  {
    id: 1,
    title: "Accounts (English & Hindi)",
    link: "/accounting",
    img: "/accounting.png",
  },
  {
    id: 2,
    title: "GST (Goods & Services Tax)",
    link: "/gst",
    img: "/gst.png",
  },
];

// Premium package courses
const premiumCourses = [
  {
    id: 1,
    title: "Accounts",
    link: "/accounting",
    img: "/accounting.png",
  },
  {
    id: 2,
    title: "GST (Goods & Services Tax)",
    link: "/gst",
    img: "/gst.png",
  },
  {
    id: 3,
    title: "Company Law",
    link: "/company-law",
    img: "/company.png",
  },
  {
    id: 4,
    title: "Tax Audit",
    link: "/tax-audit",
    img: "/tax.png",
  },
  {
    id: 5,
    title: "TDS and TCS",
    link: "/tds-and-tcs",
    img: "/company.png",
  },
  {
    id: 6,
    title: "Income Tax",
    link: "/income-tax",
    img: "/income.png",
  },
];

const GstAd = () => (
  <div
    className="min-h-screen py-22 px-4 sm:px-6 lg:px-8"
    style={{ background: "#fffefa" }}
  >
    <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">
        <img
          src="/image copy.png"
          alt="GST Course"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "gst.png";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#334b94]/70 via-[#334b94]/60 to-transparent flex items-end">
          <div className="p-4 sm:p-6 md:p-8 lg:p-12 w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white max-w-4xl">
              GST (Goods & Services Tax) – Professional Course Curriculum
            </h1>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-4 sm:p-6 md:p-8 lg:p-12">
        {/* Intro */}
        <div className="mb-10">
          <p className="text-gray-800 text-lg sm:text-xl max-w-5xl font-medium leading-snug">
            The GST is a major modification to India's tax structure. This course
            is designed to provide comprehensive knowledge of GST, enabling you
            to start your own practice in this field.
          </p>
        </div>

        {/* Highlights Card Grid */}
        <div className="mb-12">
          <h2
            className="text-2xl sm:text-3xl font-semibold mb-6"
            style={{ color: "#334b94" }}
          >
            Why Choose This GST Course?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden border border-[#e6e6e6] h-full"
              >
                <div className="border-b border-[#e6e6e6] bg-gradient-to-r from-[#e6e6e6] to-white p-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-[#ef9b15]/20 rounded-full flex items-center justify-center mr-3 shadow-sm">
                      <span className="text-[#ef9b15] text-lg">{benefit.icon}</span>
                    </div>
                    <h3 className="font-semibold text-lg text-[#334b94]">
                      {benefit.title}
                    </h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 text-base">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Course Curriculum */}
        <div className="mb-12">
          <h2
            className="text-2xl sm:text-3xl font-semibold mb-6"
            style={{ color: "#334b94" }}
          >
            GST Course Content
          </h2>
          <div className="space-y-8">
            {courseContent.map((section, idx) => (
              <div
                key={idx}
                className="bg-[#f6f7fd] border-l-4 border-[#ef9b15] rounded-xl p-6 shadow-sm"
              >
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "#ef9b15" }}
                >
                  {section.module}
                </h3>
                <ul className="text-gray-700 pl-4 list-disc space-y-1">
                  {section.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Important Note */}
        <div className="mt-12 mb-6 bg-gradient-to-r from-[#ef9b15]/20 to-[#e6e6e6]/40 p-6 rounded-xl flex items-center gap-4 border-l-4 border-[#ef9b15] shadow">
          <span className="text-3xl">⚠️</span>
          <div>
            <h4 className="text-lg font-bold mb-1" style={{ color: "#334b94" }}>
              Important
            </h4>
            <p className="text-gray-800">
              Major future updates will be added to the course, and the duration of
              courses may change from time to time.
            </p>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="bg-[#334b94] rounded-xl overflow-hidden shadow-lg mt-8">
          <div className="py-8 px-6 sm:px-8 md:px-10 md:py-10 text-center md:text-left md:flex md:items-center md:justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
                Ready to master GST & boost your career or consultancy?
              </h3>
              <p className="text-[#fffefa] text-sm sm:text-base">
                Enroll now for the most practical GST learning experience.
              </p>
            </div>
            <Link to="/contact">
              <button className="inline-block bg-white text-[#334b94] hover:bg-[#fffefa] font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300 text-sm sm:text-base border border-[#334b94]">
                Contact US
              </button>
            </Link>
          </div>
        </div>

     

        {/* Premium Package Courses Section */}
        <div className="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold mb-6 text-[#334b94]">
            Premium Package - More Courses
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {premiumCourses.map((course) => (
              <Link
                key={course.id}
                to={course.link}
                className="block bg-white rounded-lg shadow border border-[#ef9b15] hover:shadow-2xl transition-transform transform hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={course.img}
                    alt={course.title}
                    className="w-full h-full object-cover"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 88%, 0 100%)" }}
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-[#334b94]">
                    {course.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default GstAd;
