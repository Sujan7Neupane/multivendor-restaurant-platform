import { ChefHat, Menu } from "lucide-react";

export default function () {
  return (
    <div>
      <header className="bg-white shadow-lg border-b border-gray-400">
        <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div>
            <h1 className="text-base sm:text-lg font-semibold text-gray-800">
              Superadmin
            </h1>
            <p className="hidden sm:block text-xs text-gray-500">Dashboard</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              className="inline-flex sm:hidden p-2 rounded-lg hover:bg-gray-100"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
            <div className="hidden sm:flex items-center gap-3">
              <div className="text-right leading-tight">
                <p className="text-sm font-medium text-gray-800">Admin User</p>
                <p className="text-xs text-gray-500">Super Admin</p>
              </div>
              <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center">
                <ChefHat className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
