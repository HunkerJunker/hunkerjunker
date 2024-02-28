import { fireEvent, screen } from "@testing-library/react";
import { Render } from "@/test.utils";
import { Burger } from "..";
import { MenuContext } from "@/context";

const setToogleMenu = jest.fn();
describe("Testing burger component", () => {
  it("Should render", () => {
    Render(<Burger />);
  });
  it("should toogle menu true on click", () => {
    Render(
      <MenuContext.Provider value={{ toogleMenu: false, setToogleMenu }}>
        <Burger />
      </MenuContext.Provider>
    );
    const burgerButton = screen.getByTestId("burger_button");
    fireEvent.click(burgerButton);
    expect(setToogleMenu).toHaveBeenCalledWith(true);
  });
  it("should toogle menu false on click", () => {
    Render(
      <MenuContext.Provider value={{ toogleMenu: true, setToogleMenu }}>
        <Burger />
      </MenuContext.Provider>
    );
    const burgerButton = screen.getByTestId("burger_button");
    fireEvent.click(burgerButton);
    expect(setToogleMenu).toHaveBeenCalledWith(false);
  });
});
