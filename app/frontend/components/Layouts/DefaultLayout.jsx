import React from "react";

import { AlertProvider } from "@/contexts/Alert";
import NavBar from "../NavBar";

const DefaultLayout = ({ children }) => {
  return (
    <AlertProvider>
      <NavBar />
      {children}
    </AlertProvider>
  );
};

export default DefaultLayout;
