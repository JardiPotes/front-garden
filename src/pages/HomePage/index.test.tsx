import { fireEvent, render, screen } from "@testing-library/react";

import HomePage from "./index";

describe("render", () => {
  it("should render without crash", () => {
    render(<HomePage />);
    expect(
      screen.getByText("La Première Communauté pour Jardiner Ensemble !")
    ).toBeInTheDocument();
  });
});
