// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { IoClose, IoMail, IoCall, IoPerson, IoCheckmarkCircle } from "react-icons/io5";

// const advancedCourses = [
//   {
//     id: 1,
//     title: "Accounts (English & Hindi)",
//     desc: "Learn the core of accounting principles and practices.",
//     img: "/accounting.png",
//     link: "/accounts",
//   },
//   {
//     id: 2,
//     title: "GST (Goods & Services Tax)",
//     desc: "Understand GST compliance, filing, and practical applications.",
//     img: "/gst.png",
//     link: "/advance-gst",
//   },
// ];

// const premiumCourses = [
//   {
//     id: 1,
//     title: "Accounts",
//     desc: "Learn the core of accounting principles and practices.",
//     img: "/accounting.png",
//     link: "/accounting",
//   },
//   {
//     id: 2,
//     title: "GST (Goods & Services Tax)",
//     desc: "Understand GST compliance, filing, and practical applications.",
//     img: "/gst.png",
//     link: "/gst",
//   },
//   {
//     id: 3,
//     title: "Income Tax",
//     desc: "Master personal and corporate income tax filing and calculations.",
//     img: "/income.png",
//     link: "/income-tax",
//   },
//   {
//     id: 4,
//     title: "Company Law",
//     desc: "Understand the legal and compliance framework for companies.",
//     img: "/company.png",
//     link: "/company-law",
//   },
//   {
//     id: 5,
//     title: "Tax Audit",
//     desc: "Learn the process of tax auditing and compliance with government rules.",
//     img: "/tax.png",
//     link: "/tax-audit",
//   },
//   {
//     id: 6,
//     title: "TDS and TCS",
//     desc: "Understand Tax Deducted at Source and Tax Collected at Source procedures.",
//     img: "/company.png",
//     link: "/tds-and-tcs",
//   },

// ];

// const premiumPackageDetails = [
//   { label: "Tenure", value: "Course + Training (9+2 Months)" },
//   {
//     label: "Syllabus",
//     value: "Accounting, GST, Income Tax, Company Law, Tax Audit, TDS and TCS",
//   },
//   { label: "Training Criteria", value: "Per Month Test, 65%+ Average Required" },
//   { label: "Exam for Placement", value: "After Training, 80%+ Required" },
//   { label: "Kit", value: "T-shirt, Bag, I Card, Stationery" },
//   { label: "Amount", value: "₹50,000" },
// ];

// const advancedPackageDetails = [
//   { label: "Tenure", value: "Course + Training (6+1 Months)" },
//   { label: "Syllabus", value: "Full Accounting, Full GST" },
//   { label: "Training Criteria", value: "Per Month Test, 65%+ Average Required" },
//   { label: "Exam for Placement", value: "After Training, 80%+ Required" },
//   { label: "Kit", value: "T-shirt, Bag, I Card, Stationery" },
//   { label: "Amount", value: "₹25,000" },
// ];

// const AllCourses = () => {
//   const [activeTab, setActiveTab] = useState("advanced");
//   const [openModal, setOpenModal] = useState(false);
//   const [showSuccessAlert, setShowSuccessAlert] = useState(false);
//   const [paymentDetails, setPaymentDetails] = useState({
//     paymentId: "",
//     packageType: "",
//     amount: "",
//   });
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     fatherName: "",
//     motherName: "",
//     courseName: "",
//     qualification: "",
//     state: "",
//     city: "",
//     pincode: "",
//   });

//   // Calculating GST and discounts dynamically
//   const baseAmount = activeTab === "advanced" ? 25000 : 50000;

//   // Discounts
//   const discount = activeTab === "advanced"
//     ? baseAmount * 0.10   // 10% for Advanced
//     : baseAmount * 0.25;  // 25% for Premium

//   const discountedAmount = baseAmount - discount;

//   // GST (18%)
//   const gst = discountedAmount * 0.18;

//   // Final Invoice Amount
//   const totalAmount = discountedAmount + gst;


//   const courses = activeTab === "advanced" ? advancedCourses : premiumCourses;
//   const packageDetails =
//     activeTab === "advanced" ? advancedPackageDetails : premiumPackageDetails;
//   const packageAmount = activeTab === "advanced" ? 25000 : 50000;
//   const packageType =
//     activeTab === "advanced" ? "Advanced Package" : "Premium Package";

//   const handleOpenModal = () => {
//     setOpenModal(true);
//     document.body.style.overflow = "hidden";
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//     document.body.style.overflow = "unset";
//     setFormData({
//       firstName: "",
//       lastName: "",
//       email: "",
//       phone: "",
//       fatherName: "",
//       motherName: "",
//       courseName: "",
//       qualification: "",
//       state: "",
//       city: "",
//       pincode: "",
//     });
//   };

