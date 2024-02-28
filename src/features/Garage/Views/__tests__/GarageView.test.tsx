import { screen } from "@testing-library/react";
import { Render } from "@/test.utils";
import { GarageView } from "..";

describe("Testing garageview", () => {
  it("Should render", () => {
    Render(<GarageView />);
    const garageView = screen.getByTestId("garage-view");
    expect(garageView).toBeInTheDocument();
  });
});
