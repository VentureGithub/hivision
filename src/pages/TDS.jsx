import React from "react";
import { Link } from "react-router-dom";

// Key course benefit highlights
const highlights = [
  {
    title: "Complete TDS & TCS Knowledge",
    description: "Master the essential concepts, registrations, return filing, and compliance related to TDS and TCS.",
    icon: "📋"
  },
  {
    title: "Step-by-Step Practical Training",
    description: "Learn TAN application, filing returns using NSDL utilities, form downloads, corrections, and more.",
    icon: "🛠️"
  },
  {
    title: "Consultancy Ready Skills",
    description: "Prepare to independently manage TDS/TCS for businesses or start your own consultancy.",
    icon: "💼"
  },
  {
    title: "Detailed Section-wise Coverage",
    description: "Covering major sections from salary to virtual digital assets and every TDS/TCS scenario.",
    icon: "📚"
  },
  {
    title: "Updated Compliance & Filing",
    description: "Always updated with the latest compliance requirements, FAQs, and filing formats.",
    icon: "🆕"
  },
];

const courseContent = [
  {
    module: "TDS & TCS Course Content",
    points: [
      "TDS Conceptual Clarity",
      "How to Apply for New TAN",
      "New TAN Registration Process on Income Tax Portal",
      "How to Register and Activate a New TAN on Traces",
      "Know PAN for TDS",
      "Sec 192 TDS on Salary",
      "Sec 192A Pre-Mature Withdrawal of Provident Fund",
      "Sec 194C TDS on Contractor",
      "Sec 194D, 194H & 194G TDS on Commission",
      "Sec 193 Interest on Securities",
      "194A TDS on Interest Other than Securities",
      "194 TDS on Dividend",
      "194B & BB TDS on Winnings, 194BA TDS on Online Gaming",
      "194DA Payment of the Maturity Amount of the Life Insurance Premium",
      "194E Payment to a Non-Resident Sportsmen's Sports Association or Entertainer",
      "194EE National Saving Scheme",
      "194F Payment on Repurchase of Units by Mutual Fund/UTI",
      "Sec 194I TDS on Rent",
      "Sec 194IA TDS on property  (New PAN-Based Challan Cum Return Detailed Coverage Challan 26QB)",
      "Sec 194IB TDS on Rent by Certain Individuals (PAN-Based Challan Cum Return, Detailed Coverage) with Filing of 26QC",
      "Sec 194IC Payment Under Joint Development Agreement",
      "Sec 194J TDS on Professional Services",
      "Sec 194LA Compensation on Compulsory Acquisition of Immovable Property",
      "Sec 194K TDS on Contract, Commission or Brokerage, or Fee for Professional Service",
      "194M TDS on Certain Payments (PAN-Based Challan Cum Return Detailed Coverage)",
      "Sec 194N TDS on Cash Withdrawal",
      "Sec 194O TDS on E-Commerce",
      "Sec 194P Pension (Along with Interest on Bank Account)",
      "Sec 194Q TDS on Purchase of Goods",
      "Sec 194R TDS on Perquisites",
      "Sec 194S TDS on Virtual Digital Assets",
      "TCS (Complete Concept Clarity – TCS on Certain Goods, TCS on Sale of Goods, TCS on Motor Vehicle, TCS on Lease of Parking, Toll plaza, TCS on Foreign Remittance)",
      "TDS Return Form 26Q Filing (Using Free RPU Utility of NSDL)",
      "TCS Return Form 27EQ Filing (Using Free RPU Utility of NSDL)",
      "Form 24Q Filing (Through Free Software RPU by NSDL)",
      "Correction of TDS Returns (Online for Challan and Deductee Details or Employee Details)",
      "Form 16, 16A, 16B, 16C Download",
      "Section 195 TDS of Non-Resident",
      "Form 27Q Filing",
      "How to Pay TDS/TCS Online (New Payment Option Explained)?",
      "FAQ Coverage for Important Sections and Many More."
    ]
  }
];


