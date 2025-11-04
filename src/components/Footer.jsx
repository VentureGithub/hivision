import React, { useEffect, useRef, useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaGoogle,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const bgImg = "https://www.fatimacollege.edu.in/data/file_54e6e.jpg";

const Footer = () => {
  const aboutRef = useRef(null);
  const quickRef = useRef(null);
  const coursesRef = useRef(null);
  const bottomBarRef = useRef(null);

  const [visibleStates, setVisibleStates] = useState({
    about: false,
    quick: false,
    courses: false,
    bottomBar: false,
  });

  useEffect(() => {
    const options = { threshold: 0.3 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === aboutRef.current && !visibleStates.about) {
            setVisibleStates((prev) => ({ ...prev, about: true }));
          } else if (entry.target === quickRef.current && !visibleStates.quick) {
            setVisibleStates((prev) => ({ ...prev, quick: true }));
          } else if (entry.target === coursesRef.current && !visibleStates.courses) {
            setVisibleStates((prev) => ({ ...prev, courses: true }));
          } else if (entry.target === bottomBarRef.current && !visibleStates.bottomBar) {
            setVisibleStates((prev) => ({ ...prev, bottomBar: true }));
          }
        }
      });
    }, options);

    [aboutRef, quickRef, coursesRef, bottomBarRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      [aboutRef, quickRef, coursesRef, bottomBarRef].forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [visibleStates]);

  return (
    <footer
      className="relative pt-16 pb-0 text-white overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(51,75,148,0.94), rgba(51,75,148,0.94)), url('${bgImg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* --- Footer Top Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-20 mb-4">
          {/* About Section */}
          <div
            ref={aboutRef}
            className={`space-y-4 ${visibleStates.about ? "opacity-100 animate-slideInLeft" : "opacity-0"}`}
          >
            <Link to="/about">
              <h3 className="font-extrabold text-lg xl:text-xl mb-4 border-b-2 border-[#ef9b15] w-max pb-1 hover:text-[#ef9b15] transition">
                ABOUT US
              </h3>
            </Link>
            <p className="text-white/80 text-[15px] xl:text-[16px] leading-relaxed">
              Become a part of Hi Vision and build the self-assurance to succeed in accounting and tax.
              Our aim is not only to teach you finance but to make you financially sound.
            </p>
            <div className="flex items-start gap-2 text-white/90 text-[15px] xl:text-[16px] mt-2">
              <FaMapMarkerAlt className="text-[#ef9b15] flex-shrink-0 mt-1" size={20} />
              <span>In front of Exon Montessori Inter College, Campbell Road, Lucknow – 226003</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 text-[15px] xl:text-[16px]">
              <FaEnvelope className="text-[#ef9b15]" size={20} />
              <a
                href="mailto:hivisiontaxationeducation@gmail.com"
                className="underline hover:text-[#ef9b15] transition"
              >
                hivisiontaxationeducation@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-white/90 text-[15px] xl:text-[16px]">
              <FaPhone className="text-[#ef9b15]" size={20} />
              <span>+91 92781 62882, +91 88875 92594</span>
            </div>
          </div>

          {/* Quick Links */}
          <div
            ref={quickRef}
            className={` ${visibleStates.quick ? "opacity-100 animate-slideInUp" : "opacity-0"}`}
          >
            <Link to="/quick-links">
              <h3 className="font-extrabold text-lg xl:text-xl mb-4 border-b-2 border-[#ef9b15] w-max pb-1 hover:text-[#ef9b15] transition">
                QUICK LINK
              </h3>
            </Link>
            <ul className="space-y-2 text-[15px] xl:text-[16px]">
              {[
                { name: "Home", to: "/" },
                { name: "About Us", to: "/about" },
                { name: "Courses", to: "/courses" },
                { name: "Updates", to: "/updates" },
                { name: "Contact Us", to: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="hover:text-[#ef9b15] transition duration-300 inline-block hover:translate-x-2"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div
            ref={coursesRef}
            className={` ${visibleStates.courses ? "opacity-100 animate-slideInRight" : "opacity-0"}`}
          >
            <Link to="/courses">
              <h3 className="font-extrabold text-lg xl:text-xl mb-4 border-b-2 border-[#ef9b15] w-max pb-1 hover:text-[#ef9b15] transition">
                COURSES
              </h3>
            </Link>
            <ul className="space-y-2 text-[15px] xl:text-[16px]">
              {[
                { name: "Tax Audit", to: "/tax-audit" },
                { name: "GST (Goods & Services Tax)", to: "/gst" },
                { name: "Company Law", to: "/company-law" },
                { name: "Income Tax", to: "/income-tax" },
                { name: "Accounting", to: "/accounting" },
                { name: "TDS and TCS", to: "/tds-and-tcs" },
              ].map((course) => (
                <li key={course.name}>
                  <Link
                    to={course.to}
                    className="hover:text-[#ef9b15] transition duration-300 inline-block hover:translate-x-2"
                  >
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* --- Bottom Bar --- */}
      <div
        ref={bottomBarRef}
        className={`w-full bg-[#334b94] bg-opacity-95 flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 xl:px-12 py-4 xl:py-6 text-white text-[14px] xl:text-[16px] mt-10 z-20 relative border-t border-[#ef9b15]/50 ${visibleStates.bottomBar ? "opacity-100 animate-slideInUp" : "opacity-0"
          }`}
      >
        <p className="text-center md:text-left mb-2 md:mb-0">
          © Hi Vision. All Rights Reserved.{" "}
          <a
            href="https://www.brandstailer.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ef9b15] hover:underline hover:text-[#ffb84d] transition"
          >
            Design & Developed By: Brands Tailer Digital Marketing
          </a>
        </p>

        <div className="flex gap-4 md:gap-6 items-center flex-wrap justify-center md:justify-end">
          <Link to="/privacy" className="hover:text-[#ef9b15] transition duration-300">
            Privacy & Policy
          </Link>
          <Link to="/terms" className="hover:text-[#ef9b15] transition duration-300">
            Terms & Conditions
          </Link>
          <span className="flex gap-3 ml-2">
            <a
              href="https://www.facebook.com/profile.php?id=61581359084578"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-0 hover:scale-125 transition-all duration-300"
              style={{ animation: `popIn 0.5s ease-out 1.2s forwards` }}
              aria-label="Facebook"
            >
              <FaFacebook className="text-lg xl:text-xl hover:text-[#ef9b15] transition duration-300" />
            </a>

            <a
              href="https://www.youtube.com/@Hi-VisionTaxationEducation"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-0 hover:scale-125 transition-all duration-300"
              style={{ animation: `popIn 0.5s ease-out 1.4s forwards` }}
              aria-label="YouTube"
            >
              <FaYoutube className="text-lg xl:text-xl hover:text-[#ef9b15] transition duration-300" />
            </a>

            <a
              href="https://www.linkedin.com/in/hi-vision-taxation-education-08aa88387/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-0 hover:scale-125 transition-all duration-300"
              style={{ animation: `popIn 0.5s ease-out 1.6s forwards` }}
              aria-label="Twitter"
            >
              <FaLinkedin className="text-lg xl:text-xl hover:text-[#ef9b15] transition duration-300" />
            </a>

            <a
              href="https://www.instagram.com/hivisiontaxationeducation/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-0 hover:scale-125 transition-all duration-300"
              style={{ animation: `popIn 0.5s ease-out 1.8s forwards` }}
              aria-label="Google"
            >
              <FaInstagram className="text-lg xl:text-xl hover:text-[#ef9b15] transition duration-300" />
            </a>
          </span>

        </div>
    </div>

        {/* --- Animations --- */}
        <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }
        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out forwards;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
