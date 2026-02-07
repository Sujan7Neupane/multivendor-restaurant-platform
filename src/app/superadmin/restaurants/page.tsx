"use client";
import {
  Search,
  Plus,
  ChevronDown,
  Eye,
  Ban,
  CheckCircle,
  X,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Link from "next/link";
import { useState } from "react";
import Modal from "../../../components/ui/Modal";

const restaurants = [
  {
    id: 1,
    name: "Pizza Palace",
    email: "owner@email.com",
    status: "Active",
    created: "2026-02-01",
  },
  {
    id: 2,
    name: "Burger Hub",
    email: "burger@hub.com",
    status: "Pending",
    created: "2026-02-02",
  },
  {
    id: 3,
    name: "Sushi Corner",
    email: "sushi@corner.com",
    status: "Suspended",
    created: "2026-01-30",
  },
];

const totalRestaurants = restaurants.length;
const activeRestaurants = restaurants.filter(
  (r) => r.status === "Active",
).length;
const pendingRestaurants = restaurants.filter(
  (r) => r.status === "Pending",
).length;
const suspendedRestaurants = restaurants.filter(
  (r) => r.status === "Suspended",
).length;

export default function Restaurants() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState<
    (typeof restaurants)[number] | null
  >(null);

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Restaurants</h1>
          <p className="text-sm text-gray-600 mt-1">
            Manage all restaurants and their subscriptions and expiries.
          </p>
        </div>
        <Link href="/superadmin/restaurants/add">
          <Button Icon={Plus} className="w-full sm:w-auto">
            Add Restaurant
          </Button>
        </Link>
      </div>

      {/* Dashboard Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center justify-center">
          <p className="text-sm text-gray-500">Total Restaurants</p>
          <p className="text-2xl font-semibold text-gray-800">
            {totalRestaurants}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center justify-center">
          <p className="text-sm text-gray-500">Active</p>
          <p className="text-2xl font-semibold text-green-700">
            {activeRestaurants}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center justify-center">
          <p className="text-sm text-gray-500">Pending</p>
          <p className="text-2xl font-semibold text-yellow-700">
            {pendingRestaurants}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center justify-center">
          <p className="text-sm text-gray-500">Suspended</p>
          <p className="text-2xl font-semibold text-red-700">
            {suspendedRestaurants}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <Input
          placeholder="Search restaurant..."
          Icon={Search}
          className="sm:w-80"
        />
        <div className="relative w-full sm:w-auto">
          <select className="w-full sm:w-auto pl-4 pr-10 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white appearance-none">
            <option>All Status</option>
            <option>Pending</option>
            <option>Active</option>
            <option>Suspended</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="px-4 py-3">Restaurant Name</th>
              <th className="px-4 py-3">Owner Email</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Created</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {restaurants.map((r) => (
              <tr key={r.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-800">
                  {r.name}
                </td>
                <td className="px-4 py-3 text-gray-600">{r.email}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2.5 py-1 text-xs font-medium rounded-full ${r.status === "Active" ? "bg-green-100 text-green-700" : r.status === "Pending" ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"}`}
                  >
                    {r.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-600">{r.created}</td>
                <td className="px-4 py-3 flex gap-2 flex-wrap">
                  {r.status === "Pending" && (
                    <Button variant="success" size="sm" Icon={CheckCircle}>
                      Approve
                    </Button>
                  )}
                  {r.status !== "Suspended" && (
                    <Button variant="danger" size="sm" Icon={Ban}>
                      Suspend
                    </Button>
                  )}
                  <Button
                    onClick={() => {
                      setSelectedRestaurant(r);
                      setIsModalOpen(true);
                    }}
                    variant="outline"
                    size="sm"
                    Icon={Eye}
                  >
                    View
                  </Button>
                  {r.status === "Pending" && (
                    <Button variant="danger" size="sm" Icon={X}>
                      Reject
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {restaurants.map((r) => (
          <div key={r.id} className="bg-white rounded-lg shadow p-4">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold text-gray-800">{r.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{r.email}</p>
              </div>
              <span
                className={`px-2.5 py-1 text-xs font-medium rounded-full ${r.status === "Active" ? "bg-green-100 text-green-700" : r.status === "Pending" ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"}`}
              >
                {r.status}
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-4">Created: {r.created}</p>
            <div className="grid grid-cols-2 gap-2">
              {r.status === "Pending" && (
                <Button variant="success" Icon={CheckCircle}>
                  Approve
                </Button>
              )}
              {r.status !== "Suspended" && (
                <Button variant="danger" Icon={Ban}>
                  Suspend
                </Button>
              )}
              <Button
                onClick={() => {
                  setSelectedRestaurant(r);
                  setIsModalOpen(true);
                }}
                variant="outline"
                size="sm"
                Icon={Eye}
              >
                View
              </Button>
              {r.status === "Pending" && (
                <Button variant="danger" Icon={X}>
                  Reject
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* View Restaurant Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Restaurant Details"
      >
        {selectedRestaurant && (
          <div className="space-y-4 text-sm">
            {/* Restaurant Name */}
            <div>
              <p className="text-gray-500">Restaurant Name</p>
              <p className="font-medium text-gray-800">
                {selectedRestaurant.name}
              </p>
            </div>

            {/* Owner Email */}
            <div>
              <p className="text-gray-500">Owner Email</p>
              <p className="font-medium text-gray-800">
                {selectedRestaurant.email}
              </p>
            </div>

            {/* Status */}
            <div>
              <p className="text-gray-500">Status</p>
              <span
                className={`inline-block mt-1 px-2.5 py-1 rounded-full text-xs font-medium ${
                  selectedRestaurant.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : selectedRestaurant.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                }`}
              >
                {selectedRestaurant.status}
              </span>
            </div>

            {/* Created Date */}
            <div>
              <p className="text-gray-500">Created On</p>
              <p className="font-medium text-gray-800">
                {selectedRestaurant.created}
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4">
              {selectedRestaurant.status !== "Active" && (
                <Button variant="success" className="flex-1" Icon={CheckCircle}>
                  Activate
                </Button>
              )}

              {selectedRestaurant.status === "Active" && (
                <Button variant="danger" className="flex-1" Icon={Ban}>
                  Suspend
                </Button>
              )}

              <Button
                onClick={() => setIsModalOpen(false)}
                variant="outline"
                className="flex-1"
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
        <span>Showing 1–{restaurants.length} orders</span>
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
