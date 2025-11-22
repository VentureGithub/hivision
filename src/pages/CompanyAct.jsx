import React from "react";
import { Link } from "react-router-dom";

// Highlights for Company Act Course
const highlights = [
  {
    title: "Company Taxation Foundations",
    description: "Understand core company taxation principles from Income Tax Act to MAT, advance tax, and deductions.",
    icon: "🏦"
  },
  {
    title: "Incorporation & MCA Portal Hands-On",
    description: "Step-by-step company creation, documentation, MCA portal usage, and real e-filing exposure.",
    icon: "🧑‍💻"
  },
  {
    title: "Compliance & Planning",
    description: "Learn latest compliance, post-incorporation rules, tax planning and how to avoid common mistakes.",
    icon: "📑"
  },
  {
    title: "Real Returns & Statements",
    description: "Practical coverage of company returns, financial statements, and assessment management.",
    icon: "📊"
  },
  {
    title: "Industry & Update Ready",
    description: "All recent changes and regular updates keep you ready for both private and public firm requirements.",
    icon: "⚡"
  }
];

// Premium Package courses data
const premiumCourses = [
  {
    id: 4,
    title: "Tax Audit",
    link: "/tax-audit",
    img: "/tax.png",
  },
];


const CompanyAct = () => (
  <div className="min-h-screen py-22 px-4 sm:px-6 lg:px-8" style={{ background: "#fffefa" }}>
    <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">
        <img
          src="/companyactblog.jpg"
          alt="Company Act Course]"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          onError={e => {
            e.target.onerror = null;
            e.target.src = "company.png";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#334b94]/90 via-[#334b94]/60 to-transparent flex items-end">
          <div className="p-4 sm:p-6 md:p-8 lg:p-12 w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white max-w-4xl">
              Company Act & Law — Professional Returns, Compliance & MCA Training
            </h1>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-4 sm:p-6 md:p-8 lg:p-12">
        {/* Intro */}
        <div className="mb-10 text-gray-800 text-lg sm:text-xl max-w-5xl font-medium leading-relaxed space-y-4">
          <p>
            The primary goal of the Company Tax Course is to comprehend and implement the Income Tax Act's company taxation principles. Students acquire hands-on experience with submitting company returns, the Minimum Alternate Tax (MAT), advance tax, and deductions.
          </p>
          <p>
            The course covers recent changes that impact both private and public limited firms, tax planning, and compliance procedures. Additionally, students gain knowledge of managing tax assessments, calculating taxable income, and creating financial statements.
          </p>
          <p>
            This course is perfect for students who have completed 10+2, particularly for accounting professionals, graduates from all streams, and those aspiring to become certified public accountants.
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>Basics of Company Incorporation and Documents Required</li>
            <li>NIC Code Selection</li>
            <li>Precautions while Selecting the Name of the Company</li>
            <li>Company Name Selection, Documents, What you will get with Certificate of Incorporation, and Post-Company Incorporation Compliances.</li>
            <li>Create a User at the MCA Portal and Associate DSC of Directors</li>
            <li>Create a Professional Business User Account and An Associate DSC of CA, CWA, CS, and Advocate</li>
            <li>Filing of Spice + form (Part A & Part B)</li>
            <li>AGILE Pro to get PAN, TAN, GST, EPFO, ESI, Professional Tax Registrations, etc.</li>
            <li>E-MOA, E-AOA</li>
            <li>How to Attach DSC on PDF Forms?</li>
            <li>File the PDF Forms on the MCA Portal and Final Submission, and Online MCA Fee Payment</li>
            <li>FAQ of SPICE</li>
            <li>How to Download the E-PAN card of a New Company</li>
            <li>Filing of INC 20A</li>
          </ul>
        </div>

        {/* Highlights Card Grid */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6" style={{ color: "#334b94" }}>
            Why Choose This Company Act Course?
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
        {/* Additional Detailed Info Section */}
        <div className="mt-12 text-gray-800 mx-auto space-y-8 text-lg leading-relaxed">
          <section>
            <h3 className="text-xl font-semibold mb-4 text-[#334b94]">Types of Companies</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Private Company – Minimum 2 members, restricted share transfer.</li>
              <li>Public Company – Minimum 7 members, can list shares publicly.</li>
              <li>One Person Company (OPC) – Single shareholder structure.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-4 text-[#334b94]">Key Roles and Responsibilities</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Directors – Fiduciary duties, board governance, compliance.</li>
              <li>Company Secretary – Ensures legal and procedural compliance.</li>
              <li>Shareholders – Ownership and voting rights.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-4 text-[#334b94]">Important Sections to Highlight</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Section 3 – Definition and types of companies.</li>
              <li>Section 7 – Incorporation process.</li>
              <li>Section 149–172 – Board of Directors: appointment, duties, meetings.</li>
              <li>Section 185–186 – Loans and investments.</li>
              <li>Section 248 – Strike off and winding up.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-4 text-[#334b94]">Compliance Essentials</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Filing of Annual Returns (MGT-7) and Financial Statements (AOC-4).</li>
              <li>Holding AGMs, maintaining statutory registers.</li>
              <li>Adherence to Secretarial Standards (SS-1, SS-2).</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-4 text-[#334b94]">MCA Portal – Practical Knowledge</h3>
            <h4 className="font-semibold mb-2">What is MCA Portal?</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Official platform of the Ministry of Corporate Affairs.</li>
              <li>Facilitates e-Governance for company registration, filings, and compliance.</li>
            </ul>

            <h4 className="font-semibold mt-6 mb-2">Core Functionalities</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Company Incorporation – SPICe+ form (Part A & B).</li>
              <li>DIN & DSC Management – Director Identification Number, Digital Signature.</li>
              <li>E-Filing – Uploading forms like DIR-12, INC-22, MGT-7, AOC-4.</li>
              <li>Public Document Access – View company master data, charges, filings.</li>
              <li>Grievance Redressal – Helpdesk and ticket system.</li>
            </ul>

            <h4 className="font-semibold mt-6 mb-2">MCA V3.0 Highlights</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Enhanced user interface and compliance management system.</li>
              <li>E-adjudication, e-consultation, and advanced helpdesk features.</li>
              <li>Integration with PAN, Aadhaar, and GST for seamless filings.</li>
            </ul>
          </section>
        </div>



        {/* Important Note */}
        <div className="mt-12 mb-6 bg-gradient-to-r from-[#ef9b15]/20 to-[#e6e6e6]/40 p-6 rounded-xl flex items-center gap-4 border-l-4 border-[#ef9b15] shadow">
          <span className="text-3xl">⚠️</span>
          <div>
            <h4 className="text-lg font-bold mb-1" style={{ color: "#334b94" }}>
              Important
            </h4>
            <p className="text-gray-800">
              Major future updates will be added to the course, and the duration of courses will be changed according to them, from time to time.]
            </p>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="bg-[#334b94] rounded-xl overflow-hidden shadow-lg mt-8">
          <div className="py-8 px-6 sm:px-8 md:px-10 md:py-10 text-center md:text-left md:flex md:items-center md:justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
                Ready for MCA, Company Tax & compliance mastery?
              </h3>
              <p className="text-[#fffefa] text-sm sm:text-base">
                Get industry-ready with practical company act, tax & returns training.
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

export default CompanyAct;
