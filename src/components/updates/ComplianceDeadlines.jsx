import React from "react";

export default function ComplianceDeadlines() {
  return (
    <div className="min-h-screen bg-white text-gray-800 antialiased mt-16 px-6  max-w-6xl mx-auto">
      {/* PAN–Aadhaar Linking Section */}
      <section className="mb-14">
        <h1 className="text-4xl md:text-4xl font-extrabold tracking-wide text-[#334b94] drop-shadow-sm mb-6">
          PAN–Aadhaar Linking Deadline Extended to <span className="text-[#ef9b15]">31 Dec 2025</span>
        </h1>

        <p className="text-gray-700 mb-6 leading-relaxed">
          The CBDT has extended the PAN–Aadhaar linking deadline only for PANs issued using an Aadhaar Enrolment ID before 1 Oct 2024. These PAN holders must link their PAN with Aadhaar by 31 December 2025.
        </p>

        <div className="bg-gradient-to-r from-[#ef9b15] to-[#ffb76b] rounded-lg p-6 text-white shadow-md">
          <h2 className="font-semibold text-2xl mb-4">Key Points</h2>
          <ul className="list-disc list-inside space-y-2 text-white/90">
            <li>PANs not linked by the new deadline will become inoperative from 1 Jan 2026.</li>
            <li>Inoperative PAN = no ITR filing, no refunds, higher TDS/TCS, and blocked financial transactions.</li>
            <li>Link your PAN using the Income Tax e-filing portal after paying the ₹1,000 fee (if required).</li>
          </ul>
        </div>

        <div className="mt-6 bg-[#334b94] rounded-lg p-6 text-white shadow-lg">
          <h3 className="font-semibold text-xl mb-3">Quick Steps</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Check status → Income Tax portal</li>
            <li>Pay ₹1,000 (if unlinked)</li>
            <li>Link PAN–Aadhaar using OTP</li>
            <li>Save acknowledgement</li>
          </ol>
        </div>

        <p className="mt-6 text-sm italic text-gray-600 max-w-xl">
          Note: This extension applies only to PAN holders who obtained PAN using Aadhaar Enrolment ID, not to all taxpayers.
        </p>
      </section>

      {/* TDS/TCS Filing Section */}
      <section className="mt-12">
        <h1 className="text-4xl md:text-4xl font-extrabold tracking-wide text-[#334b94] drop-shadow-sm mb-6">
          Due Dates for Filing <span className="text-[#ef9b15]">TDS/TCS Statements</span>
        </h1>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Stay updated with the latest compliance timelines for TDS/TCS filing:
        </p>

        <div className="bg-gradient-to-r from-[#ef9b15] to-[#ffb76b] rounded-lg p-6 text-white shadow-md max-w-xl">
          <h2 className="font-semibold text-2xl mb-4">Quarterly TDS Statements (Forms 24Q, 26Q, 27Q)</h2>
          <ul className="list-disc list-inside space-y-2 text-white/90">
            <li>30 June → 31 July</li>
            <li>30 September → 31 October</li>
            <li>31 December → 31 January</li>
            <li>31 March → 31 May (next FY)</li>
          </ul>
        </div>

        <div className="mt-6 grid md:grid-cols-3 gap-6 max-w-4xl">
          <div className="bg-[#334b94] rounded-lg p-4 text-white shadow-lg">
            <h3 className="font-semibold mb-2">Form 26QB – TDS on Property Purchase</h3>
            <p className="text-sm">File within 30 days from month-end of the deduction.</p>
          </div>
          <div className="bg-[#334b94] rounded-lg p-4 text-white shadow-lg">
            <h3 className="font-semibold mb-2">Form 26QC – TDS on Rent</h3>
            <p className="text-sm">File within 30 days from month end of the deduction.</p>
          </div>
          <div className="bg-[#334b94] rounded-lg p-4 text-white shadow-lg">
            <h3 className="font-semibold mb-2">Form 26QD – Section 194M (TDS by Individuals)</h3>
            <p className="text-sm">File within 30 days from month end of the deduction.</p>
          </div>
        </div>

        <p className="mt-6 max-w-xl text-gray-600">
          Ensure timely filing to avoid penalties and maintain compliance.
        </p>
      </section>
    </div>
  );
}
