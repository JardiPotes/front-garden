import { fireEvent, render, screen } from "@testing-library/react";

import HomePage from "./index";

const mockedUsedNavigate = jest.fn();
const mockedUseMutation = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate
}));

jest.mock("react-query", () => ({
  ...jest.requireActual("react-query"),
  useMutation: () => mockedUseMutation
}));

describe("render", () => {
  it("should render without crash", () => {
    render(<HomePage />);
    expect(
      screen.getByText("La Première Communauté pour Jardiner Ensemble !")
    ).toBeInTheDocument();
  });
  it("should open login modal when clicked", () => {
    render(<HomePage />);
    const login = screen.getByText("REJOINS-NOUS");
    fireEvent.click(login);
    expect(screen.getByText("ALORS, ON PLANTE ?")).toBeInTheDocument();
  });
});
