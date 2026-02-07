"use client";

import { Search, Plus, Eye, Ban, CheckCircle, X } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Link from "next/link";
import { useState } from "react";
import Modal from "../../../components/ui/Modal";

// hardcoded data -- will be added later
const admins = [
  {
    id: 1,
    name: "John Doe",
    email: "john@pizzapalace.com",
    role: "Primary Admin",
    restaurant: "Pizza Palace",
    status: "Active",
    createdDate: "2026-01-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@pizzapalace.com",
    role: "Secondary Admin",
    restaurant: "Pizza Palace",
    status: "Active",
    createdDate: "2026-01-20",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@burgerhub.com",
    role: "Primary Admin",
    restaurant: "Burger Hub",
    status: "Suspended",
    createdDate: "2026-01-10",
  },
  {
    id: 4,
    name: "Sarah Williams",
    email: "sarah@burgerhub.com",
    role: "Secondary Admin",
    restaurant: "Burger Hub",
    status: "Active",
    createdDate: "2026-01-25",
  },
];

const totalAdmins = admins.length;
const primaryAdminsCount = admins.filter(
  (a) => a.role === "Primary Admin",
).length;
const secondaryAdminsCount = admins.filter(
  (a) => a.role === "Secondary Admin",
).length;

export default function AdminManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [individualAdmin, setIndividualAdmin] = useState<
    (typeof admins)[number] | null
  >(null);
  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Admin Management
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Manage all restaurant admins and their permissions
          </p>
        </div>
        <Link href="/superadmin/admins/add">
          <Button Icon={Plus} className="w-full sm:w-auto">
            Add Primary Admin
          </Button>
        </Link>
      </div>

      {/* Admin Summary at top */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center justify-center">
          <p className="text-sm text-gray-500">Total Admins</p>
          <p className="text-2xl font-semibold text-gray-800">{totalAdmins}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center justify-center">
          <p className="text-sm text-gray-500">Primary Admins</p>
          <p className="text-2xl font-semibold text-blue-700">
            {primaryAdminsCount}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center justify-center">
          <p className="text-sm text-gray-500">Secondary Admins</p>
          <p className="text-2xl font-semibold text-purple-700">
            {secondaryAdminsCount}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <Input
          placeholder="Search by name or email..."
          Icon={Search}
          className="md:w-80"
        />
        <select className="w-full md:w-auto px-4 py-2.5 border border-gray-300 rounded-lg text-sm bg-white">
          <option>All Roles</option>
          <option>Primary Admin</option>
          <option>Secondary Admin</option>
        </select>
        <select className="w-full md:w-auto px-4 py-2.5 border border-gray-300 rounded-lg text-sm bg-white">
          <option>All Status</option>
          <option>Active</option>
          <option>Suspended</option>
        </select>
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="px-4 py-3">Admin Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3">Restaurant</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Created Date</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {admins.map((admin) => (
              <tr key={admin.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-800">
                  {admin.name}
                </td>
                <td className="px-4 py-3 text-gray-600">{admin.email}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2.5 py-1 text-xs font-medium rounded-full ${admin.role === "Primary Admin" ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700"}`}
                  >
                    {admin.role}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-600">{admin.restaurant}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2.5 py-1 text-xs font-medium rounded-full ${admin.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                  >
                    {admin.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-600">{admin.createdDate}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-2 flex-wrap">
                    <Button
                      onClick={() => {
                        setIsModalOpen(true);
                        setIndividualAdmin(admin);
                      }}
                      variant="outline"
                      size="sm"
                      Icon={Eye}
                    >
                      View
                    </Button>
                    {admin.status === "Active" ? (
                      <Button variant="danger" size="sm" Icon={Ban}>
                        Suspend
                      </Button>
                    ) : (
                      <Button variant="success" size="sm" Icon={CheckCircle}>
                        Activate
                      </Button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* iPad / Tablet Card View */}
      <div className="hidden md:block lg:hidden space-y-4">
        {admins.map((admin) => (
          <div
            key={admin.id}
            className="bg-white rounded-lg shadow p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">{admin.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{admin.email}</p>
              <p className="text-sm text-gray-600 mt-1">{admin.restaurant}</p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <span
                className={`px-2.5 py-1 text-xs font-medium rounded-full ${admin.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
              >
                {admin.status}
              </span>
              <span
                className={`px-2.5 py-1 text-xs font-medium rounded-full ${admin.role === "Primary Admin" ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700"}`}
              >
                {admin.role}
              </span>
            </div>
            <div className="flex gap-2 flex-wrap mt-2 md:mt-0">
              <Button variant="outline" className="flex-1" Icon={Eye}>
                View
              </Button>
              {admin.status === "Active" ? (
                <Button variant="danger" className="flex-1" Icon={Ban}>
                  Suspend
                </Button>
              ) : (
                <Button variant="success" className="flex-1" Icon={CheckCircle}>
                  Activate
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {admins.map((admin) => (
          <div key={admin.id} className="bg-white rounded-lg shadow p-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{admin.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{admin.email}</p>
                <p className="text-sm text-gray-600 mt-1">{admin.restaurant}</p>
              </div>
              <div className="flex gap-2 flex-wrap mt-2 sm:mt-0 items-center">
                <span
                  className={`px-2.5 py-1 text-xs font-medium rounded-full ${admin.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                >
                  {admin.status}
                </span>
                <span
                  className={`px-2.5 py-1 text-xs font-medium rounded-full ${admin.role === "Primary Admin" ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700"}`}
                >
                  {admin.role}
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-3">
              Created: {admin.createdDate}
            </p>
            <div className="flex gap-2 flex-wrap">
              <Button
                onClick={() => {
                  setIsModalOpen(true);
                  setIndividualAdmin(admin);
                }}
                variant="outline"
                className="flex-1"
                Icon={Eye}
              >
                View
              </Button>
              {admin.status === "Active" ? (
                <Button variant="danger" className="flex-1" Icon={Ban}>
                  Suspend
                </Button>
              ) : (
                <Button variant="success" className="flex-1" Icon={CheckCircle}>
                  Activate
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* View Individual Admin Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Admin Details"
      >
        {individualAdmin && (
          <div className="space-y-4 text-sm">
            {/* Restaurant Name */}
            <div>
              <p className="text-gray-500">Admin Name</p>
              <p className="font-medium text-gray-800">
                {individualAdmin.name}
              </p>
            </div>

            {/* Admin Email */}
            <div>
              <p className="text-gray-500">Admin Email</p>
              <p className="font-medium text-gray-800">
                {individualAdmin.email}
              </p>
            </div>

            <div>
              <p className="text-gray-500">Restaurant Name</p>
              <p className="font-medium text-gray-800">
                {individualAdmin.restaurant}
              </p>
            </div>

            {/* Admin Type */}
            <div>
              <p className="text-gray-500">Role</p>
              <p
                className={`inline-block px-2.5 py-1 text-xs font-medium rounded-full ${individualAdmin.role === "Primary Admin" ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700"} `}
              >
                {individualAdmin.role}
              </p>
            </div>

            {/* Status */}
            <div>
              <p className="text-gray-500">Status</p>
              <span
                className={`inline-block mt-1 px-2.5 py-1 rounded-full text-xs font-medium ${
                  individualAdmin.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : individualAdmin.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                }`}
              >
                {individualAdmin.status}
              </span>
            </div>

            {/* Created Date */}
            <div>
              <p className="text-gray-500">Created On</p>
              <p className="font-medium text-gray-800">
                {individualAdmin.createdDate}
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4">
              {individualAdmin.status !== "Active" && (
                <Button variant="success" className="flex-1" Icon={CheckCircle}>
                  Activate
                </Button>
              )}

              {individualAdmin.status === "Active" && (
                <Button variant="danger" className="flex-1" Icon={Ban}>
                  Suspend
                </Button>
              )}

              <Button
                variant="outline"
                className="flex-1"
                onClick={() => setIsModalOpen(false)}
                Icon={X}
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </Modal>

      {/* Pagination Placeholder */}
      <div className="mt-6 flex justify-between items-center text-sm text-gray-600">
        <span>Showing 1–{admins.length} orders</span>
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
