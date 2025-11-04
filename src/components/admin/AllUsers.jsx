import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaUser, FaEnvelope, FaPhoneAlt, FaUserTag } from "react-icons/fa";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/users/all");
        setUsers(res.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <section className="min-h-screen bg-[#fbf2f8] flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-extrabold text-[#990000] mb-10 text-center">
        👥 All Registered Users
      </h1>

      <div className="bg-white shadow-2xl rounded-3xl border border-[#d76666]/30 w-full max-w-6xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-[#990000] text-white text-sm uppercase">
              <tr>
                <th className="py-4 px-6 text-left">#</th>
                <th className="py-4 px-6 text-left">Full Name</th>
                <th className="py-4 px-6 text-left">Mobile</th>
                <th className="py-4 px-6 text-left">Email</th>
                <th className="py-4 px-6 text-left">User Type</th>
                <th className="py-4 px-6 text-left">Registered On</th>
              </tr>
            </thead>

            <tbody>
              {users.length > 0 ? (
                users.map((user, index) => (
                  <tr
                    key={user._id}
                    className={`${
                      index % 2 === 0 ? "bg-[#fff8fa]" : "bg-white"
                    } hover:bg-[#ffe9ef] transition-all border-b border-[#f4c6c6]`}
                  >
                    <td className="py-3 px-6 text-gray-600 text-sm font-medium">
                      {index + 1}
                    </td>
                    <td className="py-3 px-6 text-[#990000] font-semibold flex items-center gap-2">
                      <FaUser className="text-[#d76666]" /> {user.fullName}
                    </td>
                    <td className="py-3 px-6 text-gray-700 flex items-center gap-2">
                      <FaPhoneAlt className="text-[#dc8e8e]" /> {user.mobile}
                    </td>
                    <td className="py-3 px-6 text-gray-700 flex items-center gap-2">
                      <FaEnvelope className="text-[#d76666]" /> {user.email}
                    </td>
                    <td className="py-3 px-6 text-[#990000] font-semibold flex items-center gap-2">
                      <FaUserTag className="text-[#dc8e8e]" /> {user.userType}
                    </td>
                    <td className="py-3 px-6 text-gray-600 text-sm">
                      {new Date(user.createdAt).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center py-8 text-[#990000] font-medium text-lg"
                  >
                    No users found 😢
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AllUsers;
