import React, { FC } from "react";
import { Container, Text, Span, A } from "./ContactView.style";
import { ContactSection, EachContactInfo } from "../components";

import { SecondaryHeader } from "@/components";

export const ContactView: FC = () => {
  return (
    <Container id='contact'>
      <ContactSection>
        <SecondaryHeader title='KONTAKT' />

        <EachContactInfo
          title='KONTAKTA OSS'
          obsTitle='OBS! Telefontider tis-fre 11-17 '
        >
          <A href='tel:070-6666482'>
            <Span>TEL: </Span>
            070-6666482
          </A>
          {/* <Text>
            <Span>TELEFON: </Span>
            0756-3447525
          </Text> */}
          <Text>
            <Span>ADRESS HUNKER JUNKER: </Span>
            NORRA HAMNGATAN 22, SÖDERHAMN
          </Text>
          <Text>
            <Span>ADRESS HUNKER GARAGE: </Span>
            KUNGSGATAN 30, SÖDERHAMN
          </Text>
        </EachContactInfo>
        <EachContactInfo title='BOKNINGAR'>
          <Text>
            <Span>DROP IN: </Span>
            VI TAR INGA BOKNINGAR; ENDAST DROP IN
          </Text>
          <Text>
            <Span>STÖRRE SÄLLSKAP: </Span>
            VID SÄLLSKAP ÖVER 10 PERSONER TAR VI BOKNINGAR. <br /> I MÅN AV TID
            OCH PLATS
          </Text>
        </EachContactInfo>
      </ContactSection>
    </Container>
  );
};