//   const handleCloseSuccessAlert = () => {
//     setShowSuccessAlert(false);
//     document.body.style.overflow = "unset";
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const loadRazorpayScript = () => {
//     return new Promise((resolve) => {
//       const script = document.createElement("script");
//       script.src = "https://checkout.razorpay.com/v1/checkout.js";
//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone ||
//       !formData.fatherName || !formData.motherName || !formData.courseName ||
//       !formData.qualification || !formData.state || !formData.city || !formData.pincode) {
//       alert("Please fill all the required fields");
//       return;
//     }

//     if (formData.phone.length !== 10) {
//       alert("Please enter a valid 10-digit phone number");
//       return;
//     }

//     if (formData.pincode.length !== 6) {
//       alert("Please enter a valid 6-digit pincode");
//       return;
//     }

//     const scriptLoaded = await loadRazorpayScript();
//     if (!scriptLoaded) {
//       alert("Failed to load payment gateway. Please check your internet connection.");
//       return;
//     }

//     const options = {
//       key: import.meta.env.VITE_RAZORPAY_KEY_TEST,
//       amount: Math.round(totalAmount * 100), // total with GST
//       currency: "INR",
//       name: "Accounting & Taxation Institute",
//       description: `${packageType} Enrollment`,
//       image: "/logoo.png",

//       prefill: {
//         name: `${formData.firstName} ${formData.lastName}`,
//         email: formData.email,
//         contact: formData.phone,
//       },

//       notes: {
//         package_type: packageType,
//         first_name: formData.firstName,
//         last_name: formData.lastName,
//         father_name: formData.fatherName,
//         mother_name: formData.motherName,
//         course_name: formData.courseName,
//         qualification: formData.qualification,
//         state: formData.state,
//         city: formData.city,
//         pincode: formData.pincode,
//         base_amount: `₹${baseAmount}`,
//         discount_applied: `₹${discount}`,
//         gst_amount: `₹${gst.toFixed(2)}`,
//         total_payable: `₹${totalAmount.toFixed(2)}`,
//       },

//       theme: {
//         color: "#334b94",
//       },

//       handler: function (response) {
//         handleCloseModal();
//         setPaymentDetails({
//           paymentId: response.razorpay_payment_id,
//           packageType: packageType,
//           amount: `₹${totalAmount.toLocaleString("en-IN")}`,
//         });
//         setShowSuccessAlert(true);
//         document.body.style.overflow = "hidden";
//       },
//     };

//     try {
//       const razorpay = new window.Razorpay(options);
//       razorpay.open();
//     } catch (error) {
//       console.error("Payment Error:", error);
//       alert("Something went wrong. Please try again.");
//     }
//   };



//   const handleTabChange = (tab) => {
//   setActiveTab(tab);
//   localStorage.setItem("selectedPackageTab", tab);
// };



//   return (
//     <section className="w-full py-12 bg-[#fffefa]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <div className="mb-8 text-center">
//           <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-[#334b94]">
//             <span>Our </span>
//             <span className="text-[#ef9b15]">
//               Accounting & Taxation Courses
//             </span>
//           </h2>
//           <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto">
//             Choose between our Advanced and Premium Packages for professional
//             accounting and taxation training.
//           </p>
//         </div>

//         {/* Tabs with Enroll Button */}
//         <div className="flex flex-col justify-center items-center mb-10 gap-6">
//           {/* Package Buttons */}
//           <div className="flex justify-center">
//             <button
//               onClick={() => setActiveTab("advanced")}
//               className={`px-6 py-2 font-semibold rounded-l-full border border-[#ef9b15] cursor-pointer ${activeTab === "advanced"
//                 ? "bg-[#ef9b15] text-[#334b94]"
//                 : "text-[#334b94] hover:bg-[#fdf0d9]"
//                 } transition-all duration-300`}
//             >
//               Advanced Package
//             </button>
//             <button
//               onClick={() => setActiveTab("premium")}
//               className={`px-6 py-2 font-semibold rounded-r-full border border-[#ef9b15] cursor-pointer ${activeTab === "premium"
//                 ? "bg-[#ef9b15] text-[#334b94]"
//                 : "text-[#334b94] hover:bg-[#fdf0d9]"
//                 } transition-all duration-300`}
//             >
//               Premium Package
//             </button>
//           </div>

//           {/* Enroll Button */}

//           <p className="text-center text-md font-medium text-[#334b94] ">
//             Join before registrations close
//           </p>
//           <button
//             onClick={handleOpenModal}
//             className="px-8 py-3 rounded-full font-bold text-lg bg-[#334b94] text-white shadow-lg hover:shadow-xl hover:bg-[#2a3d7a] transition-all duration-300 transform hover:scale-105"
//           >
//             Enroll Now
//           </button>
//         </div>


//         {/* Package Info Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-10">
//           {packageDetails.map((info, idx) => (
//             <div
//               key={idx}
//               className="p-5 rounded-xl bg-white border border-[#ef9b15] shadow group hover:shadow-2xl transition-all text-center"
//             >
//               <p className="text-[#334b94] font-bold text-lg mb-1">
//                 {info.label}
//               </p>
//               <p className="text-[#ef9b15] font-semibold">{info.value}</p>
//             </div>
//           ))}
//         </div>

//         {/* Cards Grid */}
//         <div
//           className={`grid gap-8 ${activeTab === "advanced"
//             ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2"
//             : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
//             }`}
//         >
//           {courses.map((course) => (
//             <div
//               key={course.id}
//               className="bg-white rounded-lg shadow group hover:shadow-2xl border border-[#ef9b15] flex flex-col overflow-hidden transition-all hover:-translate-y-1"
//             >
//               <div className="relative w-full h-[200px] overflow-hidden">
//                 <img
//                   src={course.img}
//                   alt={course.title}
//                   className="w-full h-full object-cover"
//                   style={{
//                     clipPath: "polygon(0 0, 100% 0, 100% 88%, 0 100%)",
//                   }}
//                 />
//               </div>
//               <div className="flex flex-col flex-1 px-4 py-3 items-center text-center">
//                 <h3 className="text-xl sm:text-xl font-bold mb-1 text-[#334b94]">
//                   {course.title}
//                 </h3>
//                 <p className="text-gray-800 text-sm mb-3">{course.desc}</p>
//                 {!course.hideButton && (
//                   <Link
//                     to={course.link}
//                     className="mt-auto px-5 py-2 rounded-full font-medium text-base bg-[#ef9b15] text-[#334b94] shadow hover:shadow-lg hover:bg-[#e38910] hover:text-white transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1"
//                   >
//                     Read More
//                   </Link>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Enrollment Modal */}
//         {openModal && (
//           <div
//             className="fixed inset-0 flex items-center justify-center p-4"
//             style={{ zIndex: 999999 }}
//           >
//             <div
//               className="absolute inset-0 bg-transparent"
//               onClick={handleCloseModal}
//             ></div>

//             <div
//               className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col animate-fadeIn relative"
//               style={{ zIndex: 1000000 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="bg-[#334b94] text-white px-6 py-4 flex justify-between items-center">
//                 <h2 className="text-2xl font-bold">Enroll in {packageType}</h2>
//                 <button
//                   onClick={handleCloseModal}
//                   className="text-white hover:bg-white/20 rounded-full p-2 transition-all duration-200"
//                   aria-label="Close modal"
//                 >
//                   <IoClose size={28} />
//                 </button>
//               </div>

//               <div className="overflow-y-auto flex-1 px-6 py-5">
//                 <div className="bg-[#fdf0d9] border-2 border-[#ef9b15] rounded-2xl p-5 mb-6">
//                   <h3 className="text-xl font-bold text-[#334b94] mb-4 text-center">
//                     Package Details
//                   </h3>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     {packageDetails.map((info, idx) => (
//                       <div key={idx} className="space-y-1">
//                         <p className="text-sm font-semibold text-[#334b94]">
//                           {info.label}:
//                         </p>
//                         <p className="text-sm font-medium text-[#ef9b15]">
//                           {info.value}
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//                 {/* Payment Summary */}
//                 <div className="bg-[#fdf0d9] border-2 border-[#ef9b15] rounded-2xl p-5 mt-6">
//                   <h3 className="text-lg font-bold text-[#334b94] mb-3 text-center">
//                     Payment Summary
//                   </h3>

//                   <div className="space-y-2 text-sm text-[#334b94]">
//                     <p>Taxable Value:
//                       <span className="font-semibold text-[#ef9b15]">
//                         ₹{baseAmount.toLocaleString("en-IN")}
//                       </span>
//                     </p>

//                     <p>
//                       {activeTab === "advanced" ? "10% Discount:" : "25% Discount:"}
//                       <span className="font-semibold text-green-600">
//                         {" "} - ₹{discount.toLocaleString("en-IN")}
//                       </span>
//                     </p>

//                     <p>After Discount:
//                       <span className="font-semibold text-[#ef9b15]">
//                         {" "}₹{discountedAmount.toLocaleString("en-IN")}
//                       </span>
//                     </p>

//                     <p>+ 18% GST:
//                       <span className="font-semibold text-[#ef9b15]">
//                         {" "}₹{gst.toLocaleString("en-IN")}
//                       </span>
//                     </p>

//                     <p className="text-lg font-bold text-[#334b94] border-t pt-2 mt-2 flex justify-between">
//                       <span>Invoice Value:</span>
//                       <span className="text-[#ef9b15]">
//                         ₹{totalAmount.toLocaleString("en-IN")}
//                       </span>
//                     </p>
//                   </div>
//                 </div>



//                 <div className="border-t-2 border-gray-200 mb-6"></div>

//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <h3 className="text-xl font-bold text-[#334b94] mb-4">
//                     Your Information
//                   </h3>

//                   {/* First Name and Last Name */}
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <div className="relative">
//                       <label
//                         htmlFor="firstName"
//                         className="block text-sm font-medium text-gray-700 mb-2"
//                       >
//                         First Name <span className="text-red-500">*</span>
//                       </label>
//                       <div className="relative">
//                         <IoPerson
//                           className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#334b94]"
//                           size={20}
//                         />
//                         <input
//                           type="text"
//                           id="firstName"
//                           name="firstName"
//                           value={formData.firstName}
//                           onChange={handleInputChange}
//                           required
//                           className="w-full pl-11 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#334b94] focus:ring-2 focus:ring-[#ef9b15] focus:ring-opacity-30 transition-all outline-none"
//                           placeholder="First name"
//                         />
//                       </div>
//                     </div>

//                     <div className="relative">
//                       <label
//                         htmlFor="lastName"
//                         className="block text-sm font-medium text-gray-700 mb-2"
//                       >
//                         Last Name <span className="text-red-500">*</span>
//                       </label>
//                       <div className="relative">
//                         <IoPerson
//                           className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#334b94]"
//                           size={20}
//                         />
//                         <input
//                           type="text"
//                           id="lastName"
//                           name="lastName"
//                           value={formData.lastName}
//                           onChange={handleInputChange}
//                           required
//                           className="w-full pl-11 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#334b94] focus:ring-2 focus:ring-[#ef9b15] focus:ring-opacity-30 transition-all outline-none"
//                           placeholder="Last name"
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   {/* Email */}
//                   <div className="relative">
//                     <label
//                       htmlFor="email"
//                       className="block text-sm font-medium text-gray-700 mb-2"
//                     >
//                       Email Address <span className="text-red-500">*</span>
//                     </label>
//                     <div className="relative">
//                       <IoMail
//                         className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#334b94]"
//                         size={20}
//                       />
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         required
//                         className="w-full pl-11 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#334b94] focus:ring-2 focus:ring-[#ef9b15] focus:ring-opacity-30 transition-all outline-none"
//                         placeholder="your.email@example.com"
//                       />
//                     </div>
//                   </div>

//                   {/* Phone Number */}
//                   <div className="relative">
//                     <label
//                       htmlFor="phone"
//                       className="block text-sm font-medium text-gray-700 mb-2"
//                     >
//                       Phone Number <span className="text-red-500">*</span>
//                     </label>
//                     <div className="relative">
//                       <IoCall
//                         className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#334b94]"
//                         size={20}
//                       />
//                       <input
//                         type="tel"
//                         id="phone"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleInputChange}
//                         required
//                         pattern="[0-9]{10}"
//                         maxLength="10"
//                         className="w-full pl-11 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#334b94] focus:ring-2 focus:ring-[#ef9b15] focus:ring-opacity-30 transition-all outline-none"
//                         placeholder="10-digit phone number"
//                       />
//                     </div>
//                   </div>

//                   {/* Father's Name and Mother's Name */}
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <div className="relative">
//                       <label
//                         htmlFor="fatherName"
//                         className="block text-sm font-medium text-gray-700 mb-2"
//                       >
//                         Father's Name <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         id="fatherName"
//                         name="fatherName"
//                         value={formData.fatherName}
//                         onChange={handleInputChange}
//                         required
//                         className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#334b94] focus:ring-2 focus:ring-[#ef9b15] focus:ring-opacity-30 transition-all outline-none"
//                         placeholder="Father's name"
//                       />
//                     </div>

//                     <div className="relative">
//                       <label
//                         htmlFor="motherName"
//                         className="block text-sm font-medium text-gray-700 mb-2"
//                       >
//                         Mother's Name <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         id="motherName"
//                         name="motherName"
//                         value={formData.motherName}
//                         onChange={handleInputChange}
//                         required
//                         className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#334b94] focus:ring-2 focus:ring-[#ef9b15] focus:ring-opacity-30 transition-all outline-none"
//                         placeholder="Mother's name"
//                       />
//                     </div>
//                   </div>

//                   {/* Course Name */}
//                   <div className="relative">
//                     <label
//                       htmlFor="courseName"
//                       className="block text-sm font-medium text-gray-700 mb-2"
//                     >
//                       Course Name <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       id="courseName"
//                       name="courseName"
//                       value={formData.courseName}
//                       onChange={handleInputChange}
//                       required
//                       className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#334b94] focus:ring-2 focus:ring-[#ef9b15] focus:ring-opacity-30 transition-all outline-none"
//                       placeholder="Enter course name"
//                     />
//                   </div>

//                   {/* Qualification */}
//                   <div className="relative">
//                     <label
//                       htmlFor="qualification"
//                       className="block text-sm font-medium text-gray-700 mb-2"
//                     >
//                       Qualification <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       id="qualification"
//                       name="qualification"
//                       value={formData.qualification}
//                       onChange={handleInputChange}
//                       required
//                       className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#334b94] focus:ring-2 focus:ring-[#ef9b15] focus:ring-opacity-30 transition-all outline-none"
//                       placeholder="Enter your qualification"
//                     />
//                   </div>

//                   {/* State and City */}
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <div className="relative">
//                       <label
//                         htmlFor="state"
//                         className="block text-sm font-medium text-gray-700 mb-2"
//                       >
//                         State <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         id="state"
//                         name="state"
//                         value={formData.state}
//                         onChange={handleInputChange}
//                         required
//                         className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#334b94] focus:ring-2 focus:ring-[#ef9b15] focus:ring-opacity-30 transition-all outline-none"
//                         placeholder="State"
//                       />
//                     </div>

//                     <div className="relative">
//                       <label
//                         htmlFor="city"
//                         className="block text-sm font-medium text-gray-700 mb-2"
//                       >
//                         City <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         id="city"
//                         name="city"
//                         value={formData.city}
//                         onChange={handleInputChange}
//                         required
//                         className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#334b94] focus:ring-2 focus:ring-[#ef9b15] focus:ring-opacity-30 transition-all outline-none"
//                         placeholder="City"
//                       />
//                     </div>
//                   </div>

//                   {/* Pincode */}
//                   <div className="relative">
//                     <label
//                       htmlFor="pincode"
//                       className="block text-sm font-medium text-gray-700 mb-2"
//                     >
//                       Pincode <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="tel"
//                       id="pincode"
//                       name="pincode"
//                       value={formData.pincode}
//                       onChange={handleInputChange}
//                       required
//                       pattern="[0-9]{6}"
//                       maxLength="6"
//                       className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#334b94] focus:ring-2 focus:ring-[#ef9b15] focus:ring-opacity-30 transition-all outline-none"
//                       placeholder="6-digit pincode"
//                     />
//                   </div>

//                   <div className="flex gap-3 pt-4 border-t-2 border-gray-200 mt-6">
//                     <button
//                       type="button"
//                       onClick={handleCloseModal}
//                       className="flex-1 px-6 py-3 border-2 border-[#334b94] text-[#334b94] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200"
//                     >
//                       Cancel
//                     </button>
//                     <button
//                       type="submit"
//                       className="flex-1 px-6 py-3 bg-[#ef9b15] text-[#334b94] font-bold rounded-lg hover:bg-[#e38910] hover:shadow-lg transition-all duration-200 transform hover:scale-105"
//                     >
//                       Proceed to Payment
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Custom Success Alert Modal - Compact & Responsive */}
//         {showSuccessAlert && (
//           <div
//             className="fixed inset-0 flex items-center justify-center p-3 sm:p-4"
//             style={{ zIndex: 9999999 }}
//           >
//             {/* Transparent Backdrop */}
//             <div
//               className="absolute inset-0 bg-transparent"
//               onClick={handleCloseSuccessAlert}
//             ></div>

