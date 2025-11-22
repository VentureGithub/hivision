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
  {
    module: "Introduction to GST",
    points: [
      "Types of Taxes, Pre-GST, History, Benefit, and Concept of GST in India",
      "Constitutional Amendment",
      "GST Definition",
      "Important Website Links for GST Work",
      "GST Council",
      "GST Hierarchy",
      "Detailed explanation of Important Definitions – Goods, Services, Consideration, Business, Related persons, Distinct Persons under GST",
      "Components of GST",
    ],
  },
  {
    module: "Supply under GST",
    points: [
      "Concept of Supply with Examples",
      "Sh I, Sh II, SH III",
      "Composite and Mixed Supply",
      "Taxability of Composite and Mixed Supply",
      "GST Tax Structure",
      "GST Compensation to States Act (Cess)",
    ],
  },
  {
    module: "Levy of GST",
    points: ["Levy & Collection of Tax"],
  },
  {
    module: "Time of Supply in GST",
    points: [
      "TOS in Case of Goods",
      "TOS in Case of Services",
      "TOS in Case of RCM",
      "Change in the Rate of Tax Treatment",
      "Special Time of Supply for the Real Estate Sector",
    ],
  },
  {
    module: "Value of Supply in GST",
    points: [
      "Valuation Detailed Concept",
      "Valuation Rules to Calculate Taxable Value in Different Types of Businesses, i.e., Lottery Betting and Gambling, Money Changer, Air Travel Agent, Life Insurance Business, Sale and Purchase of Second-Hand Goods, Vouchers, and Pure Agent.",
    ],
  },
  {
    module: "Payment of Tax",
    points: [
      "Section 49: Payment of Tax, Interest, Penalty, and other amounts",
      "Electronic credit ledger",
      "Electronic cash ledger",
      "Electronic liability ledger",
      "Section 50 etc.",
    ],
  },
  {
    module: "Place of Supply in GST",
    points: [
      "POS of Goods within India",
      "POS of Imported and Exported Goods",
      "POS of Services within India",
      "Place of supply of Telecommunication Services",
      "Exempted Goods under GST",
      "Exemption Service under GST",
    ],
  },
  {
    module: "Input Tax Credit in GST",
    points: [
      "Detailed knowledge of the Definition of Exempt supply, Zero-rated supply, Aggregate Turnover, and Input Tax Credit",
      "Sec 16 Eligibility and Conditions for ITC with Rule 36",
      "Sec 17 Apportionment and Block Credits with Rules 42 and 43",
      "Sec 17(5) Block Credits in GST",
      "Rule 42 apportionment of Input and Input services",
      "Rule 43 Apportionment of Capital Goods",
      "Sec 18 ITC in Special Circumstances",
      "Section 49A and 49B Read with Rule 88A",
      "Rule 86A Condition of Use of Electronic Credit Ledger",
      "Rule 86B: Restriction on Use of Electronic Credit Ledger",
    ],
  },
  {
    module: "Registration in GST",
    points: [
      "Detailed Knowledge of the Definition of a Casual Taxable Person, Non-Resident Taxable Person",
      "Person Liable for GST Registration",
      "Persons Not Liable for Registration",
      "Compulsory Registration",
      "Procedure for Registration",
      "Practical Session on GST Registration",
      "Deemed Registration",
      "Special Provisions Relating to Casual Taxable Person and Non-Resident Taxable Person",
      "Section 28: Amendment of Registration (Core & Non-Core)",
      "Cancellation or Suspension of Registration",
      "30: Revocation of Cancellation of Registration",
      "Documents Required for GST Registration",
    ],
  },
  {
    module: "TDS and TCS, Tax Invoice, Debit Note & Credit Note in GST",
    points: [
      "TDS & TCS under GST",
      "Tax Invoice Provisions and Rules",
      "Delivery Challan",
      "Debit Note and Credit Note Provisions",
      "E-Invoicing",
      "TDS and TCS Detailed Concept Knowledge (All Section Coverage with Late Fee, Interest, Due for Payments, etc.)",
      "TDS Accounting in the Books of Deductor",
      "TDS Accounting in the Books of Deductee",
      "TDS in Software",
      "TCS in software",
    ],
  },
  {
    module: "RCM in GST",
    points: ["RCM on Goods", "RCM on Services", "RCM from An Unregistered Purchase"],
  },
  {
    module: "QRMP Scheme in GST",
    points: [
      "Types of GST Returns",
      "GST Returns Filing Structure",
      "QRMP Scheme Detailed Coverage with Case Studies",
      "IFF and Mode of Payment",
      "Interest and Late Fee",
    ],
  },
  {
    module: "ISD, Accounts and Records, E-Way Bill",
    points: [
      "Input service Distributor Concept Detailed Coverage with GSTR6",
      "Principal Place of Business",
      "Place of Business",
      "Accounts and Records",
      "E-Way Bill Detailed Conceptual and Practical Coverage",
    ],
  },
  {
    module: "Composition Scheme, Job Work, E-Invoice",
    points: [
      "Composition Levy for Traders and Manufacturers",
      "Composition Levy for Restaurant Services",
      "Composition Levy for other services",
      "Job Work",
      "E-invoice Complete Coverage",
    ],
  },
  {
    module: "Types of Returns in GST",
    points: [
      "Overview of GSTR 1",
      "Overview of GSTR 2A",
      "Overview of GSTR 2B",
      "Difference Between GSTR 2A and 2B",
      "Overview GSTR 3B",
      "Overview of GSTR 4",
      "Overview of CMP 08",
      "Overview of GSTR 5",
      "Overview of GSTR 6",
      "Overview of GSTR 7",
      "Overview of GSTR 8",
      "Overview of GSTR 9 (Annual Return)",
      "Overview of GSTR 9C",
      "Overview of GSTR 10 (Final Return)",
    ],
  },
  {
    module: "Practical session on GSTR 2A and GSTR 2B",
    points: [
      "What is the Meaning of GSTR 2A & 2B",
      "Difference Between 2A vs 2B",
      "GST Returns Date and Linking of these Dates with 2A and 2B",
      "Condition to Claim ITC",
      "History of ITC Rules",
      "GSTR 2B Reconciliation with GSTR 2A",
      "GSTR-2B Vs Books Reconciliation, Benefits, Case Studies, and Accounting Adjustment Entries",
      "GSTR-2B Vs Books Reconciliation (Monthly)",
      "Reconciliation of Books vs GSTR-2B Vs 2A (Monthly)",
      "Practical Sessions on GSTR 1, 6 ways of filing GSTR-1",
      "Practical Session on GSTR 3B (Regular)",
      "Practical Session on GSTR 3B (QRMP)",
      "Practical Session on GST Computation",
      "Complete Coverage of GST Annual Return (GSTR 9) and GSTR-9C",
      "Detailed Explanation of GSTR-9 Form.",
      "Basics of GSTR-9/9C",
      "Who is to File GSTR-9/9C",
      "When to File GSTR-9/9C",
      "Required Records for GSTR-9",
      "Reporting and Optional Tables of GSTR-9",
      "Spill Over Effects: MORE THAN 22+ EXAMPLES (TO PROVIDE SOLUTION FOR ALL MISTAKES RELATED TO INPUT (ITC) & OUTPUT (sale))",
      "Impact of Debit and Credit Notes",
      "RCM",
      "What is GSTR-9C?",
      "GSTR-9C form (Part A and Part B)",
      "Table 12 of GSTR-9C with Practical Examples",
      "Table 5 of GSTR-9C Detailed Explanation",
      "All Other Tables of GSTR-9C with the Auditors' Checklist and Certification Part",
    ],
  },
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
              <div key={idx} className="bg-[#f6f7fd] border-l-4 border-[#ef9b15] rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2" style={{ color: "#ef9b15" }}>
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
        {/* Premium Package Courses Section */}
        <div className="mt-20 mb-12">
          {/* Premium Package Courses Section - Enhanced */}
