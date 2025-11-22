import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegEnvelope,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaMapMarkerAlt className="text-4xl text-[#ef9b15] mb-2" />,
    label: "Address",
    value: (
      <span className="text-center">
        <strong className="text-[#334b94]">Branch Off.:</strong> Arsh Plaza, Opp. Exon School,
        <br />
        Campbell Road, Rajajipuram, Lucknow – 226017
        <br />
        <strong className="text-[#334b94] ">Head Off.:</strong> 215/30, Subhash Marg Near Hawai Zahaj Kothi,
        <br />
        Chowk, Lucknow – 226003
      </span>
    ),
  },
  {
    icon: <FaPhoneAlt className="text-4xl text-[#ef9b15] mb-2" />,
    label: "Phone",
    value: (
      <span>
        +91 92781 62882
        <br />
        +91 88875 92594
      </span>
    ),
  },
  {
    icon: <FaRegEnvelope className="text-4xl text-[#ef9b15] mb-2" />,
    label: "Email",
    value: (
      <div className="flex flex-col items-center">
        <a
          href="mailto:hivisiontaxationeducation@gmail.com"
          className="text-gray-900 underline mb-3"
        >
          hivisiontaxationeducation@gmail.com
        </a>

        {/* Social Media Icons */}
        <span className="flex gap-4 justify-center">
          <a
            href="https://www.facebook.com/profile.php?id=61581359084578"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition-all duration-300"
            aria-label="Facebook"
          >
            <FaFacebook className="text-xl hover:text-[#ef9b15] transition duration-300" />
          </a>

          <a
            href="https://www.youtube.com/@Hi-VisionTaxationEducation"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition-all duration-300"
            aria-label="YouTube"
          >
            <FaYoutube className="text-xl hover:text-[#ef9b15] transition duration-300" />
          </a>

          <a
            href="https://www.linkedin.com/in/hi-vision-taxation-education-08aa88387/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-xl hover:text-[#ef9b15] transition duration-300" />
          </a>

          <a
            href="https://www.instagram.com/hivisiontaxationeducation/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition-all duration-300"
            aria-label="Instagram"
          >
            <FaInstagram className="text-xl hover:text-[#ef9b15] transition duration-300" />
          </a>
        </span>
      </div>
    ),
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const SimpleContact = () => (
  <section className="w-full bg-[#fdf9e9] py-14 px-6 flex flex-col items-center">
    <motion.h2
      className="text-5xl font-extrabold text-[#334b94] mb-2 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUpVariant}
    >
      Contact Us
    </motion.h2>
    <motion.p
      className="text-gray-500 mb-10 text-center max-w-xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ ...fadeUpVariant, transition: { delay: 0.15 } }}
    >
      Feel free to reach out with any questions, or to connect with our team!
    </motion.p>

    <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-5xl">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          className="flex flex-col items-center min-w-[200px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ ...fadeUpVariant, transition: { delay: 0.3 + i * 0.15 } }}
        >
          {card.icon}
          <div className="uppercase mt-3 mb-1 text-base font-extrabold text-[#334b94]">
            {card.label}
          </div>
          <div className="text-md text-gray-900 font-medium text-center">
            {card.value}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default SimpleContact;