//             {/* Compact Success Modal */}
//             <div
//               className="bg-white rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md overflow-hidden animate-scaleIn relative"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Success Header - Compact */}
//               <div className="bg-gradient-to-r from-green-400 to-green-600 px-4 py-5 text-center">
//                 <div className="flex justify-center mb-3">
//                   <div className="bg-white rounded-full p-2 animate-bounce">
//                     <IoCheckmarkCircle className="text-green-600" size={48} />
//                   </div>
//                 </div>
//                 <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">
//                   Payment Successful! 🎉
//                 </h2>
//                 <p className="text-green-50 text-sm">
//                   Your enrollment is confirmed
//                 </p>
//               </div>

//               {/* Payment Details - Compact */}
//               <div className="px-4 py-4">
//                 <div className="space-y-3 mb-4">
//                   {/* Package */}
//                   <div className="bg-gray-50 rounded-lg p-3">
//                     <p className="text-xs text-gray-600 mb-1">Package</p>
//                     <p className="text-base font-bold text-[#334b94]">
//                       {paymentDetails.packageType}
//                     </p>
//                   </div>

//                   {/* Amount Paid */}
//                   <div className="bg-gray-50 rounded-lg p-3">
//                     <p className="text-xs text-gray-600 mb-1">Amount Paid</p>
//                     <p className="text-xl font-bold text-[#ef9b15]">
//                       {paymentDetails.amount}
//                     </p>
//                   </div>

