import React, {
  Dispatch,
  FC,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface MenuContextInterface {
  toogleMenu: boolean;
  setToogleMenu: Dispatch<SetStateAction<boolean>>;
}

export const MenuContext = createContext<MenuContextInterface>({
  toogleMenu: false,
  setToogleMenu: () => {},
});

export const ContextProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toogleMenu, setToogleMenu] = useState(false);
  return (
    <MenuContext.Provider value={{ toogleMenu, setToogleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
