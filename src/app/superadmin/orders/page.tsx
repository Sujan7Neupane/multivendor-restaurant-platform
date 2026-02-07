"use client";
import { Search, Eye, X } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useState } from "react";
import Modal from "../../../components/ui/Modal";

// Hardcoded orders (read-only)
// TODO: replace with API + server-side pagination
const orders = [
  {
    id: "ORD-1001",
    restaurant: "Pizza Palace",
    customer: "CUST-01",
    amount: 450,
    status: "Pending",
    payment: "Paid",
    date: "2026-02-01 13:20",
  },
  {
    id: "ORD-1002",
    restaurant: "Burger Hub",
    customer: "CUST-02",
    amount: 820,
    status: "Preparing",
    payment: "Paid",
    date: "2026-02-01 14:05",
  },
  {
    id: "ORD-1003",
    restaurant: "Pizza Palace",
    customer: "CUST-03",
    amount: 299,
    status: "Delivered",
    payment: "Paid",
    date: "2026-01-30 19:40",
  },
  {
    id: "ORD-1004",
    restaurant: "Burger Hub",
    customer: "CUST-04",
    amount: 510,
    status: "Cancelled",
    payment: "Refunded",
    date: "2026-01-29 21:10",
  },
];

const statusStyles: any = {
  Pending: "bg-yellow-100 text-yellow-700",
  Preparing: "bg-blue-100 text-blue-700",
  "On the way": "bg-indigo-100 text-indigo-700",
  Delivered: "bg-green-100 text-green-700",
  Cancelled: "bg-red-100 text-red-700",
};

export default function OrderMonitoring() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [individualOrder, setIndividualOrder] = useState<
    (typeof orders)[number] | null
  >(null);
  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Order Monitoring
        </h1>
        <p className="text-sm text-gray-600 mt-1">
          View all orders across all restaurants (read-only)
        </p>
      </div>

      {/* Revenue Snapshot (Optional MVP+) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-sm text-gray-500">Total Orders</p>
          <p className="text-2xl font-semibold text-gray-800 mt-1">
            {orders.length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-sm text-gray-500">Total Revenue</p>
          <p className="text-2xl font-semibold text-gray-800 mt-1">
            Rs. {orders.reduce((sum, o) => sum + o.amount, 0)}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <Input
          placeholder="Search by Order ID or Customer..."
          Icon={Search}
          className="sm:w-80"
        />

        <select className="w-full sm:w-auto px-4 py-2.5 border border-gray-300 rounded-lg text-sm bg-white">
          <option>All Restaurants</option>
          <option>Pizza Palace</option>
          <option>Burger Hub</option>
        </select>

        <select className="w-full sm:w-auto px-4 py-2.5 border border-gray-300 rounded-lg text-sm bg-white">
          <option>All Status</option>
          <option>Pending</option>
          <option>Preparing</option>
          <option>On the way</option>
          <option>Delivered</option>
          <option>Cancelled</option>
        </select>

        <select className="w-full sm:w-auto px-4 py-2.5 border border-gray-300 rounded-lg text-sm bg-white">
          <option>Today</option>
          <option>Last 7 days</option>
          <option>Custom range</option>
        </select>
      </div>

      {/* Orders Table */}
      <div className="hidden md:block bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="px-4 py-3">Order ID</th>
              <th className="px-4 py-3">Restaurant</th>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Payment</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-800">
                  {order.id}
                </td>
                <td className="px-4 py-3 text-gray-600">{order.restaurant}</td>
                <td className="px-4 py-3 text-gray-600">{order.customer}</td>
                <td className="px-4 py-3 text-gray-800 font-medium">
                  Rs. {order.amount}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2.5 py-1 text-xs font-medium rounded-full ${statusStyles[order.status]}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-600">{order.payment}</td>
                <td className="px-4 py-3 text-gray-600">{order.date}</td>
                <td className="px-4 py-3">
                  <Button
                    onClick={() => {
                      setIsModalOpen(true);
                      setIndividualOrder(order);
                    }}
                    variant="outline"
                    size="sm"
                    Icon={Eye}
                  >
                    View
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="md:hidden space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-gray-800">{order.id}</h3>
                <p className="text-sm text-gray-600 mt-1">{order.restaurant}</p>
                <p className="text-sm text-gray-600">
                  Customer: {order.customer}
                </p>
              </div>
              <span
                className={`px-2.5 py-1 text-xs font-medium rounded-full ${statusStyles[order.status]}`}
              >
                {order.status}
              </span>
            </div>

            <p className="text-sm text-gray-700 font-medium mb-1">
              Amount: Rs. {order.amount}
            </p>
            <p className="text-sm text-gray-500 mb-3">
              {order.date} • {order.payment}
            </p>

            <Button
              onClick={() => {
                setIsModalOpen(true);
                setIndividualOrder(order);
              }}
              variant="outline"
              className="w-full"
              Icon={Eye}
            >
              View
            </Button>
          </div>
        ))}
      </div>

      {/* View Order Modal  */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Order Details"
      >
        {individualOrder && (
          <div className="space-y-4 text-sm">
            {/* Order ID */}
            <div>
              <p className="text-gray-500 mb-1">Order ID</p>
              <p className="font-medium text-gray-800">{individualOrder.id}</p>
            </div>

            {/* Ordered Restaurant */}
            <div>
              <p className="text-gray-500 mb-1">Ordered Restaurant</p>
              <p className="font-medium text-gray-800">
                {individualOrder.restaurant}
              </p>
            </div>

            {/* Customer ID */}
            <div>
              <p className="text-gray-500 mb-1">Customer ID</p>
              <p className="font-medium text-gray-800">
                {individualOrder.customer}
              </p>
            </div>

            {/* Status */}
            <div>
              <p className="text-gray-500 mb-1">Status</p>
              <p
                className={`inline-block px-2.5 py-1 text-xs font-medium rounded-full ${statusStyles[individualOrder.status]}`}
              >
                {individualOrder.status}
              </p>
            </div>

            {/* Amount */}
            <div>
              <p className="text-gray-500 mb-1">Amount</p>
              <p className="font-medium text-gray-800">
                Rs. {individualOrder.amount}
              </p>
            </div>

            {/* Date */}
            <div>
              <p className="text-gray-500 mb-1">Payment</p>
              <p className="font-medium text-gray-800">
                {individualOrder.payment}
              </p>
            </div>

            {/* Date */}
            <div>
              <p className="text-gray-500 mb-1">Date and Time</p>
              <p className="font-medium text-gray-800">
                {individualOrder.date}
              </p>
            </div>

            <Button
              variant="outline"
              className="flex-1 w-full"
              onClick={() => setIsModalOpen(false)}
              Icon={X}
            >
              Close
            </Button>
          </div>
        )}
      </Modal>

      {/* Pagination Placeholder */}
      <div className="mt-6 flex justify-between items-center text-sm text-gray-600">
        <span>Showing 1–{orders.length} orders</span>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Prev
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
