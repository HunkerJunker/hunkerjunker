import React from "react";
import { Hero } from "../Hero.component";
import { Render } from "@/test.utils";
import { screen } from "@testing-library/react";

describe("Testing FullsizePromoBanner", () => {
  beforeEach(() => {
    Render(<Hero />);
  });

  it("should render Hero component with video element and correct video src", () => {
    const url = "/video/bg.mov";
    const videoContainer = screen.getByTestId("bg_video");
    const source = screen.getByTestId("video_source");

    expect(videoContainer).toBeInTheDocument();
    expect(source).toHaveAttribute("src", url);
    expect(1).toBe(1);
  });

  it("video should autoplay", () => {
    const videoElement = screen.getByTestId("bg_video");

    expect(videoElement).toHaveAttribute("autoPlay");
    expect(videoElement).toHaveAttribute("playsInline");
    expect(videoElement).toHaveAttribute("loop");
  });
});
