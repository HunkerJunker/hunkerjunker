import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ProviderWrapper } from "./provider";

HTMLMediaElement.prototype.play = jest
  .fn()
  .mockImplementation(() => Promise.resolve());

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => {
  class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }

  Object.defineProperty(window, "ResizeObserver", {
    writable: true,
    configurable: true,
    value: ResizeObserver,
  });

  return render(ui, { wrapper: ProviderWrapper, ...options });
};

export * from "@testing-library/react";
export { customRender as Render };
