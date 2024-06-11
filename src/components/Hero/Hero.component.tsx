import React, { FC, useContext, useEffect, useRef } from "react";
import { ToogleVenueContainer, Video } from "./Hero.style";
import { VenueContext } from "@/context";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
import { PrimaryText } from "@/ui";
import { TemporaryTextDisplay } from "..";

interface Props {}
export const Hero: FC<Props> = () => {
  const videoSrc = "/video/hero_video.mp4";
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      try {
        videoRef.current.play();
      } catch (err) {
        console.log(`could not find video player`);
      }
    }
  }, []);

  return (
    <>
      <Video
        autoPlay
        loop
        muted
        playsInline
        ref={videoRef}
        data-testid="bg_video"
      >
        <source src={videoSrc} data-testid="video_source" />
      </Video>

      <ToogleVenueContainer>
        <Parallax
          speed={20}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <Image
              src={"/svg/full_logo.png"}
              alt="hunker junker logo"
              width={290}
              height={190}
            />
            <TemporaryTextDisplay text="☀️" />
          </div>
        </Parallax>
      </ToogleVenueContainer>
    </>
  );
};
