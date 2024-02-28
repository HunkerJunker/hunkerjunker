"use client";
import React, { useContext, useRef } from "react";
import { Container, Ul, Li, BurgerWrapper, StyledLink } from "./Menu.style";
import { MenuContext } from "@/context";
import { useCloseOnClickOutsideRef } from "@/hooks";
import { Burger } from "..";

export const Menu = () => {
  const menu = [
    { name: "MENY", href: "/menu" },
    { name: "OM OSS", href: "/about" },
    { name: "KONTAKT", href: "/contact" },
    { name: "ÖPPETTIDER", href: "/hours" },
    { name: "ABONNERA", href: "/book-venue" },
    { name: "MUSIK/KONST", href: "/music-and-arts" },
  ];
  const menuRef = useRef(null);
  const { toogleMenu, setToogleMenu } = useContext(MenuContext);
  useCloseOnClickOutsideRef(menuRef, setToogleMenu);

  if (!toogleMenu) return null;

  return (
    <Container ref={menuRef}>
      <BurgerWrapper>
        <Burger />
      </BurgerWrapper>
      <Ul>
        {menu.map((item, i) => {
          return (
            <Li key={i}>
              <StyledLink onClick={() => setToogleMenu(false)} href={item.href}>
                {item.name}
              </StyledLink>
            </Li>
          );
        })}
      </Ul>
    </Container>
  );
};
