import React from "react";
import { Pencil } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

function AddRestaurant() {
  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      <div className="w-full max-w-5xl mx-auto bg-white rounded-lg shadow p-6 sm:p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            Add New Restaurant
          </h1>
          <p className="text-sm text-gray-600">
            Fill in the details to add a new restaurant to the platform
          </p>
        </div>

        {/* Form */}
        <form>
          <div className="space-y-6">
            {/* Row 1: Circular Logo + Company Name + Owner Email */}
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Logo Upload - Circular */}
              <div className="flex-shrink-0">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Logo
                </label>
                <div className="relative w-32 h-32">
                  <div className="w-full h-full rounded-full border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center hover:border-gray-400 transition cursor-pointer overflow-hidden">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-1 bg-gray-200 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <span className="text-xs text-gray-500">Upload</span>
                    </div>
                  </div>

                  {/* Edit Icon - Bottom Right Corner */}
                  <button
                    type="button"
                    className="absolute bottom-0 right-0 w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition"
                  >
                    <Pencil size={16} />
                  </button>
                </div>
              </div>

              {/* Right Side Fields */}
              <div className="flex-1 grid sm:grid-cols-1 gap-4 sm:ml-7">
                {/* Company Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <Input placeholder="Enter company name" />
                </div>

                {/* Owner Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Owner Email <span className="text-red-500">*</span>
                  </label>
                  <Input type="email" placeholder="owner@email.com" />
                </div>
              </div>
            </div>

            {/* Row 2: City + Phone */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* City */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City <span className="text-red-500">*</span>
                </label>
                <Input placeholder="Enter city" />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <Input type="tel" placeholder="+1 (555) 000-0000" />
              </div>
            </div>

            {/* Row 3: Address + Commission */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <Input placeholder="Full address" />
              </div>

              {/* Commission */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Commission (%)
                </label>
                <Input type="number" placeholder="e.g. 20" />
              </div>
            </div>

            {/* Description - Full Width */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                placeholder="Brief description about the restaurant..."
                rows={4}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 mt-8 pt-6 border-t">
            <Button variant="outline" className="w-full sm:w-auto">
              Cancel
            </Button>
            <Button className="w-full sm:w-auto">Save Restaurant</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddRestaurant;
