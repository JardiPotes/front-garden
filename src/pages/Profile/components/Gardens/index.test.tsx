import { render, screen } from "@testing-library/react";

import { gardensStub } from "../../stubs";
import { Gardens } from "./index";

describe("render", () => {
  it("should render without crash", () => {
    render(<Gardens gardens={gardensStub} />);
    expect(screen.getByText(`Mylène's Farm - 75020`)).toBeInTheDocument();
  });
});
