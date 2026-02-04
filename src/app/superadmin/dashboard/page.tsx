import {
  Store,
  ShoppingBag,
  DollarSign,
  Users,
  TrendingUp,
  CheckCircle,
  Package,
  ChefHat,
  Star,
  Menu,
  AlertCircle,
} from "lucide-react";

// HardCoded Data
const orders = [
  {
    id: "#ORD-1234",
    restaurant: "Pizza Palace",
    amount: "$45.99",
    status: "preparing",
  },
  {
    id: "#ORD-1235",
    restaurant: "Burger House",
    amount: "$32.50",
    status: "delivered",
  },
  {
    id: "#ORD-1236",
    restaurant: "Sushi Station",
    amount: "$67.80",
    status: "on-the-way",
  },
];

const topRestaurants = [
  { name: "Pizza Palace", orders: 145, rating: 4.8 },
  { name: "Sushi Station", orders: 118, rating: 4.9 },
  { name: "Burger House", orders: 132, rating: 4.7 },
  { name: "Taco Town", orders: 98, rating: 4.6 },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
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

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* Stats Section */}
        <section className="bg-white rounded-xl shadow-lg ring-1 ring-gray-200 p-6">
          <h2 className="text-lg font-semibold mb-4">Stats Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {/* Restaurants */}
            <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-4 ring-1 ring-gray-100 border border-gray-400">
              <div className="p-3 rounded-lg bg-gray-100 shrink-0">
                <Store className="w-6 h-6 text-gray-700" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500">Restaurants</p>
                <p className="text-2xl font-semibold text-gray-800">156</p>
                <p className="mt-1 text-xs text-green-600 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> +12
                </p>
              </div>
            </div>

            {/* Admins */}
            <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-4 ring-1 ring-gray-100 border border-gray-400">
              <div className="p-3 rounded-lg bg-gray-100 shrink-0">
                <Users className="w-6 h-6 text-gray-700" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500">Admins</p>
                <p className="text-2xl font-semibold text-gray-800">48</p>
                <p className="mt-1 text-xs text-green-600 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> +3
                </p>
              </div>
            </div>

            {/* Customers */}
            <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-4 ring-1 ring-gray-100 border border-gray-400">
              <div className="p-3 rounded-lg bg-gray-100 shrink-0">
                <Users className="w-6 h-6 text-gray-700" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500">Customers</p>
                <p className="text-2xl font-semibold text-gray-800">8,234</p>
                <p className="mt-1 text-xs text-green-600 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> +156
                </p>
              </div>
            </div>

            {/* Active Orders */}
            <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-4 ring-1 ring-gray-100 border border-gray-400">
              <div className="p-3 rounded-lg bg-gray-100 shrink-0">
                <ShoppingBag className="w-6 h-6 text-gray-700" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500">Active Orders</p>
                <p className="text-2xl font-semibold text-gray-800">342</p>
                <p className="mt-1 text-xs text-green-600 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> +23
                </p>
              </div>
            </div>

            {/* Revenue */}
            <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-4 ring-1 ring-gray-100 border border-gray-400">
              <div className="p-3 rounded-lg bg-gray-100 shrink-0">
                <DollarSign className="w-6 h-6 text-gray-700" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500">Revenue</p>
                <p className="text-2xl font-semibold text-gray-800">$45,678</p>
                <p className="mt-1 text-xs text-green-600 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> +18.5%
                </p>
              </div>
            </div>

            {/* Pending Approvals */}
            <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-4 ring-1 ring-gray-100 border border-gray-400">
              <div className="p-3 rounded-lg bg-gray-100 shrink-0">
                <AlertCircle className="w-6 h-6 text-gray-700" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500">Pending Approvals</p>
                <p className="text-2xl font-semibold text-gray-800">7</p>
                <p className="mt-1 text-xs text-red-600">Needs action</p>
              </div>
            </div>
          </div>
        </section>

        {/* System Alerts Section */}
        <section className="bg-white rounded-xl shadow-lg ring-1 ring-gray-200 p-6">
          <h2 className="text-lg font-semibold mb-4">System Alerts</h2>
          <div className="space-y-3">
            {/* Restaurants Pending */}
            <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4 border-l-4 border border-orange-500">
              <div>
                <p className="font-medium text-orange-800">
                  Restaurants Pending Approval
                </p>
                <p className="text-sm text-orange-600">
                  7 restaurants awaiting review
                </p>
              </div>
              <button className="text-sm font-medium text-orange-700 hover:underline cursor-pointer">
                Review
              </button>
            </div>

            {/* Admins Pending */}
            <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4 border-l-4 border border-blue-500">
              <div>
                <p className="font-medium text-blue-800">
                  Admin Accounts Pending
                </p>
                <p className="text-sm text-blue-600">
                  3 admins need verification
                </p>
              </div>
              <button className="text-sm font-medium text-blue-700 hover:underline cursor-pointer">
                View
              </button>
            </div>
          </div>
        </section>

        {/* Subscription Section */}
        <section className="bg-white rounded-xl shadow-lg ring-1 ring-gray-200 p-6">
          <h2 className="text-lg font-semibold mb-4">Subscription Status</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Active section */}
            <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-start border border-gray-400">
              <p className="text-sm text-gray-500">Active subscriptions</p>
              <p className="text-3xl font-semibold text-green-600 mt-1">112</p>
            </div>
            {/* Expiring section */}
            <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-start border border-gray-400">
              <p className="text-sm text-gray-500">Trials Expiring</p>
              <p className="text-3xl font-semibold text-yellow-400 mt-1">14</p>
              <p className="text-xs text-gray-500 mt-1">Next 7 days</p>
            </div>
            {/* Expired section */}
            <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-start border border-gray-400">
              <p className="text-sm text-gray-500">Expired</p>
              <p className="text-3xl font-semibold text-red-500 mt-1">5</p>
              <p className="text-xs text-gray-500 mt-1">Action required</p>
            </div>
          </div>
        </section>

        {/* Orders + Top Restaurants */}
        <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* Orders */}
          <div className="bg-white rounded-xl shadow-lg ring-1 ring-gray-200 p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Recent Orders</h2>
              <button className="text-sm text-blue-600 hover:underline">
                View all
              </button>
            </div>
            <div className="divide-y">
              {/* Hardcoded order status */}
              {orders.map((order) => {
                let label = "",
                  color = "",
                  Icon: any = null;
                if (order.status === "delivered") {
                  label = "Delivered";
                  color = "bg-green-100 text-green-700";
                  Icon = CheckCircle;
                }
                if (order.status === "preparing") {
                  label = "Preparing";
                  color = "bg-blue-100 text-blue-700";
                  Icon = ChefHat;
                }
                if (order.status === "on-the-way") {
                  label = "On the way";
                  color = "bg-orange-100 text-orange-700";
                  Icon = Package;
                }

                return (
                  <div
                    key={order.id}
                    className="py-4 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:items-center "
                  >
                    <div className="flex items-start justify-between sm:block">
                      <div>
                        <p className="font-medium text-gray-800">{order.id}</p>
                        <p className="text-sm text-gray-500">
                          {order.restaurant}
                        </p>
                      </div>
                      <span
                        className={`sm:hidden inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-medium ${color}`}
                      >
                        <Icon className="w-4 h-4" /> {label}
                      </span>
                    </div>
                    <div className="sm:text-center">
                      <p className="font-semibold text-gray-800">
                        {order.amount}
                      </p>
                    </div>
                    <div className="hidden sm:flex justify-end">
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-medium ${color}`}
                      >
                        <Icon className="w-4 h-4" /> {label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Top Restaurants */}
          <div className="bg-white rounded-xl shadow-lg ring-1 ring-gray-200 p-6">
            <h2 className="text-lg font-semibold mb-4">Top Restaurants</h2>
            <div className="divide-y">
              {topRestaurants.map((r) => (
                <div
                  key={r.name}
                  className="flex items-center justify-between py-3"
                >
                  <div>
                    <p className="font-medium text-gray-800">{r.name}</p>
                    <p className="text-xs text-gray-500">{r.orders} orders</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="w-4 h-4 text-yellow-400" /> {r.rating}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