//                   {/* Payment ID */}
//                   <div className="bg-gray-50 rounded-lg p-3">
//                     <p className="text-xs text-gray-600 mb-1">Payment ID</p>
//                     <p className="text-xs font-mono text-gray-800 break-all">
//                       {paymentDetails.paymentId}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Confirmation Message */}
//                 <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
//                   <p className="text-xs text-blue-800 text-center flex items-center justify-center gap-1">
//                     <IoCheckmarkCircle className="text-blue-600" size={16} />
//                     Confirmation email has been sent
//                   </p>
//                 </div>

//                 {/* Close Button */}
//                 <button
//                   onClick={handleCloseSuccessAlert}
//                   className="w-full px-4 py-3 bg-gradient-to-r from-[#334b94] to-[#2a3d7a] text-white font-bold rounded-xl hover:shadow-lg transition-all duration-200 transform hover:scale-105"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Custom Animations */}
//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: scale(0.95);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }
//         @keyframes scaleIn {
//           from {
//             opacity: 0;
//             transform: scale(0.8);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.2s ease-out;
//         }
//         .animate-scaleIn {
//           animation: scaleIn 0.3s ease-out;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default AllCourses;



import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoClose, IoMail, IoCall, IoPerson, IoCheckmarkCircle } from "react-icons/io5";

