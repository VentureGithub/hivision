import React from "react";
import { motion } from "framer-motion";


const FounderSection = () => {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20  mx-auto px-4 sm:px-6 lg:px-9 bg-[#fffefa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Circular Image with Partial Border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-106 lg:h-106">
              {/* Partial circular border background */}
              <svg className="absolute inset-0 w-full h-full -rotate-330" viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="100"
                  r="95"
                  fill="none"
                  stroke="#334b94"
                  strokeWidth="10"
                  strokeDasharray="400 160"
                />
              </svg>

              {/* Main circular image */}
              <div className="absolute inset-0 m-auto w-[calc(100%-2rem)] h-[calc(100%-2rem)] rounded-full overflow-hidden shadow-2xl">
                <img
                  src="/founder.jpeg"
                  alt="Founder"
                  className="w-full h-full object-cover "
                />
              </div>
            </div>
          </motion.div>


          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2">
              <span className="h-10 w-1 bg-[#ef9b15] rounded-full"></span>
              <span className="uppercase text-[#ef9b15] font-semibold tracking-widest text-sm">
                Message from Founder
              </span>
            </div>


            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#334b94] leading-tight">
              Building Future <span className="text-[#ef9b15]">Tax Professionals</span>
            </h2>


            {/* Description */}
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              It is with great pleasure and immense pride that I extend a warm welcome to you on behalf of our educational institute .
At HI-VISION our vision and mission is to made each and every individual skill ready as well as job ready for taxation and finance world .
            </p>


            


            {/* Founder Details */}
            <div className="pt-6 border-t border-gray-200">
              <h4 className="font-bold text-xl text-[#334b94] mb-1">
              Sunil Jaiswal
              </h4>
              <p className="text-gray-600 text-sm">
                Founder & Director - HI-VISION Institute
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default FounderSection;
