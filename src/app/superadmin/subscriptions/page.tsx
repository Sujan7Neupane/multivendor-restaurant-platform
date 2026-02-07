"use client";

import { useState } from "react";
import {
  Plus,
  Edit,
  Power,
  Check,
  Search,
  ChevronDown,
  X,
  Save,
} from "lucide-react";
import { useForm } from "react-hook-form";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Modal from "@/components/ui/Modal";

type PlanFormValues = {
  name: string;
  price: number;
  maxOrders?: number;
  active: boolean;
};

// Sample data
// TODO: will be fetching from backend
const plans = [
  { id: 1, name: "Basic", price: 10, maxOrders: 100, status: "Active" },
  { id: 2, name: "Pro", price: 20, maxOrders: 200, status: "Inactive" },
  { id: 3, name: "Enterprise", price: 50, maxOrders: 500, status: "Active" },
];

const restaurants = [
  {
    id: 1,
    name: "Pizza Palace",
    currentPlan: "Pro",
    status: "Active",
  },
  {
    id: 2,
    name: "Burger House",
    currentPlan: "Basic",
    status: "Inactive",
  },
];

export default function SubscriptionManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PlanFormValues>({
    defaultValues: {
      active: true,
    },
  });

  const onSubmit = (data: PlanFormValues) => {
    console.log("Plan Data:", data);

    // TODO: API call here

    setIsModalOpen(false);
    reset();
    alert("Plan created successfully!");
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Subscription Management
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Manage subscription plans and restaurant subscriptions
          </p>
        </div>

        {/* Add New Plan Button */}
        <Button
          Icon={Plus}
          onClick={() => setIsModalOpen(true)}
          className="w-full sm:w-auto"
        >
          Add New Plan
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        {/* Search Input */}
        <Input
          placeholder="Search by plan or restaurant name..."
          Icon={Search}
          className="sm:w-80"
        />

        {/* Plan Type Filter */}
        <div className="relative w-full sm:w-auto">
          <select className="w-full sm:w-auto pl-4 pr-10 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white appearance-none">
            <option>All Plans</option>
            <option>Basic</option>
            <option>Pro</option>
            <option>Enterprise</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>

        {/* Status Filter */}
        <div className="relative w-full sm:w-auto">
          <select className="w-full sm:w-auto pl-4 pr-10 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white appearance-none">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Plans Table */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Subscription Plans
        </h2>

        {/* Desktop Table */}
        <div className="hidden md:block bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Max Orders</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {plans.map((plan) => (
                <tr key={plan.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-800">
                    {plan.name}
                  </td>
                  <td className="px-4 py-3 text-gray-600">${plan.price}</td>
                  <td className="px-4 py-3 text-gray-600">{plan.maxOrders}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                        plan.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {plan.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <Button
                        onClick={() => {
                          setIsEditModalOpen(true);
                        }}
                        variant="outline"
                        size="sm"
                        Icon={Edit}
                      >
                        Edit
                      </Button>
                      <Button
                        variant={
                          plan.status === "Active" ? "danger" : "success"
                        }
                        size="sm"
                        Icon={Power}
                      >
                        {plan.status === "Active" ? "Deactivate" : "Activate"}
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {plans.map((plan) => (
            <div key={plan.id} className="bg-white rounded-lg shadow p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-gray-800">{plan.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    ${plan.price} • {plan.maxOrders} orders
                  </p>
                </div>
                <span
                  className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                    plan.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {plan.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <Button
                  onClick={() => {
                    setIsEditModalOpen(true);
                  }}
                  variant="outline"
                  Icon={Edit}
                >
                  Edit
                </Button>
                <Button
                  variant={plan.status === "Active" ? "danger" : "success"}
                  Icon={Power}
                >
                  {plan.status === "Active" ? "Deactivate" : "Activate"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Restaurant Subscriptions Table */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Restaurant Subscriptions
        </h2>

        {/* Desktop Table */}
        <div className="hidden md:block bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="px-4 py-3">Restaurant</th>
                <th className="px-4 py-3">Current Plan</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {restaurants.map((restaurant) => (
                <tr key={restaurant.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-800">
                    {restaurant.name}
                  </td>
                  <td className="px-4 py-3">
                    <select className="px-3 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                      <option>{restaurant.currentPlan}</option>
                      <option>Basic</option>
                      <option>Pro</option>
                      <option>Enterprise</option>
                    </select>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                        restaurant.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {restaurant.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <Button variant="outline" size="sm" Icon={Check}>
                      Save
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {restaurants.map((restaurant) => (
            <div key={restaurant.id} className="bg-white rounded-lg shadow p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {restaurant.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Plan: {restaurant.currentPlan}
                  </p>
                </div>
                <span
                  className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                    restaurant.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {restaurant.status}
                </span>
              </div>

              <div className="space-y-3">
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                  <option>{restaurant.currentPlan}</option>
                  <option>Basic</option>
                  <option>Pro</option>
                  <option>Enterprise</option>
                </select>

                <Button variant="outline" Icon={Check} className="w-full">
                  Save Changes
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add New Plan Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Plan"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            {/* Plan Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Plan Name <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                placeholder="Enter plan name"
                {...register("name", { required: "Plan name is required" })}
              />
              {errors.name && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price <span className="text-red-500">*</span>
              </label>
              <Input
                type="number"
                placeholder="Enter price"
                {...register("price", {
                  required: "Price is required",
                  min: { value: 1, message: "Price must be greater than 0" },
                })}
              />
              {errors.price && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.price.message}
                </p>
              )}
            </div>

            {/* Max Orders */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Max Orders (optional)
              </label>
              <Input
                type="number"
                placeholder="Enter max orders"
                {...register("maxOrders", {
                  min: { value: 1, message: "Must be at least 1" },
                })}
              />
              {errors.maxOrders && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.maxOrders.message}
                </p>
              )}
            </div>

            {/* Active Toggle */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                {...register("active")}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm font-medium text-gray-700">Active</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-6">
            <Button
              variant="outline"
              onClick={() => setIsModalOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              Save Plan
            </Button>
          </div>
        </form>
      </Modal>

      {/* Edit Plan Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Edit Plan"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            {/* Plan Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Plan Name <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                placeholder="Enter plan name"
                {...register("name", { required: "Plan name is required" })}
              />
              {errors.name && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price <span className="text-red-500">*</span>
              </label>
              <Input
                type="number"
                placeholder="Enter price"
                {...register("price", {
                  required: "Price is required",
                  min: { value: 1, message: "Price must be greater than 0" },
                })}
              />
              {errors.price && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.price.message}
                </p>
              )}
            </div>

            {/* Max Orders */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Max Orders (optional)
              </label>
              <Input
                type="number"
                placeholder="Enter max orders"
                {...register("maxOrders", {
                  min: { value: 1, message: "Must be at least 1" },
                })}
              />
              {errors.maxOrders && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.maxOrders.message}
                </p>
              )}
            </div>

            {/* Active Toggle */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                {...register("active")}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm font-medium text-gray-700">Active</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-6">
            <Button
              variant="outline"
              onClick={() => setIsEditModalOpen(false)}
              className="flex-1"
              Icon={X}
            >
              Cancel
            </Button>
            <Button type="submit" className="flex-1" Icon={Save}>
              Update Plan
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
