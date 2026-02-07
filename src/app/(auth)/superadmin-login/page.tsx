"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { Shield, Eye, EyeOff, Lock } from "lucide-react";

export default function SuperadminLoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-100 to-gray-200 flex items-center justify-center px-4">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Section - Info */}
          <div className="p-10 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-700 flex flex-col justify-center text-white">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur rounded-full mb-4">
                <Shield size={28} />
              </div>
              <h1 className="text-3xl font-bold mb-3">Superadmin Portal</h1>
              <p className="text-blue-100 leading-relaxed">
                Secure access for platform administrators to manage restaurants,
                subscriptions, payments, and system settings.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-blue-500/30">
              <p className="text-sm text-blue-100">
                Protected Access{" "}
                <Lock className="inline-block ml-1" width={15} />
              </p>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="p-10 flex flex-col justify-center">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Welcome Back
              </h2>
              <p className="text-sm text-gray-600">
                Sign in to continue to dashboard
              </p>
            </div>

            <form className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="superadmin@platform.com"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Password with Toggle */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full px-4 py-2.5 pr-12 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Login Button */}
              <Button type="submit" className="w-full mt-6">
                Sign In
              </Button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-6">
              Unauthorized access is prohibited
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
