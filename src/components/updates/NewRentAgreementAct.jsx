import React, { useState } from "react";

export default function NewRentAgreementAct() {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const highlights = [
    {
      title: "1. Online Rent Agreement Becomes Mandatory",
      content: (
        <>
          <p className="mb-3">Under the new rules, every rent agreement must be completed online, with digital stamping and official filing within 60 days.</p>
          <p className="mb-3 font-medium">This step eliminates:</p>
          <ul className="list-disc list-inside ml-6 space-y-1 mb-3 text-sm">
            <li>Handwritten agreements</li>
            <li>Fake or unregistered documents</li>
            <li>Legal loopholes in offline paperwork</li>
          </ul>
          <p className="font-medium">It ensures greater security and traceability for both parties.</p>
        </>
      ),
    },
    {
      title: "2. Security Deposit Gets a Limit",
      content: (
        <>
          <p className="mb-3">The Act proposes a maximum cap on security deposits:</p>
          <ul className="list-disc list-inside ml-6 space-y-1 mb-3 text-sm">
            <li><strong>Residential properties:</strong> Up to 2 months' rent</li>
            <li><strong>Commercial properties:</strong> Up to 6 months' rent</li>
          </ul>
          <p>This means tenants are protected from paying unreasonably high deposits upfront, which has been a long-standing issue in many cities.</p>
        </>
      ),
    },
    {
      title: "3. Rent Increase Rules Are Now Standardised",
      content: (
        <>
          <p className="mb-3">Landlords will only be allowed to increase rent after 12 months, and that too with a 90-day written notice to the tenant.</p>
          <p className="mb-3 font-medium">This rule prevents:</p>
          <ul className="list-disc list-inside ml-6 space-y-1 mb-3 text-sm">
            <li>Sudden rent hikes</li>
            <li>Verbal or surprise increases</li>
            <li>Pressure tactics on tenants</li>
          </ul>
        </>
      ),
    },
    {
      title: "4. Major Repairs Are the Landlord's Responsibility",
      content: (
        <>
          <p className="mb-3">If major repairs are needed, the landlord must fix them within 30 days.</p>
          <p className="mb-3 font-medium">If not done, the tenant may:</p>
          <ul className="list-disc list-inside ml-6 space-y-1 mb-3 text-sm">
            <li>Get the repair done independently</li>
            <li>Deduct the cost from the rent</li>
          </ul>
          <p>This creates accountability and encourages better maintenance of the property.</p>
        </>
      ),
    },
    {
      title: "5. No More Surprise Visits",
      content: (
        <>
          <p className="mb-3">Landlords must now provide a written notice at least 24 hours in advance before entering the rented premises.</p>
          <p className="font-medium">This respects the tenant's privacy and establishes healthy boundaries.</p>
        </>
      ),
    },
    {
      title: "6. Eviction Only Through Legal Process",
      content: (
        <>
          <p className="mb-3 font-medium">No landlord can:</p>
          <ul className="list-disc list-inside ml-6 space-y-1 mb-3 text-sm">
            <li>Forcefully evict</li>
            <li>Cut electricity or water</li>
            <li>Lock the property without consent</li>
          </ul>
          <p>Any eviction must be done only through an official Rent Tribunal order. This safeguards tenants from illegal removals.</p>
        </>
      ),
    },
    {
      title: "7. Police Verification is Mandatory",
      content: (
        <>
          <p className="mb-3">Before a tenant can move in, police verification must be completed.</p>
          <p className="font-medium">This enhances safety and ensures that both landlord and neighborhood remain secure.</p>
        </>
      ),
    },
    {
      title: "8. Faster Dispute Resolution",
      content: (
        <>
          <p className="mb-3">All rental disputes and eviction cases are expected to be resolved within 60 days by a special dispute resolution body.</p>
          <p className="font-medium">This is a major upgrade from the long court delays previously faced.</p>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 antialiased mt-16  max-w-6xl mx-auto">
      <section className="mb-16">
        <div className="text-center mb-12">
          <p className="text-3xl md:text-4xl font-black text-[#334b94] mb-4">
            New Rent Agreement Act 2025 – What Landlords and Tenants Must Know
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            The rental landscape in India is evolving with the proposed New Rent Agreement Act 2025, aimed at creating transparency, fairness, and stronger legal protection for both landlords and tenants. If implemented as described, these changes would significantly simplify the renting process while reducing conflicts and unlawful practices.
          </p>
          <p className="font-semibold text-[#ef9b15] text-xl mb-12">
            Here are the key highlights explained in simple terms.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-4">
            {highlights.slice(0, 4).map((item, index) => {
              const idx = index;
              const isOpen = openItems.includes(idx);
              return (
                <div
                  key={idx}
                  className="bg-white border-2 border-[#334b94]/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    onClick={() => toggleItem(idx)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#334b94] rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg">
                        {idx + 1}
                      </div>
                      <span className="font-semibold text-lg text-[#334b94]">{item.title}</span>
                    </div>
                    <div className={`w-5 h-5 border-2 border-[#334b94] rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'rotate-180 bg-[#334b94] border-[#334b94]' : ''}`}>
                      <svg className="w-2.5 h-2.5 text-[#334b94]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 pb-6 pt-3 text-sm leading-relaxed text-gray-700">{item.content}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {highlights.slice(4).map((item, index) => {
              const idx = index + 4;
              const isOpen = openItems.includes(idx);
              return (
                <div
                  key={idx}
                  className="bg-white border-2 border-[#334b94]/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    onClick={() => toggleItem(idx)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#334b94] rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg">
                        {idx + 1}
                      </div>
                      <span className="font-semibold text-lg text-[#334b94]">{item.title}</span>
                    </div>
                    <div className={`w-5 h-5 border-2 border-[#334b94] rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'rotate-180 bg-[#334b94] border-[#334b94]' : ''}`}>
                      <svg className="w-2.5 h-2.5 text-[#334b94]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 pb-6 pt-3 text-sm leading-relaxed text-gray-700">{item.content}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 p-10 bg-[#334b94] rounded-3xl text-white shadow-2xl max-w-4xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-black mb-6">Final Thoughts</p>
          <p className="mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
            The New Rent Agreement Act 2025, if enforced properly, can transform India's rental system by creating fair practices, stronger documentation, and quicker justice.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <p className="font-bold text-xl mb-2">For landlords:</p>
              <p>It brings structure and legal clarity</p>
            </div>
            <div>
              <p className="font-bold text-xl mb-2">For tenants:</p>
              <p>It ensures safety and affordability</p>
            </div>
            <div>
              <p className="font-bold text-xl mb-2">For the real estate sector:</p>
              <p>It boosts trust and transparency</p>
            </div>
          </div>
          <p className="italic text-lg font-semibold">
            If you are planning to rent, lease, or invest, staying updated with these rules will help you make smarter decisions.
          </p>
        </div>
      </section>
    </div>
  );
}
