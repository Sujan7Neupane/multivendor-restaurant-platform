"use client";

import { useState } from "react";
import {
  Users,
  LayoutDashboard,
  ClipboardList,
  CreditCard,
  Settings,
  Store,
} from "lucide-react";
import { useRouter } from "next/navigation";

export const navItems = [
  {
    label: "Dashboard",
    icon: <LayoutDashboard />,
    link: "/superadmin/dashboard",
  },
  { label: "Restaurants", icon: <Store />, link: "/superadmin/restaurants" },
  { label: "Admins", icon: <Users />, link: "/superadmin/admins" },
  { label: "Orders", icon: <ClipboardList />, link: "/superadmin/orders" },
  {
    label: "Subscriptions",
    icon: <CreditCard />,
    link: "/superadmin/subscriptions",
  },
  { label: "Settings", icon: <Settings />, link: "/superadmin/settings" },
];

export default function Sidebar() {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("/superadmin");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    router.push(link);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-white text-gray-800 w-20 md:w-64 flex flex-col shadow-lg relative">
        {/* Logo */}
        <div className="relative p-4 border-b border-gray-200 flex items-center justify-center h-20">
          {/* Desktop logo */}
          <img
            src="/images/logo-superadmin-.png"
            alt="Logo"
            className="hidden md:block w-40 h-auto"
          />
          {/* Mobile logo */}
          <img
            src="/images/footer-logo-.png"
            alt="Logo"
            className="block md:hidden w-10 h-auto"
          />
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 py-6 overflow-y-auto relative">
          {navItems.map((item, index) => {
            const isActive = activeLink === item.link;

            return (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  onClick={() => handleLinkClick(item.link)}
                  className={`flex items-center gap-3 p-3 mx-3 mb-2 rounded-lg cursor-pointer transition-all duration-200
                    ${isActive ? "bg-blue-600 text-white" : "hover:bg-gray-100 text-gray-700"}`}
                >
                  <span className="w-5 h-5">{item.icon}</span>
                  {/* Text only visible on desktop */}
                  <span className="hidden md:inline font-medium">
                    {item.label}
                  </span>
                </div>

                {/* Tooltip for mobile/collapsed sidebar */}
                {hoveredIndex === index && (
                  <div
                    className="fixed left-20 bg-gray-800 text-white text-xs px-2 py-1 rounded z-50 pointer-events-none md:hidden"
                    style={{
                      top: `calc(${index * 56 + 100}px)`,
                    }}
                  >
                    {item.label}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Bottom logo */}
        <div className="border-t border-gray-200 flex items-center justify-center p-3">
          <img
            src="/images/footer-logo-.png"
            alt="Logo"
            className="w-10 h-auto md:w-14 md:h-auto"
          />
        </div>
      </div>
    </div>
  );
}
