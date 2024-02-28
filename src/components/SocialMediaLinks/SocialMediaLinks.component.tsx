import React, { FC } from "react";
import { Container, StyledHref, StyledSvg } from "./SocialMediaLinks.style";

export const SocialMediaLinks: FC = () => {
  return (
    <Container>
      <StyledHref
        aria-label='link to instagram'
        target='_blank'
        href='https://www.instagram.com/hunker_junker/?fbclid=IwAR2kYO1OKkxguu_yXlSKc-wq5trjNosigOTAskGPPAOV4TtsGqjFtc1XbSc'
      >
        <StyledSvg alt='github logo' src='/svg/instagram.svg' />
      </StyledHref>

      <StyledHref
        aria-label='link to facebook'
        target='_blank'
        href='https://www.facebook.com/Hunkerjunker1'
      >
        <StyledSvg alt='email logo' src='/svg/facebook.svg' />
      </StyledHref>
    </Container>
  );
};
