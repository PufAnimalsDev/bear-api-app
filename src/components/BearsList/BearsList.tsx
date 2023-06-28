import React from 'react';
import { Bears } from '../../types/Bears';
import { BearsListItem } from '../BeersListItem';
import './BeersList.scss';

interface BearsListProps {
  bearsList: Bears[];
}

export const BearsList: React.FC<BearsListProps> = ({ bearsList }) => {
  return (
    <div className='beersList'>
      {bearsList.map((value) => {
        return (
          <BearsListItem
            key={value.id}
            id={value.id}
            img={value.image_url}
            name={value.name}
            tagline={value.tagline}
            bearsList ={bearsList}
          />
        );
      })}
    </div>
  );
};
