import { useEffect } from "react";

export const useCloseOnClickOutsideRef = (
  ref: React.MutableRefObject<any | null>,
  setToogle: React.Dispatch<React.SetStateAction<boolean>>
) => {
  useEffect(() => {
    const handler = (event: Event) => {
      const target = event.target as HTMLDivElement;
      if (!ref.current?.contains(target)) {
        setToogle(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);
};
