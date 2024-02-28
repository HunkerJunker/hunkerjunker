import { renderHook } from "@testing-library/react";
import { useCloseOnClickOutsideRef } from "..";

describe("useCloseOnClickOutsideRef", () => {
  it("should call setToggle when clicking outside the ref", () => {
    const setToggleMock = jest.fn();
    const ref = { current: document.createElement("div") };

    const { result } = renderHook(() =>
      useCloseOnClickOutsideRef(ref, setToggleMock)
    );

    const event = new Event("mousedown");
    const outsideElement = document.createElement("div");
    document.body.appendChild(outsideElement);

    document.dispatchEvent(event);

    expect(setToggleMock).toHaveBeenCalledWith(false);

    document.body.removeChild(outsideElement);
  });
});
