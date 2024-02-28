import { screen } from "@testing-library/react";
import { ToogleVenue } from "../ToogleVenue.component";

import { Render } from "@/test.utils";
import userEvent from "@testing-library/user-event";

describe("Testing ToogleVenue component", () => {
  it("Should have buttons in component", () => {
    Render(<ToogleVenue />);
    const toogleGarageButton = screen.getByRole("button", {
      name: /Garage/,
    });
    const toogleOceanButton = screen.getByRole("button", {
      name: /Hunker/,
    });

    expect(toogleGarageButton).toBeInTheDocument();
    expect(toogleOceanButton).toBeInTheDocument();
  });
  it("Should toogle venues on click", () => {
    Render(<ToogleVenue />);
    const toogleGarageButton = screen.getByRole("button", {
      name: /Garage/,
    });
    const toogleOceanButton = screen.getByRole("button", {
      name: /Hunker/,
    });

    userEvent.click(toogleOceanButton);
    userEvent.click(toogleGarageButton);
  });
});
