import React from 'react';
import './BeersListItem.scss';
import { Link } from 'react-router-dom';

interface BearsListItemProps {
  id: number;
  img: string;
  name: string;
  tagline: string;
}

export const BearsListItem: React.FC<BearsListItemProps> = ({ id, img, name, tagline }) => {
  return (
    <Link to={`details/${id}`}>
      <div className='bears_item'>
        <div className='bears_item__content'>
          <img className='bears_item__image' src={img} alt={name} />
          <p className='bears_item__name'>{name}</p>
          <div className='bears_item__decoration'>
            <div className='bears_item__decoration__line'></div>
            <div className='bears_item__decoration__square'></div>
            <div className='bears_item__decoration__line'></div>
          </div>
          <p className='bears_item__tagline'>{tagline}</p>
        </div>
      </div>
    </Link>
  );
};
