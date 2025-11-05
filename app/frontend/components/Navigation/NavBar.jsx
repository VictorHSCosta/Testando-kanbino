import { Link, usePage } from "@inertiajs/react";
import { Text } from "@switchdreams/ui";
import React from "react";

const NavBar = () => {
  const { auth } = usePage().props;

  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Text as="span" size="lg" className="text-gray-900 font-semibold hover:text-gray-700 transition-colors">
                Home
              </Text>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {auth?.user ? (
              <div className="flex items-center space-x-4">
                <Text as="span" size="sm" className="text-gray-600">
                  Bem vindo, {auth.user.name}
                </Text>
                <Link
                  href="/sign_out"
                  method="delete"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Sair
                </Link>
              </div>
            ) : (
              <Link
                href="/sign_in"
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;