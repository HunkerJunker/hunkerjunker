import React, { FC, Suspense, useContext } from "react";
import { Button, Container } from "./ToogleVenue.style";
import { VenueContext } from "@/context";

export const ToogleVenue: FC<{ direction?: "row" | "column" }> = ({
  direction = "column",
}) => {
  const { setIsGarage, isGarage } = useContext(VenueContext);
  return (
    <Container $direction={direction}>
      <Button
        data-testid='toogle-contextview-button-garage'
        $isGarage={!isGarage}
        onClick={() => setIsGarage(true)}
      >
        Garage
      </Button>

      <Button $isGarage={isGarage} onClick={() => setIsGarage(false)}>
        Hunker
      </Button>
    </Container>
  );
};
