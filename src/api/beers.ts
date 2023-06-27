import { Bears } from '../types/Bears';
import { BeerDetails } from '../types/BeerDetails';
import { service } from '../utils/service';

export const getBeers = (URL: string) => {
  return service.get<Bears[]>(`${URL}`);
};

export const getSelectedBeer = (beerId: number) => {
  return service.get<BeerDetails[]>(`${beerId}`);
};
