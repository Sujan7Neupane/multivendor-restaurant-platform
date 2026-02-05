import { Upload, Pencil } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

// Sample restaurants (in real app, fetch from database)
const restaurants = [
  { id: 1, name: "Pizza Palace" },
  { id: 2, name: "Burger Hub" },
  { id: 3, name: "Sushi World" },
  { id: 4, name: "Taco Town" },
];

export default function AddPrimaryAdmin() {
  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      <div className="w-full bg-white rounded-lg shadow p-6 sm:p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            Add Primary Admin
          </h1>
          <p className="text-sm text-gray-600">
            Create a primary admin (owner) for a restaurant
          </p>
        </div>

        {/* Form */}
        <form>
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Admin Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Admin Name <span className="text-red-500">*</span>
              </label>
              <Input placeholder="Enter admin name" />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <Input type="email" placeholder="admin@email.com" />
            </div>

            {/* Restaurant Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Restaurant <span className="text-red-500">*</span>
              </label>
              <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white">
                <option value="">-- Select a restaurant --</option>
                {restaurants.map((restaurant) => (
                  <option key={restaurant.id} value={restaurant.id}>
                    {restaurant.name}
                  </option>
                ))}
              </select>
              <p className="text-xs text-gray-500 mt-1">
                Note: Only one primary admin per restaurant is allowed
              </p>
            </div>

            {/* Role Info Box - Full Width */}
            <div className="sm:col-span-2 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-blue-800 mb-2">
                Role Information
              </h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• This admin will be assigned as Primary Admin (Owner)</li>
                <li>• Full access to restaurant management</li>
                <li>• Can create secondary admins for their restaurant</li>
              </ul>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-8 pt-6 border-t">
            <Button variant="outline">Cancel</Button>
            <Button>Create Primary Admin</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
