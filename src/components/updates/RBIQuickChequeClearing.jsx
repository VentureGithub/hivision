import React from "react";

export default function RBIQuickChequeClearing() {
  return (
    <div className="  text-gray-900 antialiased mt-6 px-4 max-w-3xl mx-auto">
      <section className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
        <p className="text-2xl font-semibold mb-4 flex items-center gap-2">
          🖋️ <span className="italic font-normal">KINDLY NOTE:-</span>
        </p>

        <p className="text-lg mb-6 leading-relaxed">
          As per RBI’s new guidelines, cheques will now be cleared within hours instead of 1–2 working days.
        </p>

        <p className="text-md font-semibold mb-3 border-b border-gray-300 pb-2">
          Key highlights:
        </p>

        <ul className="list-disc list-inside space-y-3 mb-6 text-base">
          <li>Cheques deposited between 10 am – 4 pm will be scanned and sent instantly, ensuring same-day credit and faster access to funds.</li>
          <li>🔎 Phase 1 (Oct 4, 2025 – Jan 2, 2026): Banks must confirm by 7 pm.</li>
          <li>🔎 Phase 2 (from Jan 3, 2026): Banks will have just 3 hours to respond.</li>
        </ul>

        <p className="text-center text-lg font-bold text-blue-700">
          Faster clearing means better cash flow and less waiting. Stay informed!
        </p>
      </section>
    </div>
  );
}
