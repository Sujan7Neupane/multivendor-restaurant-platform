"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { Save, Eye, EyeOff } from "lucide-react";

interface PaymentSettingsProps {
  data: any;
  setData: (data: any) => void;
}

export default function PaymentSettings({
  data,
  setData,
}: PaymentSettingsProps) {
  const [showSecretKey, setShowSecretKey] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b">
        <h2 className="text-lg font-semibold text-gray-800">
          Payment Gateway Configuration
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          Configure payment provider and credentials
        </p>
      </div>

      <form className="p-6">
        <div className="space-y-6">
          {/* Enable Payments */}
          <div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-800">
                Enable Payments
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Allow payment processing on the platform
              </p>
            </div>
            <label className="flex items-center cursor-pointer ml-4">
              <input
                type="checkbox"
                checked={data.enabled}
                onChange={(e) =>
                  setData({ ...data, enabled: e.target.checked })
                }
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
            </label>
          </div>

          {/* Payment Provider */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Payment Provider
            </label>
            <select
              value={data.provider}
              onChange={(e) => setData({ ...data, provider: e.target.value })}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option>Stripe</option>
              <option>Khalti</option>
              <option>eSewa (Coming Soon)</option>
            </select>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {/* Public Key */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Public Key
              </label>
              <Input
                value={data.publicKey}
                onChange={(e) =>
                  setData({ ...data, publicKey: e.target.value })
                }
                placeholder="pk_test_123456..."
              />
            </div>

            {/* Secret Key */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Secret Key
              </label>
              <div className="relative">
                <Input
                  type={showSecretKey ? "text" : "password"}
                  value={data.secretKey}
                  onChange={(e) =>
                    setData({ ...data, secretKey: e.target.value })
                  }
                  placeholder="sk_test_123456..."
                  className="pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowSecretKey(!showSecretKey)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showSecretKey ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Enter new key to overwrite existing
              </p>
            </div>
          </div>

          {/* Payment Mode */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Payment Mode
            </label>
            <div className="flex gap-3">
              <label className="flex items-center gap-2 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition flex-1">
                <input
                  type="radio"
                  name="paymentMode"
                  value="test"
                  checked={data.mode === "test"}
                  onChange={(e) => setData({ ...data, mode: e.target.value })}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="text-sm text-gray-700">Test Mode</span>
              </label>
              <label className="flex items-center gap-2 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition flex-1">
                <input
                  type="radio"
                  name="paymentMode"
                  value="live"
                  checked={data.mode === "live"}
                  onChange={(e) => setData({ ...data, mode: e.target.value })}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="text-sm text-gray-700">Live Mode</span>
              </label>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t flex justify-end">
          <Button type="submit" Icon={Save}>
            Save Configuration
          </Button>
        </div>
      </form>
    </div>
  );
}
