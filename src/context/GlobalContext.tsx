import { createContext } from 'react';
import { Beers } from '../types/Beers';

interface GlobalContextProps {
  favourites: Beers[];
  addToFavourites: (beer: Beers) => void;
}

export const GlobalContext = createContext<GlobalContextProps>({
  favourites: [],
  // eslint-disable-next-line
  addToFavourites: () => {},
});
