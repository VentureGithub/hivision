import React from "react";
import { Link } from "react-router-dom";

const Banner = ({
  backgroundImage,
  title,
  description,
  breadcrumb1 = { label: "Home", path: "/" },
  breadcrumb2 = null,
}) => (
  <div
    className="relative w-full h-106 flex items-center bg-cover bg-center mt-28"
    style={{
      backgroundImage: `url(${backgroundImage})`,
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-[#334b94]/60"></div>

    {/* Content */}
    <div className="relative z-10 max-w-5xl px-4 lg:px-8">
      <div className="flex flex-col justify-center h-96 max-w-3xl">
        <h1 className="text-white font-extrabold text-3xl sm:text-4xl mb-6">
          {title}
        </h1>

        <div className="text-white text-l font-normal max-w-2xl">
          <p>{description}</p>
        </div>

        {/* Breadcrumb */}
        <div className="flex items-center gap-1 text-lg text-white/80 mt-12">
          <Link
            to={breadcrumb1.path}
            className="hover:text-[#ef9b15] transition-colors duration-200"
          >
            {breadcrumb1.label}
          </Link>

          {breadcrumb2 && (
            <>
              <span className="px-2">›</span>
              <Link
                to={breadcrumb2.path}
                className="text-[#ef9b15] hover:underline transition-colors duration-200"
              >
                {breadcrumb2.label}
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default Banner;
