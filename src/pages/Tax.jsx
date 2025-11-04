import React from "react";
import { Link } from "react-router-dom";

// Key course benefit highlights
const highlights = [
  {
    title: "Practical Tax Audit Training",
    description: "Gain hands-on experience with forms 3CA, 3CB, 3CD, audit review, and compliance using popular software.",
    icon: "📋"
  },
  {
    title: "Comprehensive Audit Knowledge",
    description: "Master audit clauses, documentation, reporting protocols, and responsibilities of tax auditors.",
    icon: "🧾"
  },
  {
    title: "Software & Documentation Skills",
    description: "Learn to use Tally ERP and ITR filing software to perform accurate audits efficiently.",
    icon: "💻"
  },
  {
    title: "Latest Amendments & Updates",
    description: "Stay updated with the latest tax audit amendments, exemptions, and reporting standards.",
    icon: "🔄"
  },
  {
    title: "Consultancy Ready Expertise",
    description: "Prepare to confidently conduct tax audits and provide professional consultancy services.",
    icon: "💼"
  },
];

const courseContent = [
  {
    module: "Tax Audit Course Content",
    points: [
      "[translate:Tax Audit Under Section 44 AB]",
      "[translate:Presumptive Taxation U/S 44AD, 44ADA, 44AE, 44BB,44BBB]",
      "Exemptions from Tax Audit",
      "Amendments & Updates in Tax Audit",
      "Audit Reports- Form 3CD, 3CB, & 3CA",
      "Audited Financial Statements",
      "Audit Procedures",
      "Roles and Responsibilities of a Tax Auditor",
      "Documentation & Procedures of Tax Audit",
      "3CD- TDS",
      "3CD- TDS working",
      "3CD- TDS returns"
    ]
  }
];

const TaxAudit = () => (
  <div className="min-h-screen py-22 px-4 sm:px-6 lg:px-8" style={{background: "#fffefa"}}>
    <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">
        <img
          src="/tax.png"
          alt="Tax Audit Course"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          onError={e => {
            e.target.onerror = null;
            e.target.src = "/taxaudit.png";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#334b94]/90 via-[#334b94]/60 to-transparent flex items-end">
          <div className="p-4 sm:p-6 md:p-8 lg:p-12 w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white max-w-4xl">
              Tax Audit – Practical Training & Compliance Course
            </h1>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-4 sm:p-6 md:p-8 lg:p-12">
        {/* Intro */}
        <div className="mb-10 text-gray-800 text-lg sm:text-xl max-w-5xl font-medium leading-relaxed space-y-4">
          <p>
            The Tax Audit Course is designed to give you practical knowledge in accounting and ITR filing software, enabling you to assess financial records and ensure compliance with the Income Tax Act. Students gain practical experience in completing Forms 3CA, 3CB, and 3CD, reviewing books of accounts, and understanding audit clauses and reporting protocols.
          </p>
          <p>
            Using Tally ERP and ITR filing software, along with various other technologies, this training program focuses on audit planning, documentation, and compliance checks. It is designed to help you hone your auditing skills, enabling students to perform tax audits with both accuracy and confidence. This course is perfect for anyone who has completed their 10+2, especially Commerce students, professionals, and aspiring Chartered Accountants.
          </p>
        </div>

        {/* Highlights Card Grid */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6" style={{color: "#334b94"}}>
            Why Choose This Tax Audit Course?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden border border-[#e6e6e6] h-full">
                <div className="border-b border-[#e6e6e6] bg-gradient-to-r from-[#e6e6e6] to-white p-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-[#ef9b15]/20 rounded-full flex items-center justify-center mr-3 shadow-sm">
                      <span className="text-[#ef9b15] text-lg">{h.icon}</span>
                    </div>
                    <h3 className="font-semibold text-lg text-[#334b94]">{h.title}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 text-base">{h.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Course Curriculum */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6" style={{color: "#334b94"}}>
            Tax Audit Course Content
          </h2>
          <div className="space-y-8">
            {courseContent.map((section, idx) => (
              <div key={idx} className="bg-[#f6f7fd] border-l-4 border-[#ef9b15] rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2" style={{color: "#ef9b15"}}>
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
            <h4 className="text-lg font-bold mb-1" style={{color: "#334b94"}}>Important</h4>
            <p className="text-gray-800">
              Major future updates will be added in the course, and the Duration of courses will be changed according to them from time to time.
            </p>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="bg-[#334b94] rounded-xl overflow-hidden shadow-lg mt-8">
          <div className="py-8 px-6 sm:px-8 md:px-10 md:py-10 text-center md:text-left md:flex md:items-center md:justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
                Master Tax Audit & boost your professional skills!
              </h3>
              <p className="text-[#fffefa] text-sm sm:text-base">
                Enroll now for comprehensive, practical Tax Audit training.
              </p>
            </div>
<Link to="/contact">
              <button className="inline-block bg-white text-[#334b94] hover:bg-[#fffefa] font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300 text-sm sm:text-base border border-[#334b94]">
                Contact US
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TaxAudit;
