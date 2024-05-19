"use client";
import { VenueContext } from "@/context";
import { GarageView } from "@/features/Garage";
import { OceanView } from "@/features/Ocean/views/OceanView.view";
import { MainLayout } from "@/layout";
import { NextPageWithLayout } from "@/types";
import { useContext } from "react";

const Home: NextPageWithLayout = () => {
  const { isGarage } = useContext(VenueContext);
  return <MainLayout>{!isGarage ? <GarageView /> : <OceanView />}</MainLayout>;
};

export default Home;