const advancedCourses = [
  {
    id: 1,
    title: "Accounts (English & Hindi)",
    desc: "Learn the core of accounting principles and practices.",
    img: "/accounting.png",
    link: "/accounts",
  },
  {
    id: 2,
    title: "GST (Goods & Services Tax)",
    desc: "Understand GST compliance, filing, and practical applications.",
    img: "/gst.png",
    link: "/advance-gst",
  },
];

const premiumCourses = [
  {
    id: 1,
    title: "Accounts",
    desc: "Learn the core of accounting principles and practices.",
    img: "/accounting.png",
    link: "/accounting",
  },
  {
    id: 2,
    title: "GST (Goods & Services Tax)",
    desc: "Understand GST compliance, filing, and practical applications.",
    img: "/gst.png",
    link: "/gst",
  },
  {
    id: 3,
    title: "Income Tax",
    desc: "Master personal and corporate income tax filing and calculations.",
    img: "/income.png",
    link: "/income-tax",
  },
  {
    id: 4,
    title: "Company Law",
    desc: "Understand the legal and compliance framework for companies.",
    img: "/company.png",
    link: "/company-law",
  },
  {
    id: 5,
    title: "Tax Audit",
    desc: "Learn the process of tax auditing and compliance with government rules.",
    img: "/tax.png",
    link: "/tax-audit",
  },
  {
    id: 6,
    title: "TDS and TCS",
    desc: "Understand Tax Deducted at Source and Tax Collected at Source procedures.",
    img: "/company.png",
    link: "/tds-and-tcs",
  },
];

