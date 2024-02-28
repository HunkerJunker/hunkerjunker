import React, { FC } from "react";
import { LogoWrapper, StyledImage, StyledLink } from "./MainLogo.style";

export const MainLogo: FC = () => {
  return (
    <StyledLink data-testid='link_main_logo' href={"/"}>
      <LogoWrapper>
        <StyledImage
          src={"/svg/main_logo_round.png"}
          alt='hunker junker logo'
          width={80}
          height={80}
        />
      </LogoWrapper>
    </StyledLink>
  );
};
