import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaStar, FaUtensils } from "react-icons/fa";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/products/all");
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-[#fbf2f8] py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-[#990000] mb-10 flex items-center justify-center gap-2">
        <FaUtensils className="text-[#d76666]" /> Our Products
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 border-t-4 border-[#990000]"
            >
              <img
                src={`http://localhost:3001${product.img}`}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#990000] mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.description}</p>

                <div className="flex flex-wrap gap-2 mb-2">
                  {product.category.map((cat, i) => (
                    <span
                      key={i}
                      className="bg-[#dc8e8e] text-white text-xs px-2 py-1 rounded-full"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-2">
                  {product.day.map((d, i) => (
                    <span
                      key={i}
                      className="bg-[#fbf2f8] border border-[#d76666] text-[#990000] text-xs px-2 py-1 rounded-full"
                    >
                      {d}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-3">
                  <span className="text-lg font-semibold text-[#d76666]">₹{product.price}</span>
                  <span className="flex items-center gap-1 text-yellow-500 font-medium">
                    <FaStar /> {product.rating}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 text-lg col-span-full">
            No products available.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