const premiumPackageDetails = [
  { label: "Tenure", value: "Course + Training (9+2 Months)" },
  {
    label: "Syllabus",
    value: "Accounting, GST, Income Tax, Company Law, Tax Audit, TDS and TCS",
  },
  { label: "Training Criteria", value: "Per Month Test, 65%+ Average Required" },
  { label: "Exam for Placement", value: "After Training, 80%+ Required" },
  { label: "Kit", value: "T-shirt, Bag, I Card, Stationery" },
  { label: "Amount", value: "₹50,000" },
];

const advancedPackageDetails = [
  { label: "Tenure", value: "Course + Training (6+1 Months)" },
  { label: "Syllabus", value: "Full Accounting, Full GST" },
  { label: "Training Criteria", value: "Per Month Test, 65%+ Average Required" },
  { label: "Exam for Placement", value: "After Training, 80%+ Required" },
  { label: "Kit", value: "T-shirt, Bag, I Card, Stationery" },
  { label: "Amount", value: "₹25,000" },
];

const AllCourses = () => {
  const [activeTab, setActiveTab] = useState("advanced");
  const [openModal, setOpenModal] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    paymentId: "",
    packageType: "",
    amount: "",
  });
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    fatherName: "",
    motherName: "",
    courseName: "",
    qualification: "",
    state: "",
    city: "",
    pincode: "",
  });

  // Read saved tab from localStorage on mount
  useEffect(() => {
    const savedTab = localStorage.getItem("selectedPackageTab");
    if (savedTab === "advanced" || savedTab === "premium") {
      setActiveTab(savedTab);
    }
  }, []);

  // Store tab selection in localStorage
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    localStorage.setItem("selectedPackageTab", tab);
  };

  // Calculating GST and discounts dynamically
  const baseAmount = activeTab === "advanced" ? 25000 : 50000;

  // Discounts
  const discount =
    activeTab === "advanced" ? baseAmount * 0.1 : baseAmount * 0.25;

  const discountedAmount = baseAmount - discount;

  // GST (18%)
  const gst = discountedAmount * 0.18;

  // Final Invoice Amount
  const totalAmount = discountedAmount + gst;

  const courses = activeTab === "advanced" ? advancedCourses : premiumCourses;
  const packageDetails =
    activeTab === "advanced"
      ? advancedPackageDetails
      : premiumPackageDetails;
  const packageType =
    activeTab === "advanced" ? "Advanced Package" : "Premium Package";

  const handleOpenModal = () => {
    setOpenModal(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    document.body.style.overflow = "unset";
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      fatherName: "",
      motherName: "",
      courseName: "",
      qualification: "",
      state: "",
      city: "",
      pincode: "",
    });
  };

  const handleCloseSuccessAlert = () => {
    setShowSuccessAlert(false);
    document.body.style.overflow = "unset";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.fatherName ||
      !formData.motherName ||
      !formData.courseName ||
      !formData.qualification ||
      !formData.state ||
      !formData.city ||
      !formData.pincode
    ) {
      alert("Please fill all the required fields");
      return;
    }

    if (formData.phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    if (formData.pincode.length !== 6) {
      alert("Please enter a valid 6-digit pincode");
      return;
    }

    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) {
      alert("Failed to load payment gateway. Please check your internet connection.");
      return;
    }

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_TEST,
      amount: Math.round(totalAmount * 100), // total with GST
      currency: "INR",
      name: "Accounting & Taxation Institute",
      description: `${packageType} Enrollment`,
      image: "/logoo.png",

      prefill: {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        contact: formData.phone,
      },

      notes: {
        package_type: packageType,
        first_name: formData.firstName,
        last_name: formData.lastName,
        father_name: formData.fatherName,
        mother_name: formData.motherName,
        course_name: formData.courseName,
        qualification: formData.qualification,
        state: formData.state,
        city: formData.city,
        pincode: formData.pincode,
        base_amount: `₹${baseAmount}`,
        discount_applied: `₹${discount}`,
        gst_amount: `₹${gst.toFixed(2)}`,
        total_payable: `₹${totalAmount.toFixed(2)}`,
      },

      theme: {
        color: "#334b94",
      },

      handler: function (response) {
        handleCloseModal();
        setPaymentDetails({
          paymentId: response.razorpay_payment_id,
          packageType: packageType,
          amount: `₹${totalAmount.toLocaleString("en-IN")}`,
        });
        setShowSuccessAlert(true);
        document.body.style.overflow = "hidden";
      },
    };

    try {
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="w-full py-12 bg-[#fffefa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-[#334b94]">
            <span>Our </span>
            <span className="text-[#ef9b15]">Accounting & Taxation Courses</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto">
            Choose between our Advanced and Premium Packages for professional accounting and taxation training.
          </p>
        </div>

        {/* Tabs with Enroll Button */}
        <div className="flex flex-col justify-center items-center mb-10 gap-6">
          {/* Package Buttons */}
          <div className="flex justify-center">
            <button
              onClick={() => handleTabChange("advanced")}
              className={`px-6 py-2 font-semibold rounded-l-full border border-[#ef9b15] cursor-pointer ${
                activeTab === "advanced"
                  ? "bg-[#ef9b15] text-[#334b94]"
                  : "text-[#334b94] hover:bg-[#fdf0d9]"
              } transition-all duration-300`}
            >
              Advanced Package
            </button>
            <button
              onClick={() => handleTabChange("premium")}
              className={`px-6 py-2 font-semibold rounded-r-full border border-[#ef9b15] cursor-pointer ${
                activeTab === "premium"
                  ? "bg-[#ef9b15] text-[#334b94]"
                  : "text-[#334b94] hover:bg-[#fdf0d9]"
              } transition-all duration-300`}
            >
              Premium Package
            </button>
          </div>

          {/* Enroll Button */}
          <p className="text-center text-md font-medium text-[#334b94] ">
            Join before registrations close
          </p>
          <button
            onClick={handleOpenModal}
            className="px-8 py-3 rounded-full font-bold text-lg bg-[#334b94] text-white shadow-lg hover:shadow-xl hover:bg-[#2a3d7a] transition-all duration-300 transform hover:scale-105"
          >
            Enroll Now
          </button>
        </div>

        {/* Package Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-10">
          {packageDetails.map((info, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-white border border-[#ef9b15] shadow group hover:shadow-2xl transition-all text-center"
            >
              <p className="text-[#334b94] font-bold text-lg mb-1">{info.label}</p>
              <p className="text-[#ef9b15] font-semibold">{info.value}</p>
            </div>
          ))}
        </div>

        {/* Cards Grid */}
        <div
          className={`grid gap-8 ${
            activeTab === "advanced"
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow group hover:shadow-2xl border border-[#ef9b15] flex flex-col overflow-hidden transition-all hover:-translate-y-1"
            >
              <div className="relative w-full h-[200px] overflow-hidden">
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-full object-cover"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 88%, 0 100%)",
                  }}
                />
              </div>
              <div className="flex flex-col flex-1 px-4 py-3 items-center text-center">
                <h3 className="text-xl sm:text-xl font-bold mb-1 text-[#334b94]">
                  {course.title}
                </h3>
                <p className="text-gray-800 text-sm mb-3">{course.desc}</p>
                {!course.hideButton && (
                  <Link
                    to={course.link}
                    className="mt-auto px-5 py-2 rounded-full font-medium text-base bg-[#ef9b15] text-[#334b94] shadow hover:shadow-lg hover:bg-[#e38910] hover:text-white transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1"
                  >
                    Read More
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Enrollment Modal */}
        {openModal && (
          <div
            className="fixed inset-0 flex items-center justify-center p-4"
            style={{ zIndex: 999999 }}
          >
            <div
              className="absolute inset-0 bg-transparent"
              onClick={handleCloseModal}
            ></div>

            <div
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col animate-fadeIn relative"
              style={{ zIndex: 1000000 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-[#334b94] text-white px-6 py-4 flex justify-between items-center">
                <h2 className="text-2xl font-bold">Enroll in {packageType}</h2>
                <button
                  onClick={handleCloseModal}
                  className="text-white hover:bg-white/20 rounded-full p-2 transition-all duration-200"
                  aria-label="Close modal"
                >
                  <IoClose size={28} />
                </button>
              </div>

              <div className="overflow-y-auto flex-1 px-6 py-5">
                <div className="bg-[#fdf0d9] border-2 border-[#ef9b15] rounded-2xl p-5 mb-6">
                  <h3 className="text-xl font-bold text-[#334b94] mb-4 text-center">
                    Package Details
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {packageDetails.map((info, idx) => (
                      <div key={idx} className="space-y-1">
                        <p className="text-sm font-semibold text-[#334b94]">
                          {info.label}:
                        </p>
                        <p className="text-sm font-medium text-[#ef9b15]">
                          {info.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Payment Summary */}
                <div className="bg-[#fdf0d9] border-2 border-[#ef9b15] rounded-2xl p-5 mt-6">
                  <h3 className="text-lg font-bold text-[#334b94] mb-3 text-center">
                    Payment Summary
                  </h3>

                  <div className="space-y-2 text-sm text-[#334b94]">
                    <p>
                      Taxable Value:
                      <span className="font-semibold text-[#ef9b15]">
                        ₹{baseAmount.toLocaleString("en-IN")}
                      </span>
                    </p>

                    <p>
                      {activeTab === "advanced" ? "10% Discount:" : "25% Discount:"}
                      <span className="font-semibold text-green-600">
                        {" "}
                        - ₹{discount.toLocaleString("en-IN")}
                      </span>
                    </p>

                    <p>
                      After Discount:
                      <span className="font-semibold text-[#ef9b15]">
                        {" "}
                        ₹{discountedAmount.toLocaleString("en-IN")}
                      </span>
                    </p>

                    <p>
                      + 18% GST:
                      <span className="font-semibold text-[#ef9b15]">
                        {" "}
                        ₹{gst.toLocaleString("en-IN")}
                      </span>
                    </p>

                    <p className="text-lg font-bold text-[#334b94] border-t pt-2 mt-2 flex justify-between">
                      <span>Invoice Value:</span>
                      <span className="text-[#ef9b15]">
                        ₹{totalAmount.toLocaleString("en-IN")}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="border-t-2 border-gray-200 mb-6"></div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-[#334b94] mb-4">
                    Your Information
                  </h3>

                  {/* First Name and Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <IoPerson
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#334b94]"
                          size={20}
                        />
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-11 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#334b94] focus:ring-2 focus:ring-[#ef9b15] focus:ring-opacity-30 transition-all outline-none"
                          placeholder="First name"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <IoPerson
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#334b94]"
                          size={20}
                        />
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-11 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#334b94] focus:ring-2 focus:ring-[#ef9b15] focus:ring-opacity-30 transition-all outline-none"
                          placeholder="Last name"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <IoMail
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#334b94]"
                        size={20}
                      />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-11 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#334b94] focus:ring-2 focus:ring-[#ef9b15] focus:ring-opacity-30 transition-all outline-none"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="relative">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <IoCall
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#334b94]"
                        size={20}
                      />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        pattern="[0-9]{10}"
                        maxLength="10"
                                           className="w-full pl-11 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#334b94] focus:ring-2 focus:ring-[#ef9b15] focus:ring-opacity-30 transition-all outline-none"
                        placeholder="10-digit phone number"
                      />
                    </div>
                  </div>

                  {/* Father's Name and Mother's Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <label
                        htmlFor="fatherName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Father's Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fatherName"
                        name="fatherName"
                        value={formData.fatherName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#334b94] focus:ring-2 focus:ring-[#ef9b15] focus:ring-opacity-30 transition-all outline-none"
                        placeholder="Father's name"
                      />
                    </div>

                    <div className="relative">
                      <label
                        htmlFor="motherName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Mother's Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="motherName"
                        name="motherName"
                        value={formData.motherName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#334b94] focus:ring-2 focus:ring-[#ef9b15] focus:ring-opacity-30 transition-all outline-none"
                        placeholder="Mother's name"
                      />
                    </div>
                  </div>

                  {/* Course Name */}
                  <div className="relative">
                    <label
                      htmlFor="courseName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Course Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="courseName"
                      name="courseName"
                      value={formData.courseName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#334b94] focus:ring-2 focus:ring-[#ef9b15] focus:ring-opacity-30 transition-all outline-none"
                      placeholder="Enter course name"
                    />
                  </div>

                  {/* Qualification */}
                  <div className="relative">
                    <label
                      htmlFor="qualification"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Qualification <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="qualification"
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#334b94] focus:ring-2 focus:ring-[#ef9b15] focus:ring-opacity-30 transition-all outline-none"
                      placeholder="Enter your qualification"
                    />
                  </div>

                  {/* State and City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <label
                        htmlFor="state"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        State <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#334b94] focus:ring-2 focus:ring-[#ef9b15] focus:ring-opacity-30 transition-all outline-none"
                        placeholder="State"
                      />
                    </div>

                    <div className="relative">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        City <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#334b94] focus:ring-2 focus:ring-[#ef9b15] focus:ring-opacity-30 transition-all outline-none"
                        placeholder="City"
                      />
                    </div>
                  </div>

                  {/* Pincode */}
                  <div className="relative">
                    <label
                      htmlFor="pincode"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Pincode <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="pincode"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      required
                      pattern="[0-9]{6}"
                      maxLength={6}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#334b94] focus:ring-2 focus:ring-[#ef9b15] focus:ring-opacity-30 transition-all outline-none"
                      placeholder="6-digit pincode"
                    />
                  </div>

                  <div className="flex gap-3 pt-4 border-t-2 border-gray-200 mt-6">
                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="flex-1 px-6 py-3 border-2 border-[#334b94] text-[#334b94] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-6 py-3 bg-[#ef9b15] text-[#334b94] font-bold rounded-lg hover:bg-[#e38910] hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                    >
                      Proceed to Payment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Custom Success Alert Modal - Compact & Responsive */}
        {showSuccessAlert && (
          <div
            className="fixed inset-0 flex items-center justify-center p-3 sm:p-4"
            style={{ zIndex: 9999999 }}
          >
            {/* Transparent Backdrop */}
            <div
              className="absolute inset-0 bg-transparent"
              onClick={handleCloseSuccessAlert}
            ></div>

            {/* Compact Success Modal */}
            <div
              className="bg-white rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md overflow-hidden animate-scaleIn relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Success Header - Compact */}
              <div className="bg-gradient-to-r from-green-400 to-green-600 px-4 py-5 text-center">
                <div className="flex justify-center mb-3">
                  <div className="bg-white rounded-full p-2 animate-bounce">
                    <IoCheckmarkCircle className="text-green-600" size={48} />
                  </div>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  Payment Successful! 🎉
                </h2>
                <p className="text-green-50 text-sm">Your enrollment is confirmed</p>
              </div>

              {/* Payment Details - Compact */}
              <div className="px-4 py-4">
                <div className="space-y-3 mb-4">
                  {/* Package */}
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs text-gray-600 mb-1">Package</p>
                    <p className="text-base font-bold text-[#334b94]">
                      {paymentDetails.packageType}
                    </p>
                  </div>

                  {/* Amount Paid */}
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs text-gray-600 mb-1">Amount Paid</p>
                    <p className="text-xl font-bold text-[#ef9b15]">{paymentDetails.amount}</p>
                  </div>

                  {/* Payment ID */}
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs text-gray-600 mb-1">Payment ID</p>
                    <p className="text-xs font-mono text-gray-800 break-all">{paymentDetails.paymentId}</p>
                  </div>
                </div>

                {/* Confirmation Message */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                  <p className="text-xs text-blue-800 text-center flex items-center justify-center gap-1">
                    <IoCheckmarkCircle className="text-blue-600" size={16} />
                    Confirmation email has been sent
                  </p>
                </div>

                {/* Close Button */}
                <button
                  onClick={handleCloseSuccessAlert}
                  className="w-full px-4 py-3 bg-gradient-to-r from-[#334b94] to-[#2a3d7a] text-white font-bold rounded-xl hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default AllCourses;
