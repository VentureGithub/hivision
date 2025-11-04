import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";

const CustomerForm = () => {
  const [customer, setCustomer] = useState({
    fullName: "",
    mobile: "",
    email: "",
    password: "",
    userType: "Student",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        fullname: customer.fullName,
        email: customer.email,
        mobileNumber: customer.mobile,
        password: customer.password,
        userType: customer.userType.toLowerCase(),
        role: "user"
      };
      const res = await axios.post(
        "http://192.168.1.22:3001/api/users/register",
        payload,
        { headers: { "Content-Type": "application/json" } }
      );

      if (res.data && res.data.success) {
        alert("✅ Customer Registered Successfully!");
        console.log("Response:", res.data);
        setCustomer({
          fullName: "",
          mobile: "",
          email: "",
          password: "",
          userType: "Student",
        });
      }
    } catch (error) {
      console.error("Error registering customer:", error);
      alert("❌ Failed to register customer!");
    }
  };

  return (
    <section className="bg-[#fbf2f8] flex justify-center items-center min-h-screen px-4 py-10">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#d76666]/30 max-w-5xl w-full flex flex-col md:flex-row">
        {/* Left Image Section */}
        <div className="md:w-1/2 relative">
          <img
            src="https://californiaavocado.com/wp-content/uploads/2023/04/AvoBaconGrilledCheese_0011-scaled-e1682914545487.jpg"
            alt="Canteen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#990000]/30"></div>
        </div>
        {/* Right Form Section */}
        <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-extrabold text-[#990000] mb-6 text-center">
            🍽️ Customer Registration
          </h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-2">
            {/* Name + Mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#990000] text-sm mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={customer.fullName}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  required
                  className="w-full border border-[#d76666]/50 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#dc8e8e] bg-[#fff7f9] text-sm"
                />
              </div>
              <div>
                <label className="block text-[#990000] text-sm mb-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={customer.mobile}
                  onChange={handleChange}
                  placeholder="Enter mobile number"
                  required
                  className="w-full border border-[#d76666]/50 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#dc8e8e] bg-[#fff7f9] text-sm"
                />
              </div>
            </div>
            {/* Email */}
            <div>
              <label className="block text-[#990000] text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={customer.email}
                onChange={handleChange}
                placeholder="Enter email"
                required
                className="w-full border border-[#d76666]/50 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#dc8e8e] bg-[#fff7f9] text-sm"
              />
            </div>
            {/* Password */}
            <div>
              <label className="block text-[#990000] text-sm mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={customer.password}
                onChange={handleChange}
                placeholder="Enter password"
                required
                className="w-full border border-[#d76666]/50 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#dc8e8e] bg-[#fff7f9] text-sm"
              />
            </div>
            {/* User Type */}
            <div>
              <label className="block text-[#990000] text-sm mb-1">
                User Type
              </label>
              <select
                name="userType"
                value={customer.userType}
                onChange={handleChange}
                className="w-full border border-[#d76666]/50 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#dc8e8e] bg-[#fff7f9] text-sm"
              >
                <option value="Student">Student</option>
                <option value="Teacher">Teacher</option>
                <option value="Patient">Patient</option>
                <option value="Staff">Staff</option>
              </select>
            </div>
            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-3 mt-3 bg-gradient-to-r from-[#d76666] to-[#990000] text-white text-lg font-bold rounded-2xl shadow-lg hover:shadow-2xl transition-all"
            >
              Register
            </motion.button>
            {/* Already have an account */}
            <div className="text-center mt-2 text-sm">
              <p className="text-gray-700">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-[#990000] font-semibold hover:text-[#d76666] transition-all underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CustomerForm;
