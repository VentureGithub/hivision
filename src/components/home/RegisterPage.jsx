import React, { useState } from "react";

const backgroundUrl =
  "https://png.pngtree.com/thumb_back/fh260/background/20230703/pngtree-d-rendered-image-of-black-mortarboard-hat-resting-on-opened-book-image_3737422.jpg";

const RegisterPage = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    // Add your access key from ENV
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    // Create professional formatted message  
    const message = `
📌 New Registration Enquiry Received

👤 Name: ${formData.get("name")}
👨‍👧 Father's Name: ${formData.get("father_name")}
📱 Mobile: ${formData.get("mobile")}
🎂 Date of Birth: ${formData.get("dob")}
📚 Course Selected: ${formData.get("course")}
📧 Email: ${formData.get("email")}
🎓 Qualification: ${formData.get("qualification")}

💬 Message From Website: A new student has submitted the registration form.
    `;

    formData.append("message", message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      alert("🎉 Registration Successful! We will contact you soon.");
      setResult("Success");
      e.target.reset();
    } else {
      alert("❌ Something went wrong! Try again.");
      setResult("Error");
    }
  };

  return (
    <section
      id="register"
      className="relative flex items-center justify-center py-6 md:py-8 min-h-[60vh] text-white"
      style={{
        backgroundImage: `url('${backgroundUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-[#334b94]/80"></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center md:text-left">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
            <span className="text-white">Register</span>{" "}
            <span className="text-[#ef9b15]">Now</span>
          </h2>

          <p className="text-white/90 text-base md:text-lg mb-8">
            Winter Admission is open! Join our new batch and get special
            discounts for Winter 2025.
          </p>

          {/* FORM START */}
          <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input name="name" required placeholder="Name" className="p-3 rounded-md bg-white/90 text-[#334b94]" />
            <input name="father_name" required placeholder="Father's Name" className="p-3 rounded-md bg-white/90 text-[#334b94]" />
            <input name="mobile" required placeholder="Mobile" className="p-3 rounded-md bg-white/90 text-[#334b94]" />
            <input name="dob" type="date" required className="p-3 rounded-md bg-white/90 text-[#334b94]" />

            <select name="course" required className="p-3 rounded-md bg-white/90 text-[#334b94] md:col-span-2">
              <option value="">Select Course</option>
              <option>Advanced Package</option>
              <option>Premium Package</option>
            </select>

            <input name="email" type="email" required placeholder="Email Id" className="p-3 rounded-md bg-white/90 text-[#334b94] md:col-span-2" />
            <input name="qualification" required placeholder="Qualification" className="p-3 rounded-md bg-white/90 text-[#334b94] md:col-span-2" />

            <div className="md:col-span-2">
              <button type="submit" className="bg-[#ef9b15] text-white py-3 px-10 rounded-full font-bold text-lg mt-2">
                SUBMIT NOW
              </button>
            </div>
          </form>

          <p className="mt-3 text-white/80">{result}</p>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
