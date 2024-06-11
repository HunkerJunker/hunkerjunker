import React, { FC } from "react";
import { MenuItem, MenuSection } from "../../components";
import { Container } from "./HunkerMenuView.style";
import {
  hunkerMenu,
  hunkerMenuDesert,
  hunkerMenuKidz,
  hunkerMenuSnacks,
} from "@/data";

import { ToogleVenue } from "@/components";

export const HunkerMenuView: FC<{
  showSnacks?: boolean;
}> = ({ showSnacks = true }) => {
  return (
    <Container id="menu">
      <MenuSection multipleTitles={false} headerText="MINDRE RÄTTER">
        <ToogleVenue direction="row" />

        {hunkerMenuSnacks.map((item, i) => {
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
        <MenuSection multipleTitles={false} headerText="FULLDISH / HELARÄTTER">
          {hunkerMenu?.map((item, i) => {
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
        <MenuSection multipleTitles={false} headerText="DESERT">
          {hunkerMenuDesert?.map((item, i) => {
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
        <MenuSection multipleTitles={false} headerText="KIDZ/BARN">
          {hunkerMenuKidz?.map((item, i) => {
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
