import { useState, useContext, ReactNode, useEffect } from 'react';
import { Beers } from '../types/Beers';
import { GlobalContext } from './GlobalContext';

interface ProviderProps {
  children: ReactNode;
}

// eslint-disable-next-line
export const GlobalContextProvider: React.FC<ProviderProps> = ({ children }) => {
  const [favourites, setFavourites] = useState<Beers[]>([]);

  useEffect(() => {
    const localFavs = localStorage.getItem('favourites');

    if (localFavs) {
      setFavourites(JSON.parse(localFavs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  const addToFavourites = (beer: Beers) => {
    const isFavorited = favourites.some((favBeer) => favBeer.id === beer.id);

    if (isFavorited) {
      setFavourites((prevFavourites) => prevFavourites.filter((item) => item.id !== beer.id));
    } else {
      setFavourites((prevFavourites) => [...prevFavourites, beer]);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        favourites,
        addToFavourites,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
