import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { Save } from "lucide-react";

interface PlatformSettingsProps {
  data: any;
  setData: (data: any) => void;
}

export default function PlatformSettings({
  data,
  setData,
}: PlatformSettingsProps) {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b">
        <h2 className="text-lg font-semibold text-gray-800">
          Platform Settings
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          Configure global platform information and behavior
        </p>
      </div>

      <form className="p-6">
        <div className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            {/* Platform Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Platform Name *
              </label>
              <Input
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                placeholder="Enter platform name"
              />
            </div>

            {/* Support Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Support Email *
              </label>
              <Input
                type="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                placeholder="example@gmail.com"
              />
            </div>

            {/* Support Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Support Phone
              </label>
              <Input
                type="tel"
                value={data.phone}
                onChange={(e) => setData({ ...data, phone: e.target.value })}
                placeholder="+977-980000000"
              />
            </div>

            {/* Timezone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Default Timezone
              </label>
              <select
                value={data.timezone}
                onChange={(e) => setData({ ...data, timezone: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option>Asia/Kathmandu</option>
                <option>UTC</option>
                <option>Asia/Kolkata</option>
              </select>
            </div>

            {/* Currency */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Default Currency
              </label>
              <select
                value={data.currency}
                onChange={(e) => setData({ ...data, currency: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option>NPR</option>
                <option>USD</option>
                <option>INR</option>
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Platform Status
              </label>
              <div className="flex items-center gap-4 pt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="status"
                    value="active"
                    checked={data.status === "active"}
                    onChange={(e) =>
                      setData({ ...data, status: e.target.value })
                    }
                    className="w-4 h-4 text-blue-600"
                  />
                  <span className="text-sm text-gray-700">Active</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="status"
                    value="maintenance"
                    checked={data.status === "maintenance"}
                    onChange={(e) =>
                      setData({ ...data, status: e.target.value })
                    }
                    className="w-4 h-4 text-blue-600"
                  />
                  <span className="text-sm text-gray-700">
                    Maintenance Mode
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t flex justify-end">
          <Button type="submit" Icon={Save}>
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
}
