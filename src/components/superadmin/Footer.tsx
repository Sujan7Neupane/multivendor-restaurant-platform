import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4">
        {/* Desktop / Tablet / Mobile Layout */}
        <div className="flex flex-col sm:flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 text-gray-600 text-sm">
          {/* Left side (Copyright) */}
          <div className="flex flex-col sm:flex-col md:flex-row md:items-center gap-1 md:gap-2 text-center md:text-left">
            <span>© NepPlaza Multi-Vendor</span>
            <span className="sm:hidden md:inline">All rights reserved.</span>
            <span className="hidden sm:inline md:hidden">
              All rights reserved
            </span>
          </div>

          {/* Right side (Links) */}
          <div className="flex flex-wrap justify-center md:justify-end gap-2 sm:gap-4 md:gap-6 mt-1 md:mt-0 text-center">
            <Link
              href="/multi-university"
              className="hover:text-gray-900 transition-colors"
            >
              NepPlaza University
            </Link>

            <Link
              href="/help-center"
              className="hover:text-gray-900 transition-colors"
            >
              Help Center
            </Link>

            <Link
              href="/multi-seller-app"
              className="hover:text-gray-900 transition-colors"
            >
              NepPlaza Seller App
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
