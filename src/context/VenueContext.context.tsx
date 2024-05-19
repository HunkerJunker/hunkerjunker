import React, {
  Dispatch,
  FC,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface VenueContextInterface {
  isGarage: boolean;
  setIsGarage: Dispatch<SetStateAction<boolean>>;
}

export const VenueContext = createContext<VenueContextInterface>({
  isGarage: false,
  setIsGarage: () => {},
});

export const VenueContextProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isGarage, setIsGarage] = useState(false);
  return (
    <VenueContext.Provider value={{ isGarage, setIsGarage }}>
      {children}
    </VenueContext.Provider>
  );
};
