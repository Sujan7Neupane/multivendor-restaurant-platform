import { Search, Plus, Eye, Ban, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Link from "next/link";

// Hardcoded for now
// TODO: fetch from db later
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

export default function AdminManagement() {
  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Admin Management
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Manage all restaurant admins and their permissions
          </p>
        </div>

        {/* Add Primary Admin Button */}
        <Link href={"/superadmin/admins/add"}>
          <Button Icon={Plus} className="w-full sm:w-auto">
            Add Primary Admin
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        {/* Search Input */}
        <Input
          placeholder="Search by name or email..."
          Icon={Search}
          className="sm:w-80"
        />

        {/* Role Filter */}
        <select className="w-full sm:w-auto px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white">
          <option>All Roles</option>
          <option>Primary Admin</option>
          <option>Secondary Admin</option>
        </select>

        {/* Status Filter */}
        <select className="w-full sm:w-auto px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white">
          <option>All Status</option>
          <option>Active</option>
          <option>Suspended</option>
        </select>
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block bg-white rounded-lg shadow overflow-hidden">
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
                    className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                      admin.role === "Primary Admin"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-purple-100 text-purple-700"
                    }`}
                  >
                    {admin.role}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-600">{admin.restaurant}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                      admin.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {admin.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-600">{admin.createdDate}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" Icon={Eye}>
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

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {admins.map((admin) => (
          <div key={admin.id} className="bg-white rounded-lg shadow p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{admin.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{admin.email}</p>
                <p className="text-sm text-gray-600 mt-1">{admin.restaurant}</p>
              </div>
              <span
                className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                  admin.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {admin.status}
              </span>
            </div>

            <div className="mb-3">
              <span
                className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                  admin.role === "Primary Admin"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-purple-100 text-purple-700"
                }`}
              >
                {admin.role}
              </span>
            </div>

            <p className="text-sm text-gray-500 mb-4">
              Created: {admin.createdDate}
            </p>

            <div className="flex gap-2">
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
    </div>
  );
}
