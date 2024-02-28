import React, { FC } from "react";
import { Container } from "./GarageMenuView.style";
import { MenuItem, MenuSection } from "../../components";
import { garageMenu, garageMenuSnacks } from "@/data";
import { ToogleVenue } from "@/components";

export const GarageMenuView: FC = () => {
  return (
    <Container id='menu'>
      <MenuSection multipleTitles={true} headerText='MAINS'>
        <ToogleVenue direction='row' />
        {garageMenu.map((item, i) => {
          return (
            <MenuItem
              key={i}
              title={item.title}
              text={item.text}
              obsTitle={item.obsTitle}
            />
          );
        })}
      </MenuSection>
      <MenuSection multipleTitles={true} headerText='SNACKS'>
        {garageMenuSnacks?.map((item, i) => {
          return (
            <MenuItem
              key={i}
              title={item.title}
              text={item.text}
              obsTitle={item.obsTitle}
            />
          );
        })}
      </MenuSection>
    </Container>
  );
};
