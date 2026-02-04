import React from "react";
import Sidebar from "@/components/superadmin/Sidebar";
import Header from "@/components/superadmin/Header";
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

      {/* Right side (Header + Content + Footer) */}
      <div className="flex-1 flex flex-col min-w-0 ">
        {/* Header (Navbar-style) */}
        <Header />

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-4 bg-gray-50">{children}</main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
