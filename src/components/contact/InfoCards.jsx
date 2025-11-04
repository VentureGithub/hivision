import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";

const cards = [
  {
    icon: <FaMapMarkerAlt className="text-4xl text-[#ef9b15] mb-2" />,
    label: "Address",
    value: (
      <span>
        In front of Exon Montessori Inter College,<br />
        Campbell Road, Lucknow – 226003
      </span>
    ),
  },
  {
    icon: <FaPhoneAlt className="text-4xl text-[#ef9b15] mb-2" />,
    label: "Phone",
    value: (
      <span>
        +91 92781 62882<br />
        +91 88875 92594
      </span>
    ),
  },
  {
    icon: <FaRegEnvelope className="text-4xl text-[#ef9b15] mb-2" />,
    label: "Email",
    value: (
      <a
        href="mailto:hivisiontaxationeducation@gmail.com"
        className="text-gray-900 underline"
      >
        hivisiontaxationeducation@gmail.com
      </a>
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
      className="text-5xl font-serif font-extrabold text-[#334b94] mb-2 text-center"
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
          <div className="uppercase mt-3 mb-1 text-base font-extrabold text-[#334b94] tracking-widest">
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
