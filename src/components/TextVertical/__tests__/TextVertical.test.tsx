import { screen } from "@testing-library/react";
import { Render } from "@/test.utils";
import { TextVertical } from "..";

describe("Testing TextVerticalComponent", () => {
  it("Should render and have correct text", () => {
    Render(<TextVertical text='Garage' />);
    const text = screen.getByText("HUNKER");
    expect(text).toBeInTheDocument();
  });
  it("Should render and have prop text", () => {
    Render(<TextVertical text='Garage' />);
    const text = screen.getByText("Garage");
    expect(text).toBeInTheDocument();
  });
});
