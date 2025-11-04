import React from "react";
import { Link } from "react-router-dom";

// Course highlights for quick benefits
const highlights = [
  {
    title: "All Major ITRs & Returns",
    description: "Detailed coverage of ITR-1, 2, 3, 4, U and independent TDS/TCS return filing.",
    icon: "🧾"
  },
  {
    title: "Pro Level Practical Training",
    description: "Live training in salary, property, business, and digital asset returns—auditor view & software.",
    icon: "💻"
  },
  {
    title: "Consultancy Ready Skills",
    description: "Build foundation for your own tax consultancy or manage end-to-end for organizations.",
    icon: "💼"
  },
  {
    title: "All Latest Tax Regimes",
    description: "Master latest new/old tax regimes, slab rates for every entity, and all critical assessment changes.",
    icon: "📊"
  },
  {
    title: "Deduction & Exemptions Mastery",
    description: "Complete training on deductions, rebates, clubbing, set-off/carry forward and live claim demonstration.",
    icon: "📗"
  },
];

const courseContent = [
  {
    module: "Basic Concepts & Tax Structures",
    points: [
      "Basic of Income Tax",
      "Types of Taxes",
      "Important Definitions",
      "Previous Year and Assessment Year",
      "Residential Status",
      "Gross Total Income vs Total Income"
    ]
  },
  {
    module: "IT Slab Rates & Regimes",
    points: [
      "Income Tax Slab Rates for Individuals",
      "Income Tax Slab Rates for HUF",
      "Income Tax Slab Rates for Partnership Firm",
      "Income Tax Slab Rates for Limited Liability Partnership (LLP)",
      "Income Tax Slab Rates for Companies",
      "Income Tax Slab Rates for Co-operative Societies",
      "Income Tax Slab Rates for Association of Persons",
      "New Tax Regime",
      "Old Tax Regime",
      "Surcharge, Rebate, HEC",
      "Marginal Relief",
      "Treatment of Agriculture Income",
      "Latest Slab Rates",
      "ITR & Audit Due dates",
      "Form 10IEA and 10IA"
    ]
  },
  {
    module: "Income from Salary",
    points: [
      "Introduction",
      "Basis of Charge of Income from Salaries",
      "All Allowances",
      "All Retirement Benefits",
      "Profit in place of Salary",
      "All Perquisites",
      "Deductions u/s 16",
      "Relief u/s 89 for Arrear of Salary and 89A (with filing of Form 10E, 10EE)",
      "Filing of Form 10IE",
      "Computation of Income From Salary",
      "How to show Income from Salary, Pension, Exemption, Perquisites, etc. in Income Tax Return Forms (Practical Training)?"
    ]
  },
  {
    module: "Income from House Property",
    points: [
      "Basis of Charge of Income from House Property",
      "Gross Annual Value",
      "Deductions from Rental Incomes (Section 24)",
      "Interest on Borrowed Capital with PCP",
      "Special Aspects – Arrears of Rent Received",
      "Special Aspects – Co-Ownership",
      "Computation of Income from House Property",
      "Deemed Owner",
      "Composite Rent",
      "How to show income from House property in the Income Tax Return (practical training)?"
    ]
  },
  {
    module: "Income From Business and Profession",
    points: [
      "Introduction",
      "Basis of Charge of Profits and Gains of Business or Profession (Sec. 28 to 44)",
      "Allowability/Deduction of Expenditure (Practical Coverage with the Perspective of the Auditor in ITR)",
      "Compulsory Maintenance of Books of Accounts (Sec. 44AA)",
      "Compulsory Audit of Accounts- Sec. 44AB",
      "Depreciation",
      "Section 35, Donation/Expense on Scientific Research",
      "Inadmissible Expenditure",
      "Presumptive Tax- Section 44AD, 44ADA, 44AE",
      "Alternate Minimum Tax",
      "How to Show Income from Business and Profession in Income Tax Return with F and O business, Intraday Trading Business, etc. (Practical Training)?"
    ]
  },
  {
    module: "Income from Other Sources",
    points: [
      "Basis of Charge of Income from Other Sources",
      "Dividend, Interest Income",
      "Winning from Lotteries, Crossword puzzles, Horse Races, and card games, etc. (Also known as Casual Income)",
      "Taxability of Gifts",
      "Family Pension",
      "Deductions u/s 57, 58,59",
      "Computation of Income from Other Sources",
      "How to show this in Income Tax Return (Practical Training)",
      "Taxation of Virtual Digital Assets and Treatment in ITR – Cryptocurrency"
    ]
  },
  {
    module: "Clubbing of Income",
    points: [
      "Situations in which Clubbing of Provisions Attracted",
      "Income Transfer with Transfer Asset",
      "Revocable Transfer of Asset",
      "Payment to Spouse from Concern in which Individual has Substantial Interest",
      "Transfer to Spouse",
      "Transfer to Son’s Wife",
      "Transfer for the Benefit of Spouse / Son’s Wife",
      "Minor Income",
      "Income from Concern in which Substantial Interest Exists",
      "Other Aspects of Clubbing of Income"
    ]
  },
  {
    module: "Set off and Carry Forward of Losses",
    points: [
      "Current Year Loss",
      "Within the same source, Intra Head",
      "Any Head Inter Head",
      "Brought Forward Loss",
      "Loss from Property",
      "Business Loss",
      "Unabsorbed Depreciation",
      "Capital Loss",
      "Loss under Other Sources",
      "How to Show in Income Tax Return (Practical Training)?"
    ]
  },
  {
    module: "Deductions under Chapter VI-A",
    points: [
      "80 C – LIC, School Fee, NSC, PF, Housing Loan cost, FD, etc.",
      "Section 80CCC: Contribution to Certain Specified Pension Funds",
      "Section 80CCD: Contribution to the Pension scheme of the central govt./New Pension scheme/Atal Pension Yojna",
      "80 D – Mediclaim (Self, Parents, Preventive Health Checkup, etc.)",
      "80 DD / 80 U – Disability of Assessee / Dependent",
      "80 DDB – Medical Treatment",
      "80 E – Interest on Education Loan",
      "80 EE – Interest on Loan for Specified House Property",
      "80 EEA – Interest on Loan taken for Certain House Property",
      "80 EEB – Interest on Loan taken for Purchase of Electric Vehicle",
      "80 G – Donation to Approved fund and Charitable Institutions",
      "80 GG – Rent paid no HRA",
      "80 GGA – Donation to Research Institutions, etc.",
      "80 GGB, 80GGC – Deduction to Political Parties etc.",
      "80 QQB – Royalty on Books",
      "80 RRB – Royalty on Patents",
      "80 TTA – Interest on Saving Account Deposits",
      "80TTB – Interest on Deposits in case of Senior Citizens",
      "Section 80U: Deduction for Handicapped Assessee",
      "How to show Deductions in ITR (Practical Training)?"
    ]
  },
  {
    module: "Advance Tax & Interest",
    points: [
      "Advance Tax",
      "Interest for Delay in Return Filing",
      "Interest for Non-payment / Short Payment of Advance Tax",
      "Interest for Deferment of Advance Tax Installments"
    ]
  },
  {
    module: "Persons exempted and Live Training",
    points: [
      "Persons exempted from Income tax Return Filing",
      "Income Tax Returns filing Live Training",
      "ITR 1",
      "ITR 2",
      "ITR 3",
      "ITR 4",
      "ITR U"
    ]
  }
];

