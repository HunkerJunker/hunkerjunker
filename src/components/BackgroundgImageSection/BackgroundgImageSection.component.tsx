import React, { FC } from "react";
import { Parallax } from "react-scroll-parallax";
import { Container, InnerContainer } from "./BackgroundgImageSection.style";

interface Props {
  children: React.ReactNode;
  image_path?: string;
  parralax?: boolean;
}
export const BackgroundgImageSection: FC<Props> = ({
  children,
  image_path,
  parralax = false,
}) => {
  return (
    <Container $image_path={image_path ? image_path : ""}>
      {parralax ? (
        <Parallax
          data-testid='parralax_wrapper'
          speed={20}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {children}
        </Parallax>
      ) : (
        <>{children}</>
      )}
    </Container>
  );
};
