"use client";

import { useState } from "react";
import SettingsSidebar from "./SettingsSidebar";
import PlatformSettings from "./tabs/PlatformSettings";
import SubscriptionRules from "./tabs/SubscriptionRules";
import PaymentSettings from "./tabs/PaymentSettings";
import SecuritySettings from "./tabs/SecuritySettings";
import AuditLogs from "./tabs/AuditLogs";

interface AuditLog {
  id: number;
  actor: string;
  action: string;
  entity: string;
  timestamp: string;
  ip: string;
}

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("platform");

  const [platformSettings, setPlatformSettings] = useState({
    /* initial state */
  });
  const [subscriptionRules, setSubscriptionRules] = useState({
    /* initial state */
  });
  const [paymentSettings, setPaymentSettings] = useState({
    /* initial state */
  });
  const [securitySettings, setSecuritySettings] = useState({
    /* initial state */
  });
  // Hardcoded audit logs
  const auditLogs: AuditLog[] = [
    {
      id: 1,
      actor: "Superadmin",
      action: "Restaurant Approved",
      entity: "Pizza Palace",
      timestamp: "2026-02-05 10:30 AM",
      ip: "192.168.1.1",
    },
    {
      id: 2,
      actor: "Superadmin",
      action: "Admin Created",
      entity: "john@example.com",
      timestamp: "2026-02-05 09:15 AM",
      ip: "192.168.1.1",
    },
    {
      id: 3,
      actor: "Admin",
      action: "Login Failed",
      entity: "admin@restaurant.com",
      timestamp: "2026-02-05 08:45 AM",
      ip: "192.168.1.5",
    },
    {
      id: 4,
      actor: "Superadmin",
      action: "Subscription Changed",
      entity: "Pizza Palace",
      timestamp: "2026-02-04 11:20 AM",
      ip: "192.168.1.2",
    },
    {
      id: 5,
      actor: "Admin",
      action: "Login Successful",
      entity: "john@example.com",
      timestamp: "2026-02-03 07:50 AM",
      ip: "192.168.1.3",
    },
  ];

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Settings</h1>
        <p className="text-sm text-gray-600 mt-1">
          Configure platform settings and rules
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <SettingsSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="flex-1 max-w-4xl">
          {activeTab === "platform" && (
            <PlatformSettings
              data={platformSettings}
              setData={setPlatformSettings}
            />
          )}
          {activeTab === "subscription" && (
            <SubscriptionRules
              data={subscriptionRules}
              setData={setSubscriptionRules}
            />
          )}
          {activeTab === "payment" && (
            <PaymentSettings
              data={paymentSettings}
              setData={setPaymentSettings}
            />
          )}
          {activeTab === "security" && (
            <SecuritySettings
              data={securitySettings}
              setData={setSecuritySettings}
            />
          )}
          {activeTab === "audit" && <AuditLogs logs={auditLogs} />}
        </div>
      </div>
    </div>
  );
}
