import React from 'react';
import './BeersListItem.scss';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context/GlobalContextProvider';
import { Bears } from '../../types/Bears';

interface BearsListItemProps {
  id: number;
  img: string;
  name: string;
  tagline: string;
  bearsList: Bears[];
}

export const BearsListItem: React.FC<BearsListItemProps> = ({ id, img, name, tagline, bearsList }) => {
  const { addToFavourites, favourites } = useGlobalContext();

  const isFavourited = favourites
    .some(beerToFind => beerToFind.id === id);

  const beer = bearsList
    .filter(beerToFind => beerToFind.id === id);

  return (
    <div className='bears_item'>

      <div className='bears_item__content'>
        <Link className="beer_link" to={`/details/${id}`}>

          <img className='bears_item__image' src={img} alt={name} />
          <p className='bears_item__name'>{name}</p>
          <div className='bears_item__decoration'>
            <div className='bears_item__decoration__line'></div>
            <div className='bears_item__decoration__square'></div>
            <div className='bears_item__decoration__line'></div>
          </div>
          <p className='bears_item__tagline'>{tagline}</p>
        </Link>

        <button
          onClick={() => addToFavourites(beer[0])}
          className={`bears_item__save-product ${isFavourited ? 'bears_item__save-product--selection' : ''}`}
        >
        </button>

      </div>
    </div>
  );
};
