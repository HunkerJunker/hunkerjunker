import { screen } from "@testing-library/react";
import { MainLogo } from "../MainLogo.component";
import { Render } from "@/test.utils";
describe("Testing mainlogo", () => {
  it("Should render and link should direct home", () => {
    Render(<MainLogo />);
    const Link = screen.getByTestId("link_main_logo");
    expect(Link).toHaveAttribute("href", "/");
    expect(Link).toBeInTheDocument();
  });
  it("Image should have correct atributes", () => {
    Render(<MainLogo />);
    const Image = screen.getByAltText("hunker junker logo");
    expect(Image).toBeInTheDocument();
    expect(Image).toHaveAttribute("width", "80");
    expect(Image).toHaveAttribute("height", "80");
    expect(Image).toHaveAttribute("alt", "hunker junker logo");
  });
});
