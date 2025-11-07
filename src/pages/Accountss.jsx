import React from "react";
import { Link } from "react-router-dom";

// Key course benefit highlights
const highlights = [
  {
    title: "100% Practical Accounting",
    description:
      "Master real-world accounting concepts from journal entries to software—no boring theory, just job-focused training!",
    icon: "🧮",
  },
  {
    title: "Business & Consultancy Ready",
    description:
      "Skill up for jobs or start your own CA, accounts, or finance consultancy with all important professional knowledge.",
    icon: "💼",
  },
  {
    title: "Latest GST & Software Practice",
    description:
      "Get hands-on with GST, software entries, year-end adjustments, and all essential business compliance routines.",
    icon: "🧾",
  },
  {
    title: "Complete Coverage",
    description:
      "From basic concepts to advanced grouping, RCM entries, ITC rules, digital ledgers, and more—one course, full expertise.",
    icon: "🎯",
  },
  {
    title: "Updates & Future-Proof",
    description:
      "Get access to all major future updates as accounting software, tax laws and business needs evolve.",
    icon: "🆕",
  },
];

const courseContent = [
  {
    module: "Accounting Course Content",
    points: [
      "Accounting Basic and Introduction",
      "Journal Entry Overview and 3 Methods of Entry",
      "Ist Method – Modern Approach with Examples",
      "IInd Method – Give and Take Approach with Examples",
      "Third Method – Traditional Approach (Golden Rule of Accounting) with Examples",
      "Financial Statement Overview",
      "Cash Book, Ledgers, Bank Book, Bank Reconciliation, Depreciation, Provisions, Prepaid Expenses",
      "Profit & Loss Statement, Balance Sheet",
      "Basic Introduction to Accounting Software with Basic Questions",
      "Sale Entry in Software with Examples",
      "Purchase Entry in Software with Examples",
      "Stock Entry in Software with Examples",
      "Basic Concept of GST",
      "Points to be Remembered Before Recording GST Transactions",
      "Sale, Purchase Entry in Software with GST for Trading Business (Retail, Wholesale)",
      "Accounting Entries of Purchase from an Unregistered Business / Composition Business",
      "Accounting Entries of Credit / Debit Note (Sale/Purchase)",
      "RCM Transactions in GST",
      "Accounting of Manufacturing Unit",
      "Accounting of Composition Dealer",
      "Accounting of Import & Export",
      "Accounting of Job Work",
      "Accounting for Multiple GSTINs of a Single Customer/ Vendor",
      "Detailed Discussion on Grouping",
      "Records of Stock (Raw Material, Work in Progress, and Finished Goods)",
      "Input Tax Credit in GST",
      "Detailed Knowledge of the Definition of Exempt Supply, Zero-Rated Supply, Aggregate Turnover, and Input Tax Credit",
      "Sec 16 Eligibility & Conditions for ITC with Rule 36",
      "Sec 17 Apportionment & Block Credits with Rule 42 and 43",
      "Sec 17(5) Block Credits in GST",
      "Rule 42 Apportionment of Input & Input Services",
      "Rule 43 Apportionment of Capital Goods",
      "Sec 18 ITC in Special Circumstances",
      "Section 49A & 49B Read with Rule 88A",
      "Rule 86A Condition of Use of Electronic Credit Ledger",
      "Rule 86B: Restriction on Use of Electronic Credit Ledger",
      "Accounting of Year-End Adjustments (Provisions/Prepaid, etc.)",
      "Depreciation Working",
      "Personal Balance Sheet Working (only based on Bank statement, etc.)",
      "Other Misc. Important Concept Coverage",
      "Important: Major future updates will be added to the course, and the Duration of courses will be adjusted accordingly from time to time.",
    ],
  },
];

// Advanced package courses
const advancedCourses = [

  {
    id: 2,
    title: "GST (Goods & Services Tax)",
    link: "/advance-gst",
    img: "/gst.png",
  },
];



const Accountss = () => (
  <div
    className="min-h-screen py-22 px-4 sm:px-6 lg:px-8"
    style={{ background: "#fffefa" }}
  >
    <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">
        <img
          src="/accountingblog.jpg"
          alt="Accounting Course"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/accounting.png";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#334b94]/90 via-[#334b94]/60 to-transparent flex items-end">
          <div className="p-4 sm:p-6 md:p-8 lg:p-12 w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white max-w-4xl">
              Accounting – Job/Practice Ready Course
            </h1>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-4 sm:p-6 md:p-8 lg:p-12">
        {/* Intro */}
        <div className="mb-10 text-gray-800 text-lg sm:text-xl max-w-5xl font-medium leading-relaxed space-y-4">
          <p>
            The foundation of any firm or profession is accounting. Because of
            this, there is a great need for accounting professionals. This
            course is made so that anyone may learn full accounting using
            accounting software in a very quick and easy way. They can also
            quickly find employment or start their own business.
          </p>
          <p>
            Firstly, we provide practical exposure to the basic concepts of
            accounting principles. We provide an overview of journal entries and
            outline three methods for making those entries. We provide exposure
            to Financial Statements, the Cash Book, the Bank Book, Bank
            Reconciliation, Depreciation, Provisions, Prepaid Expenses, the
            Profit & Loss Statement, and the Balance Sheet. Following that, you
            will use accounting software to get comprehensive accounting
            expertise. Kindly read the full course coverage below.
          </p>
        </div>

        {/* Highlights Card Grid */}
        <div className="mb-12">
          <h2
            className="text-2xl sm:text-3xl font-semibold mb-6"
            style={{ color: "#334b94" }}
          >
            Why Join This Accounting Course?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden border border-[#e6e6e6] h-full"
              >
                <div className="border-b border-[#e6e6e6] bg-gradient-to-r from-[#e6e6e6] to-white p-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-[#ef9b15]/20 rounded-full flex items-center justify-center mr-3 shadow-sm">
                      <span className="text-[#ef9b15] text-lg">{h.icon}</span>
                    </div>
                    <h3 className="font-semibold text-lg text-[#334b94]">
                      {h.title}
                    </h3>
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
          <h2
            className="text-2xl sm:text-3xl font-semibold mb-6"
            style={{ color: "#334b94" }}
          >
            Accounting Course Content
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
              Major future updates will be added to the course, and the Duration
              of courses will be adjusted accordingly from time to time.
            </p>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="bg-[#334b94] rounded-xl overflow-hidden shadow-lg mt-8">
          <div className="py-8 px-6 sm:px-8 md:px-10 md:py-10 text-center md:text-left md:flex md:items-center md:justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
                Want to become a professional accountant or consultant?
              </h3>
              <p className="text-[#fffefa] text-sm sm:text-base">
                Get industry-ready with the most practical, futureproof
                accounting course today.
              </p>
            </div>
            <Link to="/contact">
              <button className="inline-block bg-white text-[#334b94] hover:bg-[#fffefa] font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300 text-sm sm:text-base border border-[#334b94]">
                Contact US
              </button>
            </Link>
          </div>
        </div>

                {/* Advanced Package Courses Section */}
                <div className="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="text-2xl font-semibold mb-6 text-[#334b94]">
                    Advanced Package - Courses
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {advancedCourses.map((course) => (
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


export default Accountss