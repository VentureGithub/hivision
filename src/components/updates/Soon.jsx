import React from 'react';
import { Link } from 'react-router-dom';

// SupremeCourt-ITC-Relief-Page.jsx
// Single-file React component styled with Tailwind CSS.
// Default export a ready-to-use page component for your Hi Vision theme.
// Usage: save as src/pages/SupremeCourtITCRelief.jsx and import into your router.

export default function SupremeCourtITCRelief() {
    return (
        <div className="min-h-screen bg-white text-gray-800 antialiased mt-32">
            {/* Page container */}
            <section className="relative bg-gradient-to-r from-[#ef9b15] to-[#ffb76b] text-white py-10 md:py-6 overflow-hidden shadow-md">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10 py-2">
                    {/* Text Section */}
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide text-[#334b94] drop-shadow-sm">
                             Admission Open!
                        </h1>

                        <p className="mt-4 text-base md:text-2xl text-gray-700 leading-relaxed">
                            <span className="block font-semibold text-[#334b94]">
                                 First 100 Students Registration Fee Free (₹500)
                            </span>
                            <span className="block mt-1 text-[#334b94] font-medium text-xl">
                                 Get 25% Discount on Premium Package
                            </span>
                            <span className="block mt-1 text-[#334b94] font-medium text-xl">
                                 Get 10% Discount on Advanced Package
                            </span>
                        </p>

                        <div className="mt-6">
                            <Link to='/courses'>
                            <button className="px-6 py-3 bg-[#fff] text-[#334b94] font-bold rounded-full shadow hover:bg-[#e38910] hover:text-white transition-all duration-300">
                                Enroll Now
                            </button>
                            </Link>
                        </div>
                    </div>


                    <div className="flex-1 flex justify-center md:justify-end relative">
                        {/* Hanging effect */}
                        <div className="relative transform hover:rotate-0 transition-all duration-500 ease-out">
                            <img
                                src="/open.png"
                                alt="Admission Open Illustration"
                                className="w-72 md:w-96 drop-shadow-[0_15px_15px_rgba(0,0,0,0.3)] rounded-xl animate-swing"
                            />
                            {/* Hanging thread effect */}
                        </div>
                    </div></div>

                <style>{`
  /* Side-to-side swing animation */
  @keyframes swing {
    0% { transform: rotate(6deg); }
    50% { transform: rotate(-6deg); }
    100% { transform: rotate(6deg); }
  }

  .animate-swing {
    transform-origin: top center;
    animation: swing 2s ease-in-out infinite;
  }
`}</style>

            </section>

            <main className="max-w-6xl mx-auto px-6 py-12">
                {/* Hero */}
                <section className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Supreme Court rules in favour of taxpayers — <span className="text-[#ef9b15]">ITC cannot be denied for seller's default</span></h2>
                        <p className="mt-4 text-gray-700">Date of judgment: <strong>9 October 2025</strong> — <em>M/s Shanti Kiran India Pvt. Ltd. vs Commissioner, Trade & Tax, Delhi</em>. This landmark decision provides relief to honest buyers where purchases are genuine and sellers were registered at the time of supply.</p>

                        <div className="mt-6 flex gap-3 flex-wrap">
                            <a href="#checklist" className="inline-block bg-[#ef9b15] text-white px-5 py-2 rounded-md font-medium">What businesses should do</a>
                            <a href="#implications" className="inline-block border border-gray-200 px-5 py-2 rounded-md">GST implications</a>
                        </div>

                        <div className="mt-6 text-sm text-gray-600">Sized to your HI-VISION theme. You can drop this page into your React routes and tailor colors using a theme variable.</div>
                    </div>

                    <div className="bg-gradient-to-br from-[#fff7ed] to-white border rounded-2xl p-6 shadow-sm">
                        <h3 className="text-lg font-semibold">Legal takeaway</h3>
                        <p className="mt-3 text-gray-700">The Supreme Court held that denying Input Tax Credit (ITC) to a buyer for the seller's failure to deposit tax or file returns is unfair where the documents, invoices and the supply itself are genuine and the seller was registered at the time of supply.</p>

                        <ul className="mt-4 space-y-2 text-sm text-gray-600">
                            <li>Base law: Delhi VAT Act case — potential persuasive value under GST law (Section 16(2)(c)).</li>
                            <li>Constitutional principle: Court invoked <strong>Article 14</strong> (equality & fairness).</li>
                            <li>Practical result: Protects honest buyers from penalties caused by vendor defaults.</li>
                        </ul>

                        <div className="mt-6">
                            <a href="#" className="inline-block px-4 py-2 border rounded-md text-sm">Read full judgment (link)</a>
                        </div>
                    </div>
                </section>

                {/* Detailed content */}
                <section id="summary" className="mt-12 bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-2xl font-semibold">Summary</h3>
                    <p className="mt-4 text-gray-700 leading-relaxed">In <strong>M/s Shanti Kiran India Pvt. Ltd. vs Commissioner, Trade & Tax, Delhi</strong> (9 Oct 2025), the Supreme Court found that an honest buyer should not be punished for defects in a seller's compliance. If the purchase is genuine, invoices are valid, and the seller was registered at the time of supply, then denial of ITC is not warranted simply because the seller later failed to deposit tax or file returns.</p>
                </section>

                <section id="implications" className="mt-8 grid md:grid-cols-3 gap-6">
                    <article className="p-5 border rounded-lg">
                        <h4 className="font-semibold">For GST practitioners</h4>
                        <p className="mt-2 text-sm text-gray-600">While the case arises under Delhi VAT, its reasoning touches directly on buyer protections and may be cited in GST disputes involving Section 16(2)(c).</p>
                    </article>

                    <article className="p-5 border rounded-lg">
                        <h4 className="font-semibold">For businesses</h4>
                        <p className="mt-2 text-sm text-gray-600">Companies can take comfort when records are complete — but must still maintain good documentation and vendor verification to strengthen their position.</p>
                    </article>

                    <article className="p-5 border rounded-lg">
                        <h4 className="font-semibold">For vendors</h4>
                        <p className="mt-2 text-sm text-gray-600">Sellers should ensure tax deposits and returns are filed. Non-compliance harms not only themselves but also their buyers' trust and operations.</p>
                    </article>
                </section>

                {/* Business checklist */}
                <section id="checklist" className="mt-8">
                    <h3 className="text-2xl font-semibold">Business checklist — immediate steps</h3>
                    <div className="mt-4 grid md:grid-cols-2 gap-4">
                        <div className="p-4 border rounded-lg">
                            <h5 className="font-medium">Document everything</h5>
                            <p className="mt-2 text-sm text-gray-600">Keep invoices, proof of payment, delivery challans, bank statements and email correspondence together in a retrievable folder.</p>
                        </div>

                        <div className="p-4 border rounded-lg">
                            <h5 className="font-medium">Vendor verification</h5>
                            <p className="mt-2 text-sm text-gray-600">Confirm supplier was registered at time of supply. Use GSTIN search, collect registration proof, and keep onboarding checklists.</p>
                        </div>

                        <div className="p-4 border rounded-lg">
                            <h5 className="font-medium">Avoid suspicious suppliers</h5>
                            <p className="mt-2 text-sm text-gray-600">If price or delivery patterns look unusual, delay large payments until KYC and credentials are confirmed.</p>
                        </div>

                        <div className="p-4 border rounded-lg">
                            <h5 className="font-medium">Consult your tax advisor</h5>
                            <p className="mt-2 text-sm text-gray-600">If in doubt, seek legal or tax advice — especially for high-value input claims and retrospective risk exposure.</p>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="mt-8 bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-2xl font-semibold">FAQ</h3>
                    <div className="mt-4 space-y-4">
                        <details className="p-3 border rounded">
                            <summary className="cursor-pointer font-medium">Does this automatically apply to GST?</summary>
                            <p className="mt-2 text-sm text-gray-700">Not automatically. This is a Delhi VAT judgment but its reasoning is persuasive in GST disputes, particularly for arguments under Section 16(2)(c). Litigators will assess applicability case-by-case.</p>
                        </details>

                        <details className="p-3 border rounded">
                            <summary className="cursor-pointer font-medium">What if the seller is unregistered at time of supply?</summary>
                            <p className="mt-2 text-sm text-gray-700">If the supplier was unregistered at the time of supply, entitlement to ITC is generally doubtful. Maintain strong onboarding documents.</p>
                        </details>
                    </div>
                </section>

                {/* CTA and contact */}
                <section id="contact" className="mt-10 flex flex-col md:flex-row items-start gap-6">
                    <div className="flex-1 p-6 rounded-lg border">
                        <h4 className="text-xl font-semibold">Need help assessing risk?</h4>
                        <p className="mt-3 text-sm text-gray-600">If you want, our team can review your vendor documents and suggest a checklist tailored to your business.</p>
                        <div className="mt-4 flex gap-3">
                            <Link to="/contact" className="inline-block px-4 py-2 bg-[#ef9b15] text-white rounded-md">Request review</Link>
                   
                        </div>
                    </div>

                    <aside className="w-full md:w-96 p-6 rounded-lg bg-[#fffaf0] border">
                        <h5 className="font-semibold">Quick vendor check</h5>
                        <ol className="mt-3 text-sm text-gray-700 space-y-2">
                            <li>1. Verify GSTIN active on date of supply.</li>
                            <li>2. Keep invoice with seller's signature/logo.</li>
                            <li>3. Keep proof of payment and bank remittance.</li>
                            <li>4. Retain delivery challans and e-mails confirming supply.</li>
                        </ol>
                    </aside>
                </section>

                <footer className="mt-12 border-t pt-6 text-sm text-gray-500">
                    <div className="flex items-center justify-between max-w-6xl mx-auto px-6">
                        <div>© HI-VISION — Legal & Business updates</div>
                        
                    </div>
                </footer>
            </main>
        </div>
    );
}







