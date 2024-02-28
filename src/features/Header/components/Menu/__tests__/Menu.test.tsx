import { Render } from "@/test.utils";
import { screen } from "@testing-library/react";
import { Menu } from "..";
import { MenuContext } from "@/context";
const mockMenuContext = {
  toogleMenu: true,
  setToogleMenu: jest.fn(),
};

describe("Testing menu/nav component", () => {
  it("Should render", () => {
    Render(<Menu />);
  });
});
