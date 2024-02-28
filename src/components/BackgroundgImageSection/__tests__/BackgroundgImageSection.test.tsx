import { Render } from "@/test.utils";
import { screen } from "@testing-library/react";
import { BackgroundgImageSection } from "..";

describe("Testing BackgroundgImageSection component", () => {
  it("Should render parralax with parralx prop set to true", () => {
    const parralax = true;
    Render(
      <BackgroundgImageSection parralax={parralax}>
        <p>Placeholder</p>
      </BackgroundgImageSection>
    );
    const parralaxWrapper = screen.getByTestId("parralax_wrapper");
    expect(parralaxWrapper).toBeInTheDocument();
  });
  it("Should render with in document", () => {
    Render(
      <BackgroundgImageSection>
        <p>child</p>
      </BackgroundgImageSection>
    );
    const child = screen.getByText("child");
    expect(child).toBeInTheDocument();
  });
});
