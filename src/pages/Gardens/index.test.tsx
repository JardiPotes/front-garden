import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { GardenPage } from "./index";

const mockedUseQuery = jest.fn();

jest.mock("react-query", () => ({
  ...jest.requireActual("react-query"),
  useQuery: () => mockedUseQuery
}));

describe("render", () => {
  it.skip("should render without crash", () => {
    render(
      <BrowserRouter>
        <GardenPage />
      </BrowserRouter>
    );
    expect(
      screen.getByText("Trouve le jardin de tes rêves !")
    ).toBeInTheDocument();
  });
});
