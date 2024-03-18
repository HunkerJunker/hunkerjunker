"use client";
import React, { FC, useEffect, useState } from "react";
import { Container, Next, Prev, Shutter } from "./ImageScrollView.style";
import { BreadCrumbs } from "../components/BreadCrumbs";

export const ImageScrollView: FC = () => {
  const [toggleShutter, setToggleShutter] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imagesUrl = [
    "/images/img1.webp",
    "/images/img2.webp",
    "/images/img3.webp",
    "/images/img4.webp",
    "/images/img5.webp",
    "/images/img6.webp",
  ];
  const imageUrl = imagesUrl[currentImageIndex];
  const imagexIndexLength = imagesUrl.length;
  const clickLeft = () => {
    const audio = new Audio("/sounds/shutter.mp3");
    audio.play();
    setToggleShutter(true);
    if (currentImageIndex === 0) setCurrentImageIndex(imagexIndexLength - 1);
    else setCurrentImageIndex((prev) => prev - 1);
  };
  const clicRight = () => {
    const audio = new Audio("/sounds/shutter.mp3");
    audio.play();
    setToggleShutter(true);
    if (currentImageIndex === imagexIndexLength - 1) setCurrentImageIndex(0);
    else setCurrentImageIndex((prev) => prev + 1);
  };
  useEffect(() => {
    if (toggleShutter) {
      setTimeout(() => setToggleShutter(false), 1000);
    }
  }, [toggleShutter]);
  return (
    <Container $url={imageUrl}>
      {toggleShutter && <Shutter />}
      <Prev onClick={() => clickLeft()}>PREV</Prev>
      <Next onClick={() => clicRight()}>NEXT</Next>
      <BreadCrumbs index={currentImageIndex} length={imagesUrl.length} />
    </Container>
  );
};
