import React, { FC } from "react";
import { MenuItem, MenuSection } from "../../components";
import { Container } from "./HunkerMenuView.style";
import { bbqMenu, smallDishMenu, tacoMenu } from "@/data";

import { ToogleVenue } from "@/components";

export const HunkerMenuView: FC<{
  showSnacks?: boolean;
}> = ({ showSnacks = true }) => {
  return (
    <Container id='menu'>
      <MenuSection multipleTitles={false} headerText='TACO'>
        <ToogleVenue direction='row' />

        {tacoMenu.map((item, i) => {
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
      {showSnacks && (
        <MenuSection multipleTitles={false} headerText='BBQ'>
          {bbqMenu?.map((item, i) => {
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
      )}
      {showSnacks && (
        <MenuSection multipleTitles={false} headerText='SMALL'>
          {smallDishMenu?.map((item, i) => {
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
      )}
    </Container>
  );
};
