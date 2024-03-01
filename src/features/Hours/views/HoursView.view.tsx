import React, { FC } from "react";
import { Container, Text, Span, ExtraInfoText } from "./HoursView.style";
import { PrimaryTitle } from "@/ui";
import { MainSection, SecondaryHeader } from "@/components";

export const HoursView: FC = () => {
  const openHoursGarage = [
    { day: "MÅNDAG", hours: "STÄNGT" },
    { day: "TISDAG", hours: "STÄNGT" },
    { day: "ONSDAG", hours: "STÄNGT" },
    { day: "TORSDAG", hours: "STÄNGT" },
    { day: "FREDAG", hours: "1600 - 0100" },
    { day: "LÖRDAG", hours: "1200 - 0100 " },
    { day: "SÖNDAG", hours: "STÄNGT" },
  ];
  const openHoursHunkerJunker = [
    { day: "MÅNDAG", hours: "1200 - SENT" },
    { day: "TISDAG", hours: "1200 - SENT" },
    { day: "ONSDAG", hours: "1200 - SENT" },
    { day: "TORSDAG", hours: "1200 - SENT" },
    { day: "FREDAG", hours: "1200 - SENT" },
    { day: "LÖRDAG", hours: "1200 - SENT" },
    { day: "SÖNDAG", hours: "STÄNGT" },
  ];
  return (
    <Container>
      <SecondaryHeader title='ÖPPETTIDER' />
      <MainSection>
        <PrimaryTitle title='HUNKER GARAGE' />
        {openHoursGarage.map((each, i) => {
          return (
            <Text key={i}>
              <Span>{each.day} </Span>
              {each.hours}
            </Text>
          );
        })}
      </MainSection>
      <MainSection obsText='OBS! ÖPPET JUNI - AUGUSTI'>
        <PrimaryTitle title='HUNKER JUNKER' />
        <ExtraInfoText>ENDAST JUNI - AUGUSTI</ExtraInfoText>

        {openHoursHunkerJunker.map((each, i) => {
          return (
            <Text key={i}>
              <Span>{each.day} </Span>
              {each.hours}
            </Text>
          );
        })}
      </MainSection>
    </Container>
  );
};
