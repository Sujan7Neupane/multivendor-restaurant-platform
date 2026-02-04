import { Search, Plus, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Link from "next/link";

export default function Restaurants() {
  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Restaurants</h1>

        {/* Add Restaurant Button */}
        <Link href={"/superadmin/restaurants/add"}>
          <Button Icon={Plus} className="w-full sm:w-auto">
            Add Restaurant
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        {/* Search Input */}
        <div className="relative w-full sm:w-80">
          <Input
            placeholder="Search restaurant..."
            Icon={Search}
            className="sm:w-80"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>

        {/* Status Filter */}
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
            {/* Restaurant 1 - Active */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 font-medium text-gray-800">
                Pizza Palace
              </td>
              <td className="px-4 py-3 text-gray-600">owner@email.com</td>
              <td className="px-4 py-3">
                <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                  Active
                </span>
              </td>
              <td className="px-4 py-3 text-gray-600">2026-02-01</td>
              <td className="px-4 py-3">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                  <Button variant="danger" size="sm">
                    Suspend
                  </Button>
                </div>
              </td>
            </tr>

            {/* Restaurant 2 - Pending */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 font-medium text-gray-800">
                Burger Hub
              </td>
              <td className="px-4 py-3 text-gray-600">burger@hub.com</td>
              <td className="px-4 py-3">
                <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-700">
                  Pending
                </span>
              </td>
              <td className="px-4 py-3 text-gray-600">2026-02-02</td>
              <td className="px-4 py-3">
                <div className="flex gap-2">
                  <Button variant="success" size="sm">
                    Approve
                  </Button>
                  <Button variant="danger" size="sm">
                    Reject
                  </Button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {/* Card 1 - Active Restaurant */}
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="font-semibold text-gray-800">Pizza Palace</h3>
              <p className="text-sm text-gray-600 mt-1">owner@email.com</p>
            </div>
            <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
              Active
            </span>
          </div>

          <p className="text-sm text-gray-500 mb-4">Created: 2026-02-01</p>

          <div className="flex gap-2">
            <Button variant="outline" className="flex-1">
              View
            </Button>
            <Button variant="danger" className="flex-1">
              Suspend
            </Button>
          </div>
        </div>

        {/* Card 2 - Pending Restaurant */}
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="font-semibold text-gray-800">Burger Hub</h3>
              <p className="text-sm text-gray-600 mt-1">burger@hub.com</p>
            </div>
            <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-700">
              Pending
            </span>
          </div>

          <p className="text-sm text-gray-500 mb-4">Created: 2026-02-02</p>

          <div className="flex gap-2">
            <Button variant="success" className="flex-1">
              Approve
            </Button>
            <Button variant="danger" className="flex-1">
              Reject
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
