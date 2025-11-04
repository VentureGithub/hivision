import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Build payload as per API (identifier instead of email)
      const payload = {
        identifier: loginData.email,
        password: loginData.password,
      };

      const res = await axios.post(
        "http://192.168.1.22:3001/api/users/login",
        payload,
        { headers: { "Content-Type": "application/json" } }
      );

      if (
        res.data &&
        res.data.success &&
        res.data.data &&
        res.data.data.token &&
        res.data.data.user
      ) {
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.data.user));
        localStorage.setItem("userId", res.data.data.user.id);
        alert("Login Successful 🎉");
        navigate("/");
      } else {
        alert("Invalid login response!");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert(
        error.response?.data?.message || "Invalid Email or Password!"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#fbf2f8] flex justify-center items-center min-h-screen px-4 py-10">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#d76666]/30 max-w-4xl w-full flex flex-col md:flex-row">
        {/* Left Image */}
        <div className="md:w-1/2 relative">
          <img
            src="https://californiaavocado.com/wp-content/uploads/2023/04/AvoBaconGrilledCheese_0011-scaled-e1682914545487.jpg"
            alt="Veg Meal"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#990000]/30"></div>
        </div>
        {/* Right Form */}
        <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-extrabold text-[#990000] mb-6 text-center">
            🔐 Login to Your Account
          </h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
            {/* Email */}
            <div>
              <label className="block text-[#990000] text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full border border-[#d76666]/50 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#dc8e8e] bg-[#fff7f9] text-sm"
              />
            </div>
            {/* Password */}
            <div>
              <label className="block text-[#990000] text-sm mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                className="w-full border border-[#d76666]/50 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#dc8e8e] bg-[#fff7f9] text-sm"
              />
            </div>
            {/* Forgot Password */}
            <div className="text-right">
              <a
                href="#"
                className="text-[#990000] text-sm font-semibold hover:text-[#d76666] transition-all underline"
              >
                Forgot Password?
              </a>
            </div>
            {/* Login Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              disabled={loading}
              className={`w-full py-3 text-white text-lg font-bold rounded-2xl shadow-lg transition-all ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-[#d76666] to-[#990000] hover:shadow-2xl"
              }`}
            >
              {loading ? "Logging in..." : "Login"}
            </motion.button>
            {/* Register Link */}
            <div className="text-center mt-2 text-sm">
              <p className="text-gray-700">
                Don’t have an account?{" "}
                <Link
                  to="/signup"
                  className="text-[#990000] font-semibold hover:text-[#d76666] transition-all underline"
                >
                  Register Now
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