<div className="mt-20 mb-12">
  {/* Enhanced Heading with Background */}
  <div className="relative mb-12 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-[#334b94]/5 via-[#ef9b15]/5 to-[#334b94]/5 rounded-2xl"></div>
    <div className="relative text-center py-8 px-4">
      <div className="inline-flex items-center justify-center gap-3 mb-3">
        <div className="w-12 h-1 bg-gradient-to-r from-transparent via-[#ef9b15] to-[#ef9b15] rounded-full"></div>
        <span className="text-4xl">✨</span>
        <div className="w-12 h-1 bg-gradient-to-l from-transparent via-[#ef9b15] to-[#ef9b15] rounded-full"></div>
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
        <span className="bg-gradient-to-r from-[#334b94] to-[#ef9b15] bg-clip-text text-transparent">
          Premium Package
        </span>
      </h2>
      <p className="text-xl md:text-2xl font-semibold text-[#334b94] mb-2">
        Explore More Courses
      </p>
      <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
        Unlock your potential with our comprehensive premium courses designed for professionals
      </p>
      <div className="mt-4 flex justify-center">
        <div className="h-1 w-32 bg-gradient-to-r from-[#ef9b15] via-[#334b94] to-[#ef9b15] rounded-full"></div>
      </div>
    </div>
  </div>

  {/* Courses Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {premiumCourses.map((course) => (
      <Link
        key={course.id}
        to={course.link}
        className="block bg-white rounded-xl shadow-xl hover:shadow-2xl border-2 border-[#ef9b15] transform hover:scale-105 transition-all duration-300"
      >
        <div className="relative h-52 overflow-hidden rounded-t-xl">
          <img
            src={course.img}
            alt={course.title}
            className="w-full h-full object-cover"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)" }}
          />
        </div>
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold text-[#334b94]">{course.title}</h3>
        </div>
      </Link>
    ))}
  </div>
</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {premiumCourses.map((course) => (
              <Link
                key={course.id}
                to={course.link}
                className="block bg-white rounded-xl shadow-xl hover:shadow-2xl border-2 border-[#ef9b15] transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative h-52 overflow-hidden rounded-t-xl">
                  <img
                    src={course.img}
                    alt={course.title}
                    className="w-full h-full object-cover"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)" }}
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-[#334b94]">{course.title}</h3>
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
