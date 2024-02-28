import { screen } from "@testing-library/react";
import { PrimaryTitle } from "../PrimaryTitle.compoent";
import { Render } from "@/test.utils";
describe("Testing PrimaryTitle component", () => {
  it("should render with props", () => {
    const title = "title";
    Render(<PrimaryTitle title={title} />);
    const titleElement = screen.getByText("title");
    expect(titleElement).toBeInTheDocument();
  });
});
