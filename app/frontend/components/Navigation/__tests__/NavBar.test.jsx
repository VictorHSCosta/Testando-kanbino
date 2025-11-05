import { render, screen } from "@testing-library/react";
import React from "react";
import { PageContext } from "@inertiajs/react";

import NavBar from "../NavBar";

describe("NavBar", () => {
  const createPageContext = (auth = null) => ({
    props: {
      auth,
      errors: {},
    },
    url: window.location.href,
    component: "Home/Index",
    version: null,
    key: null,
  });

  it("renders navigation with Home link", () => {
    const pageContext = createPageContext();
    render(
      <PageContext.Provider value={pageContext}>
        <NavBar />
      </PageContext.Provider>
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  it("shows user name when logged in", () => {
    const auth = { user: { name: "John Doe" } };
    const pageContext = createPageContext(auth);
    render(
      <PageContext.Provider value={pageContext}>
        <NavBar />
      </PageContext.Provider>
    );

    expect(screen.getByText("Bem vindo, John Doe")).toBeInTheDocument();
    expect(screen.getByText("Sair")).toBeInTheDocument();
    expect(screen.queryByText("Login")).not.toBeInTheDocument();
  });

  it("shows login button when not logged in", () => {
    const pageContext = createPageContext();
    render(
      <PageContext.Provider value={pageContext}>
        <NavBar />
      </PageContext.Provider>
    );

    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.queryByText("Sair")).not.toBeInTheDocument();
  });
});