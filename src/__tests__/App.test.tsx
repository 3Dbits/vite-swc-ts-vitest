import { expect, it, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("should contain text", () => {
    render(<App />);
    // console.log(screen.getByText("My favorite fruit is banana"));
    expect(screen.getByText("Env is apple")).toBeInTheDocument();
  });
});
