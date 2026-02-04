import React from "react";
import Sidebar from "@/components/superadmin/Sidebar";
import Footer from "@/components/superadmin/Footer";

export default function SuperadminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="h-screen shrink-0 transition-all duration-300">
        <Sidebar />
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col h-screen min-w-0">
        <main className="flex-1 overflow-auto p-4">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
