import React, { useState } from "react";

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.4625989976444!2d80.93044297512151!3d26.86664597670273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2d897c7ef71%3A0x3a6cfbd7d20ae53e!2sExon%20Montessori%20Inter%20College%2C%20Campbell%20Road%2C%20Lucknow%20%E2%80%93%20226003!5e0!3m2!1sen!2sin!4v1666868530093!5m2!1sen!2sin";

export default function ContactUs() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "71bd17f0-bf4b-4008-8657-691f9a0275eb");

    formData.append("source", "Contact Us page se inquiry aayi hai");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Thank you! Your message has been sent.");
      event.target.reset();
    } else {
      setResult("Error sending message. Please try again.");
    }
  };

  return (
    <section className="w-full min-h-screen bg-[#fffefa] flex items-center justify-center py-12 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row bg-white rounded-3xl shadow-xl overflow-hidden">

        {/* Map Section */}
        <div className="lg:w-1/2 w-full flex items-center justify-center bg-[#f9f5ea] p-4 sm:px-6 md:px-8">
          <div className="w-full h-[550px] rounded-2xl overflow-hidden shadow-md border-2 border-[#ef9b15]">
            <iframe
              src={MAP_EMBED_URL}
              title="College Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-1/2 w-full flex flex-col justify-center p-4 sm:p-4 md:p-6 h-auto overflow-y-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-[#334b94] text-center lg:text-left">
            Contact Us
          </h2>

          <form onSubmit={onSubmit} className="space-y-4">

            {/* Name + Father Name (2 Columns Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full bg-[#fffefa] border border-[#ef9b15] rounded-lg py-3 px-5 
      focus:outline-none focus:border-[#334b94] transition"
              />

              <input
                type="text"
                name="father_name"
                placeholder="Father Name"
                required
                className="w-full bg-[#fffefa] border border-[#ef9b15] rounded-lg py-3 px-5 
      focus:outline-none focus:border-[#334b94] transition"
              />
            </div>

            {/* Mobile */}
            <input
              type="number"
              name="phone"
              placeholder="Mobile Number"
              required
              className="w-full bg-[#fffefa] border border-[#ef9b15] rounded-lg py-3 px-5 
    focus:outline-none focus:border-[#334b94] transition"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full bg-[#fffefa] border border-[#ef9b15] rounded-lg py-3 px-5 
    focus:outline-none focus:border-[#334b94] transition"
            />

            {/* DOB */}
            {/* <input
              type="date"
              name="dob"
              required
              className="w-full bg-[#fffefa] border border-[#ef9b15] rounded-lg py-3 px-5 
    focus:outline-none focus:border-[#334b94] transition"
            /> */}
<div className="relative w-full">
  <input
    type="date"
    name="dob"
    required
    className="w-full bg-[#fffefa] border border-[#ef9b15] rounded-lg py-3 pl-16 pr-5
      focus:outline-none focus:border-[#334b94] transition"
    placeholder="DOB"
  />
  <span
    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none select-none"
  >
    DOB
  </span>
</div>



            {/* Qualification */}
            <input
              type="text"
              name="qualification"
              placeholder="Qualification"
              required
              className="w-full bg-[#fffefa] border border-[#ef9b15] rounded-lg py-3 px-5 
    focus:outline-none focus:border-[#334b94] transition"
            />

            {/* Course Selector */}
            <select
              name="course"
              required
              className="w-full bg-[#fffefa] border border-[#ef9b15] rounded-lg py-3 px-5 
    focus:outline-none focus:border-[#334b94] transition"
            >
              <option value="">Select Course</option>
              <option value="Advanced Package">Advanced Package</option>
              <option value="Premium Package">Premium Package</option>
            </select>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-[#334b94] text-white font-semibold 
    hover:bg-[#ef9b15] hover:text-[#334b94] transition"
            >
              Send Message
            </button>

            <p className="text-center text-sm font-semibold text-[#334b94]">
              {result}
            </p>

          </form>

        </div>
      </div>
    </section>
  );
}
