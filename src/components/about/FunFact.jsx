import React from "react";

const FunFact = () => (
  <div
    className="w-full bg-cover bg-center"
    style={{ backgroundImage: "url('/3web banner.png')" }} // Background image
  >
    <div className="bg-[#334b94]/70 py-20 px-6 flex flex-col items-center justify-center text-center">
      <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-4 leading-snug">
        {"Our motive is not just to make you "}
        <span className="text-[#ef9b15]">{"financially literate"}</span>
        {", but "}
        <span className="text-[#ef9b15]">{"financially independent."}</span>
      </h2>

      <p className="text-[#fffefa] text-lg max-w-3xl mt-4">
        {"We believe in empowering students with real financial knowledge, practical training, and career-focused education to build a secure future."}
      </p>
    </div>
  </div>
);

export default FunFact;
