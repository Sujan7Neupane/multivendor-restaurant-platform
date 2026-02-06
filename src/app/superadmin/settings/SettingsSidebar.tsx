import {
  Settings as SettingsIcon,
  Globe,
  CreditCard,
  Shield,
  FileText,
} from "lucide-react";

interface Tab {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
}

interface SettingsSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function SettingsSidebar({
  activeTab,
  setActiveTab,
}: SettingsSidebarProps) {
  const tabs: Tab[] = [
    { id: "platform", label: "Platform Settings", icon: Globe },
    { id: "subscription", label: "Subscription Rules", icon: SettingsIcon },
    { id: "payment", label: "Payment Gateway", icon: CreditCard },
    { id: "security", label: "Security", icon: Shield },
    { id: "audit", label: "Audit Logs", icon: FileText },
  ];

  return (
    <div className="lg:w-64 shrink-0">
      <div className="bg-white rounded-lg shadow p-2 space-y-1 lg:sticky lg:top-6">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition ${
                activeTab === tab.id
                  ? "bg-blue-50 text-blue-700 border-l-4 border-blue-600"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <Icon size={18} />
              <span className="truncate">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
