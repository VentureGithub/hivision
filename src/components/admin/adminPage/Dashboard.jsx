import React, { useState } from 'react';
import { FaBox, FaUsers, FaShoppingCart, FaChartLine, FaEye, FaFilter } from 'react-icons/fa';

const Dashboard = () => {
  const [orders] = useState([
    {
      id: 1,
      orderNumber: 'ORD001',
      userName: 'Rajesh Kumar',
      userPhone: '9876543210',
      productName: 'Banarasi Paan',
      quantity: 2,
      price: 150,
      total: 300,
      status: 'Delivered',
      orderDate: '2024-01-15',
      address: 'Lucknow, UP'
    },
    {
      id: 2,
      orderNumber: 'ORD002',
      userName: 'Priya Sharma',
      userPhone: '9876543211',
      productName: 'Meetha Paan',
      quantity: 3,
      price: 100,
      total: 300,
      status: 'Pending',
      orderDate: '2024-01-16',
      address: 'Delhi'
    },
    {
      id: 3,
      orderNumber: 'ORD003',
      userName: 'Amit Singh',
      userPhone: '9876543212',
      productName: 'Zarda Paan',
      quantity: 1,
      price: 200,
      total: 200,
      status: 'Processing',
      orderDate: '2024-01-16',
      address: 'Mumbai'
    },
    {
      id: 4,
      orderNumber: 'ORD004',
      userName: 'Sunita Devi',
      userPhone: '9876543213',
      productName: 'Special Paan',
      quantity: 4,
      price: 120,
      total: 480,
      status: 'Delivered',
      orderDate: '2024-01-17',
      address: 'Kanpur, UP'
    }
  ]);

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [filterStatus, setFilterStatus] = useState('All');

  const totalOrders = orders.length;
  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
  const uniqueUsers = [...new Set(orders.map(order => order.userName))].length;
  const pendingOrders = orders.filter(order => order.status === 'Pending').length;

  const filteredOrders = filterStatus === 'All'
    ? orders
    : orders.filter(order => order.status === filterStatus);

  const getStatusColor = (status) => {
    switch(status) {
      case 'Delivered': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Processing': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="">
      <div className="max-w-7xl mx-auto">

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center gap-4">
            <div className="p-3 rounded-full bg-blue-100">
              <FaShoppingCart className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Total Orders</p>
              <p className="text-2xl font-bold text-gray-900">{totalOrders}</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 flex items-center gap-4">
            <div className="p-3 rounded-full bg-green-100">
              <FaChartLine className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Total Products</p>
              <p className="text-2xl font-bold text-gray-900">{totalRevenue}</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 flex items-center gap-4">
            <div className="p-3 rounded-full bg-purple-100">
              <FaUsers className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">All Users</p>
              <p className="text-2xl font-bold text-gray-900">{uniqueUsers}</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 flex items-center gap-4">
            <div className="p-3 rounded-full bg-orange-100">
              <FaBox className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Pending Orders</p>
              <p className="text-2xl font-bold text-gray-900">{pendingOrders}</p>
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900">Recent Orders</h2>
            <div className="flex items-center space-x-2">
              <FaFilter className="h-4 w-4 text-gray-400" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm"
              >
                <option value="All">All Status</option>
                <option value="Pending">Pending</option>
                <option value="Processing">Processing</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {['Order ID','Customer Info','Product','Quantity','Total','Status','Date','Action'].map((th, idx) => (
                    <th key={idx} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{th}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredOrders.map(order => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{order.orderNumber}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <p className="text-sm font-medium text-gray-900">{order.userName}</p>
                      <p className="text-sm text-gray-500">{order.userPhone}</p>
                      <p className="text-xs text-gray-400">{order.address}</p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <p className="text-sm text-gray-900">{order.productName}</p>
                      <p className="text-sm text-gray-500">₹{order.price} each</p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.quantity}</td>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">₹{order.total}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.orderDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => setSelectedOrder(order)}
                        className="text-indigo-600 hover:text-indigo-900 flex items-center text-sm"
                      >
                        <FaEye className="h-4 w-4 mr-1" /> View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Order Detail Modal */}
        {selectedOrder && (
          <div className="fixed inset-0 bg-black/50 overflow-y-auto h-full w-full z-50 flex justify-center items-start pt-20">
            <div className="relative bg-white rounded-md shadow-lg w-96 p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">Order Details</h3>
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="text-gray-400 hover:text-gray-600"
                >✕</button>
              </div>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium">Order Number:</span> {selectedOrder.orderNumber}</p>
                <p><span className="font-medium">Customer:</span> {selectedOrder.userName}</p>
                <p><span className="font-medium">Phone:</span> {selectedOrder.userPhone}</p>
                <p><span className="font-medium">Product:</span> {selectedOrder.productName}</p>
                <p><span className="font-medium">Quantity:</span> {selectedOrder.quantity}</p>
                <p><span className="font-medium">Total Amount:</span> ₹{selectedOrder.total}</p>
                <p><span className="font-medium">Status:</span> 
                  <span className={`ml-2 px-2 py-1 text-xs rounded-full ${getStatusColor(selectedOrder.status)}`}>
                    {selectedOrder.status}
                  </span>
                </p>
                <p><span className="font-medium">Address:</span> {selectedOrder.address}</p>
                <p><span className="font-medium">Order Date:</span> {selectedOrder.orderDate}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Dashboard;
