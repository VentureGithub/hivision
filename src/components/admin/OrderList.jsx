import React, { useEffect, useState } from "react";
import axios from "axios";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/order/all");
        setOrders(res.data.orders || []);
      } catch (err) {
        console.error("Error fetching orders:", err);
        setError("Failed to load orders");
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-lg font-semibold text-[#990000]">
        Loading Orders...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-lg text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="p-6 bg-[#fbf2f8] min-h-screen">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-semibold text-[#990000] mb-6 border-b pb-3">
          🧾 All Orders
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 text-sm">
            <thead className="bg-[#dc8e8e] text-white">
              <tr>
                <th className="py-2 px-4 text-left">#</th>
                <th className="py-2 px-4 text-left">User</th>
                <th className="py-2 px-4 text-left">Products</th>
                <th className="py-2 px-4 text-left">Subtotal</th>
                <th className="py-2 px-4 text-left">Tax</th>
                <th className="py-2 px-4 text-left">Discount</th>
                <th className="py-2 px-4 text-left">Total</th>
                <th className="py-2 px-4 text-left">Status</th>
                <th className="py-2 px-4 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr
                  key={order._id}
                  className="border-b hover:bg-[#fce8e8] transition"
                >
                  <td className="py-3 px-4">{index + 1}</td>
                  <td className="py-3 px-4">
                    <div>
                      <p className="font-medium">{order.userId?.fullName}</p>
                      <p className="text-xs text-gray-600">
                        {order.userId?.email}
                      </p>
                      <p className="text-xs text-gray-500">
                        📞 {order.userId?.mobile}
                      </p>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="space-y-1">
                      {order.products?.map((p, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 border-b border-gray-100 pb-1"
                        >
                          <img
                            src={`http://localhost:3001${p.productId?.img}`}
                            alt={p.productId?.name}
                            className="w-10 h-10 rounded-lg object-cover border"
                          />
                          <div>
                            <p className="font-medium text-gray-800">
                              {p.productId?.name}
                            </p>
                            <p className="text-xs text-gray-600">
                              Qty: {p.qty} × ₹{p.productId?.price}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="py-3 px-4 font-medium">₹{order.subtotal}</td>
                  <td className="py-3 px-4">₹{order.tax}</td>
                  <td className="py-3 px-4 text-red-600">₹{order.discount}</td>
                  <td className="py-3 px-4 font-semibold text-[#990000]">
                    ₹{order.total}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        order.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : order.status === "Confirmed"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-600 text-xs">
                    {new Date(order.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {orders.length === 0 && (
          <p className="text-center py-6 text-gray-600">
            No orders found yet 😕
          </p>
        )}
      </div>
    </div>
  );
};

export default OrderList;
