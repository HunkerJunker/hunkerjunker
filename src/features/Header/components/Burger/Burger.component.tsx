import { FC, useContext } from "react";
import { Bar1, Bar2, Bar3, Container } from "./Burger.style";
import { MenuContext } from "@/context";

export const Burger: FC = () => {
  const { toogleMenu, setToogleMenu } = useContext(MenuContext);
  return (
    <Container
      data-testid='burger_button'
      onClick={() => setToogleMenu(!toogleMenu)}
    >
      <Bar1 $spin={toogleMenu} />
      <Bar2 $spin={toogleMenu} />
      <Bar3 $spin={toogleMenu} />
    </Container>
  );
};
