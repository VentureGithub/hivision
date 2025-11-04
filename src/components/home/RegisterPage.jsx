import React from "react";

const backgroundUrl =
  "https://png.pngtree.com/thumb_back/fh260/background/20230703/pngtree-d-rendered-image-of-black-mortarboard-hat-resting-on-opened-book-image_3737422.jpg";

const RegisterPage = () => (
  <section
    className="relative flex items-center justify-center py-6 md:py-8 min-h-[60vh] text-white"
    style={{
      backgroundImage: `url('${backgroundUrl}')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed", // Makes it sticky (parallax effect)
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-[#334b94]/80"></div>

    <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center md:text-left">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
          <span className="text-white">Register</span>{" "}
          <span className="text-[#ef9b15]">Now</span>
        </h2>
        <p className="text-white/90 text-base md:text-lg mb-8">
          Winter Admission is open! Join our new batch and get special discounts
          for Winter 2025.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
            className="p-3 rounded-md bg-white/90 text-[#334b94] font-medium placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-[#ef9b15] border border-gray-300"
            placeholder="First Name"
          />
          <input
            className="p-3 rounded-md bg-white/90 text-[#334b94] font-medium placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-[#ef9b15] border border-gray-300"
            placeholder="Last Name"
          />
          <input
            className="p-3 rounded-md bg-white/90 text-[#334b94] font-medium placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-[#ef9b15] border border-gray-300 md:col-span-2"
            placeholder="Email"
            type="email"
          />
          <input
            className="p-3 rounded-md bg-white/90 text-[#334b94] font-medium placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-[#ef9b15] border border-gray-300 md:col-span-2"
            placeholder="Phone"
            type="tel"
          />
          <textarea
            className="p-3 rounded-md bg-white/90 text-[#334b94] font-medium placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-[#ef9b15] border border-gray-300 md:col-span-2 h-28 resize-none"
            placeholder="Message"
          />
          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-[#ef9b15] text-white py-3 px-10 rounded-full font-bold text-lg mt-2 hover:bg-[#d9850f] transition-all duration-200 shadow-lg"
            >
              SUBMIT NOW
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default RegisterPage;
