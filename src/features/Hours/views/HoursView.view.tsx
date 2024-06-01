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
    { day: "FREDAG", hours: "STÄNGT" },
    { day: "LÖRDAG", hours: "STÄNGT" },
    { day: "SÖNDAG", hours: "STÄNGT" },
  ];
  const openHoursHunkerJunker = [
    { day: "Sommar", hours: "Snart öppnar vi för säsongen" },
    { day: "Håll ut", hours: "Snart öppnar vi för säsongen" },
    // { day: "ONSDAG", hours: "Snart öppnar vi för sässongen" },
    // { day: "TORSDAG", hours: "Snart öppnar vi för sässongen" },
    // { day: "FREDAG", hours: "Snart öppnar vi för sässongen" },
    // { day: "LÖRDAG", hours: "Snart öppnar vi för sässongen" },
    // { day: "SÖNDAG", hours: "Snart öppnar vi för sässongen" },
  ];
  return (
    <Container>
      <SecondaryHeader title="ÖPPETTIDER" />

      <MainSection obsText="OBS! 11 Juni öppnar vi!!">
        <PrimaryTitle title="HUNKER JUNKER" />
        <ExtraInfoText>Öppnar 11 Juni</ExtraInfoText>

        {openHoursHunkerJunker.map((each, i) => {
          return (
            <Text key={i}>
              <Span>{each.day} </Span>
              {each.hours}
            </Text>
          );
        })}
      </MainSection>
      <MainSection obsText="Stängt för säsongen">
        <PrimaryTitle title="HUNKER GARAGE" />
        {openHoursGarage.map((each, i) => {
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
