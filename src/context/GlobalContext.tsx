import { createContext } from "react";
import { Bears } from "../types/Bears";

interface GlobalContextProps {
  favourites: Bears[];
  addToFavourites: (beer: Bears) => void;
}

export const GlobalContext = createContext<GlobalContextProps>({
  favourites: [],
  // eslint-disable-next-line
  addToFavourites: () => {},
});