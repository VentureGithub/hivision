import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import AllCourses from "../components/AllCourses";
import { FaTimes } from "react-icons/fa";

const Courses = () => {
  const [showCard, setShowCard] = useState(true);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false); // start hide animation
      setTimeout(() => setShowCard((prev) => !prev), 400); // toggle after animation
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (showCard) {
      // run show animation
      setTimeout(() => setAnimate(true), 10);
    }
  }, [showCard]);

  return (
    <>
      {/* Banner Section */}
      <Banner
        backgroundImage="/3webbanner.png"
        title="Our Courses"
        description="Explore a wide range of professional and skill-based courses at Hi-Vision designed to help you build knowledge, gain practical experience, and achieve your career goals."
        breadcrumb2={{ label: "Our Courses", path: "/courses" }}
      />

      {/* All Courses */}
      <AllCourses />

      {/* Discount Card with Animation */}
      {showCard && (
        <div
          className={`fixed top-32 right-6 z-[9999] transition-all duration-500 ease-in-out ${
            animate
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10 pointer-events-none"
          }`}
        >
          <div className="relative bg-white border border-[#ef9b15]/30 rounded-2xl shadow-xl p-2 sm:p-4 w-72 sm:w-80">
            {/* Close Button */}
            <button
              onClick={() => setShowCard(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-[#ef9b15] transition"
            >
              <FaTimes size={18} />
            </button>

            {/* Image */}
            <img
              src="https://cdn-icons-png.flaticon.com/512/1048/1048953.png"
              alt="Discount Icon"
              className="w-14 h-14 mx-auto mb-3 animate-bounce"
            />

            {/* Title */}
            <h2 className="text-lg sm:text-xl font-bold text-[#334b94] mb-1 text-center">
              🎉 Limited Offer!
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-sm text-center mb-3">
              Get <span className="text-[#ef9b15] font-semibold">25% OFF</span> on our{" "}
              <span className="font-medium">Premium Package</span>.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Courses;
