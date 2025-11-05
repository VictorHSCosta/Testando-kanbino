import { render, screen } from "@testing-library/react";
import React from "react";

import HomePage from "../Index";

describe("Home Page", () => {
  it("renders the page correctly", () => {
    render(<HomePage />);

    expect(screen.getByText("Bem vindo ao site!")).toBeInTheDocument();
    expect(screen.getByText("Seja bem-vindo à nossa plataforma. Estamos felizes em tê-lo aqui.")).toBeInTheDocument();
    expect(screen.getByText("Entrar")).toBeInTheDocument();
  });

  it("renders personalized welcome when user is logged in", () => {
    const user = { name: "John" };
    render(<HomePage user={user} />);

    expect(screen.getByText("Bem vindo ao site, John!")).toBeInTheDocument();
  });

  it("does not show login button when user is logged in", () => {
    const user = { name: "John" };
    render(<HomePage user={user} />);

    expect(screen.queryByText("Entrar")).not.toBeInTheDocument();
  });
});
