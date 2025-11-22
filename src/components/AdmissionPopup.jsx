import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdmissionPopup = () => {
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setShow(true);
    setTimeout(() => setAnimate(true), 20);
  }, []);

  const closePopup = () => {
    setAnimate(false);
    setTimeout(() => setShow(false), 300);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999]">
      <div
        className={`bg-white/80 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-8 w-[90%] max-w-md relative transform transition-all duration-300 
        ${animate ? "scale-100 opacity-100" : "scale-75 opacity-0"}`}
      >
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-3 right-3 cursor-pointer text-gray-700 hover:text-red-500 transition"
        >
          <FaTimes size={22} />
        </button>

        {/* Icon */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Admission"
          className="w-20 h-20 mx-auto mb-4"
        />

        <h2 className="text-3xl font-bold text-center text-[#334b94]">
          Admission Open!
        </h2>

        <p className="text-center text-gray-700 mt-2 text-sm">
          Join HI-VISION today and start your journey to professional skills.
        </p>

        {/* CTA Button */}
        <Link to="/courses">
        <button
          className="mt-6 w-full py-3 cursor-pointer rounded-xl bg-[#ef9b15] text-white font-semibold text-lg shadow-md hover:bg-[#d78710] transition"
         
        >
          Enroll Now
        </button>
        </Link>
      </div>
    </div>
  );
};

export default AdmissionPopup;
