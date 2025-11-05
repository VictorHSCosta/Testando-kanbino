import { Link } from "@inertiajs/react";
import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-primary-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-white text-xl font-bold hover:text-primary-200 transition-colors duration-200"
            >
              Meu Site
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-600 hover:text-white transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/sign_in"
              className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-600 hover:text-white transition-colors duration-200"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu button (for future responsive implementation) */}
      <div className="sm:hidden">
        <div className="flex justify-between items-center h-16 px-4">
          <Link
            href="/"
            className="text-white text-xl font-bold"
          >
            Meu Site
          </Link>
          {/* Mobile menu button would go here */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;