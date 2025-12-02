import React from "react";

export default function MCABigComplianceUpdate() {
  return (
    <div className=" text-gray-800 antialiased mt-6 max-w-6xl mx-auto">
      <section className=" backdrop-blur-sm  rounded-3xl ">
        <div className="flex items-start gap-6 mb-6">
          <div className="p-3 bg-gradient-to-r from-[#ef9b15] to-[#ffb76b] rounded-xl shadow-lg">
            <span className="text-2xl">🚨</span>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-black tracking-tight text-[#334b94] leading-tight">
              Big Compliance Update<br />
              <span className="text-[#ef9b15]">for Small Companies!</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 mb-10 items-center">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-xl lg:text-2xl font-bold text-[#334b94] mb-4">
              MCA may exempt firms with turnover up to ₹1 crore
            </p>
            <p className="text-2xl lg:text-3xl font-black text-[#ef9b15] mb-4">from Statutory Audit 😮🔥</p>
          </div>
          <div className="w-24 h-24 bg-gradient-to-r from-[#ef9b15] to-[#ffb76b] rounded-2xl flex items-center justify-center shadow-2xl">
            <span className="text-2xl">📈</span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#334b94]/5 to-[#ef9b15]/5 border border-[#334b94]/10 rounded-xl p-6 mb-10">
          <p className="text-base mb-4 leading-relaxed text-gray-700">
            The Ministry of Corporate Affairs is considering a major relaxation that could remove mandatory statutory audit for India's smallest companies.
            If approved in the upcoming Winter Session, this will be the biggest revamp of audit rules since the Companies Act overhaul.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-10">
          <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <p className="text-lg font-bold text-[#334b94] mb-4 flex items-center gap-2">
              📋 What this means:
            </p>
            <div className="space-y-2 text-base text-gray-700">
              <p>✅ Reduced compliance burden</p>
              <p>✅ Lower cost for micro companies</p>
            </div>
          </div>
          <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="space-y-2 text-base text-gray-700">
              <p>✅ Faster ease-of-doing-business reforms</p>
              <p>✅ A turnover-based audit exemption threshold for the first time</p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
