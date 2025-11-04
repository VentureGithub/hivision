import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { PiStudentLight } from "react-icons/pi";
import { GiBookCover } from "react-icons/gi";

const EduHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // ✅ To detect active route

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Courses", link: "/courses" },
    { name: "Updates", link: "/updates" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-100 transition-all duration-300 ${
        scrolled
          ? "bg-white/50 backdrop-blur-lg shadow-lg"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between py-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-[#ef9b15] font-bold text-2xl xl:text-3xl tracking-wide"
        >
          <img
            src="/logoo.png"
            alt="EduVerse Logo"
            className="h-16 w-auto xl:h-20 object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className={`relative font-medium pb-1 transition duration-200 ${
                location.pathname === item.link
                  ? "text-[#ef9b15] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#ef9b15] after:rounded-full"
                  : "text-[#334b94] hover:text-[#ef9b15]"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* Cart Icon */}
          <Link
            to="/"
            className={`relative transition duration-300 ${
              scrolled
                ? "text-[#ef9b15] hover:text-[#ef9b15]"
                : "text-[#ef9b15] hover:text-[#ef9b15]"
            }`}
          >
            <GiBookCover className="text-2xl" />
    
          </Link>

          {/* Login Button */}
          <Link
            to="/contact"
            className="ml-4 bg-[#ef9b15] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#d88a10] transition duration-300 shadow-md"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden text-2xl ${
            scrolled ? "text-[#ef9b15]" : "text-[#ef9b15]"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black/50 backdrop-blur-lg border-t border-[#ef9b15]/30">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                onClick={() => setMenuOpen(false)}
                className={`font-medium transition ${
                  location.pathname === item.link
                    ? "text-[#ef9b15]"
                    : "text-blue-400 hover:text-[#ef9b15]"
                }`}
              >
                {item.name}
              </Link>
            ))}

        

            {/* Login */}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="bg-[#ef9b15] text-white px-5 py-2 rounded-full text-center font-semibold hover:bg-[#d88a10] transition duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default EduHeader;
