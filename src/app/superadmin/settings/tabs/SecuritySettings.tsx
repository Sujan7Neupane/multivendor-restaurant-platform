"use client";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { Save } from "lucide-react";

interface SecuritySettingsProps {
  data: any;
  setData: (data: any) => void;
}

export default function SecuritySettings({
  data,
  setData,
}: SecuritySettingsProps) {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b">
        <h2 className="text-lg font-semibold text-gray-800">
          Security Settings
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          Configure security and access controls
        </p>
      </div>

      <form className="p-6">
        <div className="space-y-5">
          <div className="grid sm:grid-cols-3 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Session Timeout (min)
              </label>
              <Input
                type="number"
                value={data.sessionTimeout}
                onChange={(e) =>
                  setData({ ...data, sessionTimeout: e.target.value })
                }
                placeholder="30"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Max Login Attempts
              </label>
              <Input
                type="number"
                value={data.maxLoginAttempts}
                onChange={(e) =>
                  setData({ ...data, maxLoginAttempts: e.target.value })
                }
                placeholder="5"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Lock Duration (min)
              </label>
              <Input
                type="number"
                value={data.lockDuration}
                onChange={(e) =>
                  setData({ ...data, lockDuration: e.target.value })
                }
                placeholder="15"
              />
            </div>
          </div>

          {/* Password Reset Policies */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-800 mb-3">
              Password Reset Policies
            </h3>
            {[
              {
                label: "First Login",
                desc: "Require password change on first login",
                key: "forceResetFirstLogin",
              },
              {
                label: "Admin Role Change",
                desc: "Require password reset when admin role is changed",
                key: "forceResetRoleChange",
              },
              {
                label: "Enable Forgot Password",
                desc: "Allow users to reset password via email",
                key: "enableForgotPassword",
              },
              {
                label: "Admin Self-Password Reset",
                desc: "Allow admins to change their own password",
                key: "enableSelfReset",
              },
            ].map((item) => (
              <div
                key={item.key}
                className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition"
              >
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-800">
                    {item.label}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                </div>
                <label className="flex items-center cursor-pointer ml-4">
                  <input
                    type="checkbox"
                    checked={data[item.key]}
                    onChange={(e) =>
                      setData({ ...data, [item.key]: e.target.checked })
                    }
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-6 border-t flex justify-end">
          <Button type="submit" Icon={Save}>
            Update Security Settings
          </Button>
        </div>
      </form>
    </div>
  );
}
