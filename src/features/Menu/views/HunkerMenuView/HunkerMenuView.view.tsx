import React, { FC } from "react";
import { MenuItem, MenuSection } from "../../components";
import { Container } from "./HunkerMenuView.style";
import { hunkerMenu, hunkerMenuSnacks } from "@/data";

import { ToogleVenue } from "@/components";

export const HunkerMenuView: FC = () => {
  return (
    <Container id='menu'>
      <MenuSection multipleTitles={true} headerText='MAINS'>
        <ToogleVenue direction='row' />

        {hunkerMenu.map((item, i) => {
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
        {hunkerMenuSnacks?.map((item, i) => {
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
