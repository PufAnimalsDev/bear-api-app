import { Beers } from '../types/Beers';
import { BeerDetails } from '../types/BeerDetails';
import { service } from '../utils/service';

export const getBeers = (URL: string) => {
  return service.get<Beers[]>(`${URL}`);
};

export const getSelectedBeer = (beerId: string) => {
  return service.get<BeerDetails[]>(`${beerId}`);
};
