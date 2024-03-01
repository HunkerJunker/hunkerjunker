"use client";
import { VenueContext } from "@/context";
import { GarageMenuView, HunkerMenuView } from "@/features";
import { NextPageWithLayout } from "@/types";
import { useContext } from "react";

const Menu: NextPageWithLayout = () => {
  const { isGarage } = useContext(VenueContext);
  return (
    <>{isGarage ? <GarageMenuView /> : <HunkerMenuView showSnacks={false} />}</>
  );
};

export default Menu;
