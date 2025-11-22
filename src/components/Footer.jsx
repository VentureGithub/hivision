import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer
    className="relative pt-16 pb-0 text-white overflow-hidden"
    style={{
      backgroundImage: `linear-gradient(rgba(51,75,148,0.94), rgba(51,75,148,0.94)), url('https://www.fatimacollege.edu.in/data/file_54e6e.jpg')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Decorative wave or overlay for image */}
    <div className="absolute left-0 top-0 w-full h-full pointer-events-none z-0">
      <svg
        viewBox="0 0 1440 320"
        className="w-full h-56 lg:h-64"
        preserveAspectRatio="none"
        style={{ position: "absolute", top: 0 }}
      >
        <path
          fill="#1570c6"
          fillOpacity="0.23"
          d="M0,160L60,165.3C120,171,240,181,360,208C480,235,600,277,720,282.7C840,288,960,256,1080,250.7C1200,245,1320,267,1380,277.3L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        />
      </svg>
    </div>

    <div className="relative max-w-7xl mx-auto px-4 lg:px-8 z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-12 border-b border-[#ffffff33]">
        {/* Logo and About */}
        <div className="flex flex-col items-start md:col-span-1">
          <img
            src="/logoo.png"
            alt="Hi Vision Logo"
            className="w-36 h-auto mb-6 bg-white p-4"
          />
          <p className="text-white/85 text-[15px] mb-6 leading-relaxed">
          HI-VISION is one such accounting & taxation education company in Lucknow that can turn the tables around for your career with deep, practical courses and training.
          </p>
          <div className="flex gap-3 text-white text-xl mt-3">
            <a  href="https://www.facebook.com/profile.php?id=61581359084578" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="hover:text-[#ef9b15]" />
            </a>
            <a href="https://www.youtube.com/@Hi-VisionTaxationEducation" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="hover:text-[#ef9b15]" />
            </a>
            <a href="https://www.linkedin.com/in/hi-vision-taxation-education-08aa88387" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-[#ef9b15]" />
            </a>
            <a href="https://www.instagram.com/hivisiontaxationeducation" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-[#ef9b15]" />
            </a>
          </div>
        </div>

        {/* Contacts */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contacts</h3>
          <p className="mb-2 flex items-center">
            <FaMapMarkerAlt className="mr-2 text-[#ef9b15]" />
            In front of Exon Montessori Inter College, Campbell Road, Lucknow – 226003
          </p>
          <p className="mb-2 flex items-center">
            <FaEnvelope className="mr-2 text-[#ef9b15]" />
            <a
              href="mailto:hivisiontaxationeducation@gmail.com"
              className="underline hover:text-[#ef9b15] transition break-words"
              style={{ wordBreak: "break-all" }}
            >
              hivisiontaxationeducation@gmail.com
            </a>
          </p>
          <p className="mb-2 flex items-center">
            <FaPhone className="mr-2 text-[#ef9b15]" />
            +91 92781 62882, +91 88875 92594
          </p>
        
        </div>

        {/* Services/Courses */}
        <div>
          <h3 className="font-bold text-lg mb-4">Courses</h3>
          <ul className="space-y-2">
            {[
              { name: "Tax Audit", to: "/tax-audit" },
              { name: "GST (Goods & Services Tax)", to: "/gst" },
              { name: "Company Law", to: "/company-law" },
              { name: "Income Tax", to: "/income-tax" },
              { name: "Accounting", to: "/accounting" },
              { name: "TDS and TCS", to: "/tds-and-tcs" },
            ].map((course) => (
              <li key={course.name}>
                <Link to={course.to} className="hover:text-[#ef9b15] transition">
                  {course.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { name: "Home", to: "/" },
              { name: "About Us", to: "/about" },
              { name: "Courses", to: "/courses" },
              { name: "Updates", to: "/updates" },
              { name: "Contact Us", to: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link to={link.to} className="hover:text-[#ef9b15] transition">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-4 flex flex-col md:flex-row justify-between items-center text-white text-[15px]">
        <div className="mb-2 md:mb-0 text-center md:text-left">
          © HI-VISION. All Rights Reserved. &nbsp;
          <a
            href="https://www.brandstailer.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ef9b15] hover:text-[#fffefa] font-bold transition"
          >
            Design & Developed By: Brands Tailer Digital Marketing
          </a>
        </div>
        <div className="flex gap-4 text-white">
          <Link to="/privacy" className="hover:text-[#ef9b15] transition">
            Privacy & Policy
          </Link>
          <Link to="/terms" className="hover:text-[#ef9b15] transition">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
