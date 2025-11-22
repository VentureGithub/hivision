import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../components/Banner";
import AllCourses from "../components/AllCourses";
import { FaTimes } from "react-icons/fa";

const Courses = () => {
  const navigate = useNavigate();
  const [showCard, setShowCard] = useState(false);
  const [animate, setAnimate] = useState(false);

  // TOP CARD – Show once per refresh
  useEffect(() => {
    setShowCard(true);
    setTimeout(() => setAnimate(true), 20); 
  }, []);

  const handleClose = () => {
    setAnimate(false);
    setTimeout(() => {
      setShowCard(false);
    }, 400);
  };

  // BOTTOM CARD – Show once per refresh
  const [showBottom, setShowBottom] = useState(false);
  const [animateBottom, setAnimateBottom] = useState(false);

  useEffect(() => {
    setShowBottom(true);
    setTimeout(() => setAnimateBottom(true), 50);
  }, []);

  const closeBottomCard = () => {
    setAnimateBottom(false);
    setTimeout(() => {
      setShowBottom(false);
    }, 400);
  };

  return (
    <>
      <Banner
        backgroundImage="/3webbanner.png"
        title="Our Courses"
        description="Explore a wide range of professional and skill-based courses at HI-VISION designed to help you build knowledge, gain practical experience, and achieve your career goals."
        breadcrumb2={{ label: "Our Courses", path: "/courses" }}
      />

      <AllCourses />

      {/* 🔵 TOP DISCOUNT CARD */}
      {showCard && (
        <div
          className={`fixed top-32 right-0 lg:right-6 z-[9999] transition-all duration-500 ease-in-out ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative bg-white/90 backdrop-blur-xl border border-white/40 rounded-2xl shadow-2xl p-5 w-80 sm:w-96">

            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 transition"
            >
              <FaTimes size={20} />
            </button>

            <img
              src="https://cdn-icons-png.flaticon.com/512/1048/1048953.png"
              alt="Discount Icon"
              className="w-14 h-14 mx-auto mb-2 "
            />

            <h2 className="text-center text-2xl font-bold text-[#334b94] mt-3">
              Special Offers!
            </h2>

            {/* <p className="text-center text-gray-700 text-sm mt-1 mb-4">
              Boost your skills with exclusive discounts. Limited time only!
            </p> */}

            {/* Premium Offer */}
            <div className="p-4 rounded-xl bg-[#334b94] text-white shadow-md my-3">
              <h3 className="text-lg font-semibold flex justify-between">
                Premium Package
                <span className="text-[#ffe699] font-bold">25% OFF</span>
              </h3>
              <p className="text-sm mt-1 opacity-90">
                Unlock full access + advanced modules!
              </p>
            </div>

            {/* Advanced Offer */}
            <div className="p-4 rounded-xl bg-white shadow-md border border-[#ef9b15]/40">
              <h3 className="text-lg font-semibold text-[#334b94] flex justify-between">
                Advanced Package
                <span className="text-[#ef9b15] font-bold">10% OFF</span>
              </h3>
              <p className="text-sm mt-1 text-gray-600">
                Perfect for skill beginners & learners.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 🟠 BOTTOM CARD – FREE REGISTRATION */}
      {showBottom && (
        <div
          className={`fixed bottom-0 lg:bottom-6 right-0 lg:right-6 z-[9999] transition-all duration-500 ${
            animateBottom ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative bg-white/90 backdrop-blur-xl border border-white/40 rounded-2xl shadow-2xl px-6 py-4 w-[300px] sm:w-[340px]">

            <button
              onClick={closeBottomCard}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 transition"
            >
              <FaTimes size={18} />
            </button>


            <h2 className="text-center text-xl font-bold text-[#ef9b15]">
              🎉 First 100 Students – FREE Registration!
            </h2>

            <p className="text-center text-gray-700 mt-1 text-sm">
              Join today and pay absolutely <strong>₹0 registration fee</strong>.  
              Limited slots left — hurry up!
            </p>

            <button 
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  const element = document.getElementById("register");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }, 300);
              }}
              className="mt-4 w-full py-2 rounded-lg bg-[#334b94] text-white font-semibold shadow-md hover:bg-[#2a3f7a] transition"
            >
              Register Now
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Courses;
