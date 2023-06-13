import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { userStub } from "../../stubs";
import { UserInfo } from "./index";

const mockedUseMutation = jest.fn();

jest.mock("react-query", () => ({
  ...jest.requireActual("react-query"),
  useMutation: () => mockedUseMutation
}));

describe("render", () => {
  it("should render without crash", () => {
    render(
      <BrowserRouter>
        <UserInfo user={userStub} />
      </BrowserRouter>
    );
    expect(screen.getByText("Mylène Farmer")).toBeInTheDocument();
  });
});
