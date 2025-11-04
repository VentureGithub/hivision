import React, { useState } from "react";
import axios from "axios";
import {
  FaUtensils,
  FaRupeeSign,
  FaListAlt,
  FaCalendarAlt,
  FaImage,
  FaInfoCircle,
} from "react-icons/fa";

const ProductAddForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    img: null,
    price: "",
    description: "",
    category: [],
    rating: "",
    day: [],
  });

  const categories = ["All", "Main Course", "Snacks", "Drinks"];
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  // Handle text and number input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image upload
  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, img: e.target.files[0] }));
  };

  // Handle checkbox select for category/day
  const handleCheckbox = (e, key) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const updatedArray = checked
        ? [...prev[key], value]
        : prev[key].filter((item) => item !== value);
      return { ...prev, [key]: updatedArray };
    });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("price", formData.price);
      data.append("description", formData.description);
      data.append("rating", formData.rating);
      data.append("img", formData.img);

      // Convert arrays to JSON strings for backend parsing
      data.append("category", JSON.stringify(formData.category));
      data.append("day", JSON.stringify(formData.day));

      const res = await axios.post("http://localhost:3001/api/products/add", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("✅ Product Added Successfully!");
      console.log(res.data);

      setFormData({
        name: "",
        img: null,
        price: "",
        description: "",
        category: [],
        rating: "",
        day: [],
      });
    } catch (error) {
      console.error("Error adding product:", error);
      alert("❌ Error adding product!");
    }
  };

  return (
    <div className="min-h-screen bg-[#fbf2f8] flex items-center justify-center py-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#990000]"
      >
        <h2 className="text-2xl font-bold text-[#990000] text-center mb-6">
          🍽️ Add New Product
        </h2>

        {/* Product Name */}
        <div className="mb-4">
          <label className=" text-[#990000] font-semibold mb-2 flex items-center gap-2">
            <FaUtensils /> Product Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter product name"
            className="w-full border border-[#dc8e8e] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#d76666]"
          />
        </div>

        {/* Image Upload */}
        <div className="mb-4">
          <label className=" text-[#990000] font-semibold mb-2 flex items-center gap-2">
            <FaImage /> Upload Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full border border-[#dc8e8e] rounded-lg p-2 bg-[#fbf2f8] cursor-pointer"
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className=" text-[#990000] font-semibold mb-2 flex items-center gap-2">
            <FaRupeeSign /> Price
          </label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="e.g. ₹40"
            className="w-full border border-[#dc8e8e] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#d76666]"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className=" text-[#990000] font-semibold mb-2 flex items-center gap-2">
            <FaInfoCircle /> Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Write product description..."
            className="w-full border border-[#dc8e8e] rounded-lg p-2 h-24 focus:outline-none focus:ring-2 focus:ring-[#d76666]"
          />
        </div>

        {/* Category Checkboxes */}
        <div className="mb-4">
          <label className=" text-[#990000] font-semibold mb-2 flex items-center gap-2">
            <FaListAlt /> Category
          </label>
          <div className="grid grid-cols-2 gap-2">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={cat}
                  checked={formData.category.includes(cat)}
                  onChange={(e) => handleCheckbox(e, "category")}
                  className="accent-[#d76666]"
                />
                <span>{cat}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Rating */}
        <div className="mb-4">
          <label className=" text-[#990000] font-semibold mb-2 flex items-center gap-2">
            ⭐ Rating
          </label>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            step="0.1"
            min="0"
            max="5"
            placeholder="e.g. 4.5"
            className="w-full border border-[#dc8e8e] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#d76666]"
          />
        </div>

        {/* Days Checkboxes */}
        <div className="mb-6">
          <label className=" text-[#990000] font-semibold mb-2 flex items-center gap-2">
            <FaCalendarAlt /> Available Days
          </label>
          <div className="grid grid-cols-2 gap-2">
            {days.map((d) => (
              <label key={d} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={d}
                  checked={formData.day.includes(d)}
                  onChange={(e) => handleCheckbox(e, "day")}
                  className="accent-[#d76666]"
                />
                <span>{d}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#990000] text-white py-2 rounded-lg font-semibold hover:bg-[#d76666] transition duration-300"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductAddForm;
