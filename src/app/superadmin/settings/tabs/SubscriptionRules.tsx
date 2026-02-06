"use client";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { Save } from "lucide-react";

interface SubscriptionRulesProps {
  data: any;
  setData: (data: any) => void;
}

export default function SubscriptionRules({
  data,
  setData,
}: SubscriptionRulesProps) {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b">
        <h2 className="text-lg font-semibold text-gray-800">
          Subscription Rules
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          Define how subscriptions behave globally
        </p>
      </div>

      <form className="p-6">
        <div className="space-y-5">
          {/* Grace Period & Default Plan */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Grace Period (days)
              </label>
              <Input
                type="number"
                value={data.gracePeriod}
                onChange={(e) =>
                  setData({ ...data, gracePeriod: e.target.value })
                }
                placeholder="Enter grace days"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Default Plan for New Restaurants
              </label>
              <select
                value={data.defaultPlan}
                onChange={(e) =>
                  setData({ ...data, defaultPlan: e.target.value })
                }
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option>Basic</option>
                <option>Pro</option>
                <option>Enterprise</option>
              </select>
            </div>
          </div>

          {/* Toggle Options */}
          <div className="space-y-3">
            {/* Auto-disable */}
            <div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition">
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-800">
                  Auto-disable restaurant on expiry
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Automatically disable restaurants when subscription expires
                </p>
              </div>
              <label className="flex items-center cursor-pointer ml-4">
                <input
                  type="checkbox"
                  checked={data.autoDisable}
                  onChange={(e) =>
                    setData({ ...data, autoDisable: e.target.checked })
                  }
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
              </label>
            </div>

            {/* Allow Downgrade */}
            <div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition">
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-800">
                  Allow plan downgrade
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Allow restaurants to switch to a lower-tier plan
                </p>
              </div>
              <label className="flex items-center cursor-pointer ml-4">
                <input
                  type="checkbox"
                  checked={data.allowDowngrade}
                  onChange={(e) =>
                    setData({ ...data, allowDowngrade: e.target.checked })
                  }
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
              </label>
            </div>
          </div>

          {/* Order Limit Enforcement */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Order Limit Enforcement
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Hard Limit */}
              <label className="flex items-center gap-2 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition flex-1">
                <input
                  type="radio"
                  name="orderLimit"
                  value="hard"
                  checked={data.orderLimit === "hard"}
                  onChange={(e) =>
                    setData({ ...data, orderLimit: e.target.value })
                  }
                  className="w-4 h-4 text-blue-600"
                />
                <span className="text-sm text-gray-700">
                  Hard Limit (Block orders)
                </span>
              </label>

              {/* Soft Limit */}
              <label className="flex items-center gap-2 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition flex-1">
                <input
                  type="radio"
                  name="orderLimit"
                  value="soft"
                  checked={data.orderLimit === "soft"}
                  onChange={(e) =>
                    setData({ ...data, orderLimit: e.target.value })
                  }
                  className="w-4 h-4 text-blue-600"
                />
                <span className="text-sm text-gray-700">
                  Soft Limit (Warning only)
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-6 pt-6 border-t flex justify-end">
          <Button type="submit" Icon={Save}>
            Update Rules
          </Button>
        </div>
      </form>
    </div>
  );
}
