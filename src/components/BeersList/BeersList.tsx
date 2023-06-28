import React from 'react';
import { Beers } from '../../types/Beers';
import { BeersListItem } from '../BeersListItem';
import './BeersList.scss';

interface BeersListProps {
  beersList: Beers[];
}

export const BeersList: React.FC<BeersListProps> = ({ beersList }) => {
  return (
    <div className='beersList'>
      {beersList.map((value) => {
        return (
          <BeersListItem
            key={value.id}
            id={value.id}
            img={value.image_url}
            name={value.name}
            tagline={value.tagline}
            beersList={beersList}
          />
        );
      })}
    </div>
  );
};
