import { Render } from "@/test.utils";
import Loading from "../loading";
import { screen } from "@testing-library/react";
describe("Testing loading page", () => {
  it("Should render with loading components", () => {
    Render(<Loading />);
    const Container = screen.getByTestId("spinner_container");
    expect(Container).toBeInTheDocument();
  });
});
