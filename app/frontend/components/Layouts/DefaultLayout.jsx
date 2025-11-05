import React from "react";

import { AlertProvider } from "@/contexts/Alert";
import NavBar from "@/components/Navigation/NavBar";

const DefaultLayout = ({ children }) => {
  return (
    <AlertProvider>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1">{children}</main>
      </div>
    </AlertProvider>
  );
};

export default DefaultLayout;
