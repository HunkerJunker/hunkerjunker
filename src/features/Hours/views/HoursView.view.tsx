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
    { day: "FREDAG", hours: "17:00-01:00" },
    { day: "LÖRDAG", hours: "17:00-01:00" },
    { day: "SÖNDAG", hours: "STÄNGT" },
  ];
  const openHoursHunkerJunker = [
    { day: "MÅNDAG", hours: "STÄNGT" },
    { day: "TISDAG", hours: "STÄNGT" },
    { day: "ONSDAG", hours: "STÄNGT" },
    { day: "TORSDAG", hours: "STÄNGT" },
    { day: "FREDAG", hours: "STÄNGT" },
    { day: "LÖRDAG", hours: "STÄNGT" },
    { day: "SÖNDAG", hours: "STÄNGT" },
  ];
  return (
    <Container>
      <SecondaryHeader title="ÖPPETTIDER" />
      <MainSection obsText="Kom o häng">
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
      <MainSection obsText="">
        <PrimaryTitle title="HUNKER JUNKER" />

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