const IncomeTax = () => (
  <div className="min-h-screen py-22 px-4 sm:px-6 lg:px-8" style={{ background: "#fffefa" }}>
    <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">
        <img
          src="/incometaxblog.jpg"
          alt="Income Tax Course"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          onError={e => {
            e.target.onerror = null;
            e.target.src = "/income.png";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#334b94]/90 via-[#334b94]/60 to-transparent flex items-end">
          <div className="p-4 sm:p-6 md:p-8 lg:p-12 w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white max-w-4xl">
              Income Tax & ITR — Pro Training Course
            </h1>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-4 sm:p-6 md:p-8 lg:px-12">
        {/* Intro Section */}
        <div className="mb-10 text-gray-800 text-lg sm:text-xl max-w-5xl font-medium leading-relaxed space-y-4">
          <p>
            Income Tax is a broad and complex subject. The old Income Tax Act of 1961 is soon going to be replaced by the new Income Tax Act of 2025. In this course, we have included the following content to help you become proficient in filing Income Tax Returns (ITR) such as ITR-1, ITR-2, ITR-3, and ITR-4. Additionally, you will learn how to file TDS and TCS returns independently and gain the skills needed to start your own consultancy in this field.
          </p>
        </div>

        {/* Highlights Card Grid */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6" style={{ color: "#334b94" }}>
            Why Join This Income Tax Course?
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
            Income Tax and ITR Course Content
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
              Major future updates will be added to the course, and the duration may change as the law or market requires.
            </p>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="bg-[#334b94] rounded-xl overflow-hidden shadow-lg mt-8">
          <div className="py-8 px-6 sm:px-8 md:px-10 md:py-10 text-center md:text-left md:flex md:items-center md:justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
                Ready to become an Income Tax and ITR expert?
              </h3>
              <p className="text-[#fffefa] text-sm sm:text-base">
                Get started with live & practical ITR training today.
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

export default IncomeTax;