// Premium Package courses data
const premiumCourses = [
  // {
  //   id: 1,
  //   title: "Accounts",
  //   link: "/accounting",
  //   img: "/accounting.png",
  // },
  // {
  //   id: 2,
  //   title: "GST (Goods & Services Tax)",
  //   link: "/gst",
  //   img: "/gst.png",
  // },
  // {
  //   id: 3,
  //   title: "Company Law",
  //   link: "/company-law",
  //   img: "/company.png",
  // },
  // {
  //   id: 4,
  //   title: "Tax Audit",
  //   link: "/tax-audit",
  //   img: "/tax.png",
  // },
  {
    id: 6,
    title: "Income Tax",
    link: "/income-tax",
    img: "/income.png",
  },
];


const TdsTcsCourse = () => (
  <div className="min-h-screen py-22 px-4 sm:px-6 lg:px-8" style={{ background: "#fffefa" }}>
    <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">
        <img
          src="/Gemini_Generated_Image_yhczoeyhczoeyhcz.png"
          alt="TDS and TCS Course"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          onError={e => {
            e.target.onerror = null;
            e.target.src = "/tdstcs.png";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#334b94]/90 via-[#334b94]/60 to-transparent flex items-end">
          <div className="p-4 sm:p-6 md:p-8 lg:p-12 w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white max-w-4xl">
              TDS and TCS — Comprehensive Practical Course
            </h1>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-4 sm:p-6 md:p-8 lg:p-12">
        {/* Intro Section */}
        <div className="mb-10 text-gray-800 text-lg sm:text-xl max-w-5xl font-medium leading-relaxed space-y-4">
          <p>
            The TDS & TCS concept is wider in the income tax regulations. One can start their own consultancy specializing solely in this field and earn a substantial income by providing TDS and TCS. Only the TDS & TCS rules are important for businesspersons, professionals, and consultants.
          </p>
          <p>
            This hands-on course takes you on a guided journey through everything TDS and TCS related including section-wise conceptual clarity, in-depth guidance for applying for a new TAN application (Tax Deduction and Collection Account Number), register and activate new TAN, filing all TDS and TCS returns including salary-related returns using the free NSDL hard disk, downloading forms 16/16A/16B/16C, applying for lower deduction certificates, managing late fees, correcting or revising TDS returns (Challan and Deductee), handling TDS on Non-Residents, TDS on property transactions, and more.
          </p>
          <p>
            Enroll in this highly beneficial course to start your own consultancy in TDS and TCS. It is essential to be aware of TDS and TCS compliance because missing these obligations can lead to severe consequences. You will be more than satisfied if you can manage these compliances independently without relying on others. Join the course and get benefits.
          </p>
        </div>

        {/* Highlights Card Grid */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6" style={{ color: "#334b94" }}>
            Why Choose This TDS and TCS Course?
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
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6" style={{ color: "#334b94" }}>
            TDS & TCS Course Content
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
            <h4 className="text-lg font-bold mb-1" style={{ color: "#334b94" }}>Important</h4>
            <p className="text-gray-800">
              Major future updates will be added in the course, and the Duration of courses will be changed according to them from time to time.
            </p>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="bg-gradient-to-r from-[#334b94] to-[#ef9b15] rounded-xl overflow-hidden shadow-lg mt-8">
          <div className="py-8 px-6 sm:px-8 md:px-10 md:py-10 text-center md:text-left md:flex md:items-center md:justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
                Ready to master TDS & TCS consultancy?
              </h3>
              <p className="text-[#fffefa] text-sm sm:text-base">
                Enroll today to gain practical & up-to-date TDS and TCS expertise.
              </p>
            </div>
            <Link to="/enquiry">
              <button className="inline-block bg-white text-[#334b94] hover:bg-[#fffefa] font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300 text-sm sm:text-base border border-[#334b94]">
                Request a Free Consultation
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

export default TdsTcsCourse;
