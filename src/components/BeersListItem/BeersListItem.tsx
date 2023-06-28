import React from 'react';
import './BeersListItem.scss';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context/GlobalContextProvider';
import { Beers } from '../../types/Beers';

interface BeersListItemProps {
  id: number;
  img: string;
  name: string;
  tagline: string;
  beersList: Beers[];
}

export const BeersListItem: React.FC<BeersListItemProps> = ({
  id,
  img,
  name,
  tagline,
  beersList,
}) => {
  const { addToFavourites, favourites } = useGlobalContext();

  const isFavourited = favourites.some((beerToFind) => beerToFind.id === id);

  const beer = beersList.filter((beerToFind) => beerToFind.id === id);

  return (
    <div className='beers_item'>
      <div className='beers_item__content'>
        <Link className='beer_link' to={`/details/${id}`}>
          <img className='beers_item__image' src={img} alt={name} />
          <p className='beers_item__name'>{name}</p>
          <div className='beers_item__decoration'>
            <div className='beers_item__decoration__line'></div>
            <div className='beers_item__decoration__square'></div>
            <div className='beers_item__decoration__line'></div>
          </div>
          <p className='beers_item__tagline'>{tagline}</p>
        </Link>

        <button
          onClick={() => addToFavourites(beer[0])}
          className={`beers_item__save-product ${
            isFavourited ? 'beers_item__save-product--selection' : ''
          }`}
        ></button>
      </div>
    </div>
  );
};
