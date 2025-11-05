import { Link } from "@inertiajs/react";
import { Text } from "@switchdreams/ui";
import React from "react";

const HomePage = ({ user }) => {
  return (
    <section className="flex flex-1 w-full flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center max-w-2xl mx-auto px-4">
        <Text as="h1" size="5xl" className="text-gray-900 mb-6">
          Bem vindo ao site{user ? `, ${user.name}` : ""}!
        </Text>
        <Text as="p" size="lg" className="text-gray-600 mb-8">
          Seja bem-vindo à nossa plataforma. Estamos felizes em tê-lo aqui.
        </Text>
        {!user && (
          <Link
            href="/sign_in"
            className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-lg font-medium text-white hover:bg-blue-700 transition-colors shadow-sm"
          >
            Entrar
          </Link>
        )}
      </div>
    </section>
  );
};

export default HomePage;
