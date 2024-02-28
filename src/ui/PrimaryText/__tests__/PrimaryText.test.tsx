import { screen } from "@testing-library/react";
import { PrimaryText } from "../PrimaryText.component";
import { Render } from "@/test.utils";

describe("Testing PrimaryText component", () => {
  it("Should render with correct props ", () => {
    const text = "text";
    Render(<PrimaryText text={text} />);
    expect(screen.getByText("text")).toBeInTheDocument();
  });
});
