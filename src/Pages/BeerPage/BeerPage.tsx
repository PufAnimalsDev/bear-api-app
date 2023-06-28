import { useState, useEffect } from 'react';
import { Ingredients } from '../../types/Ingredients';
import { BeerDetails } from '../../types/BeerDetails';
import { getSelectedBeer } from '../../api/beers';
import { Loader } from '../../components/Loader';
import './BeerPage.scss';
import { Header } from '../../components/Header/Header';
import { useGlobalContext } from '../../context/GlobalContextProvider';
import { Bears } from '../../types/Bears';
import { SwiperOnBeerPage } from '../../components/SwiperOnBeerPage';
import { Footer } from '../../components/Footer';
interface BeerPageProps {
  id: number;
  bearsList: Bears[];
}

export const BeerPage = (props: BeerPageProps) => {
  const { id, bearsList } = props;
  const [beerDetails, setBeerDetails] = useState<BeerDetails>();
  const [ingredients, setIngredients] = useState<Ingredients>();
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { addToFavourites, favourites } = useGlobalContext();


  const isFavourited = favourites
    .some(beerToFind => beerToFind.id === id);

  const beer = bearsList
    .filter(beerToFind => beerToFind.id === id);


  const loadBeer = async () => {
    try {
      setIsLoading(true);
      const loadedBeer = await getSelectedBeer(`/${id}`);
      setBeerDetails(loadedBeer[0]);
      setIngredients(loadedBeer[0].ingredients);
    } catch (error) {
      setHasError(true);
    } finally {
      setTimeout(
        () => {
          setIsLoading(false);
        }, 1000);
    }
  };

  useEffect(() => {
    loadBeer();
  }, [id]);

  const { name, image_url, tagline, description, abv, ibu } = beerDetails || {};


  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          {name && <Header headTitle={name} />}
          {!hasError && beerDetails ? (
            <div className='page-container container'>
              <div className='simple-info'>
                <div className='simple-info__image-wrapper'>
                  <img className="simple-info__image" src={image_url} alt={name} />
                  <button
                    onClick={() => addToFavourites(beer[0])}
                    className={`bears_item__save-product ${isFavourited ? 'bears_item__save-product--selection' : ''}`}
                  >
                  </button>
                </div>
                <div className='simple-info__content'>
                  <div className='simple-info__content-info'>
                    <h2>Tagline: </h2>
                    <p>{tagline}</p>
                    <p><span>Alcohol content:</span> {abv}%</p>
                    <p><span>IBU: </span>{ibu}</p>
                  </div>
                  <div className='simple-info__content-description'>
                    <h2>Description: </h2>
                    <p>{description}</p>
                  </div>

                </div>
              </div>
              <h2 className='ingredients'>Ingredients: </h2>
              <h3 className='ingredients__title'>Malt: </h3>
              <div className="table">
                <div className="table-header">
                  <div className="header__item filter__link">Name</div>
                  <div className="header__item filter__link filter__link--number">Value</div>
                  <div className="header__item filter__link filter__link--number">Unit</div>
                </div>
                <div className="table-content--malt">
                  {ingredients && <>
                    {ingredients.malt.map((malt, index) => {
                      const { name, amount } = malt;
                      const { value, unit } = amount;
                      return (
                        <div key={index} className="table-row">
                          <div className="table-data">{name}</div>
                          <div className="table-data">{value}</div>
                          <div className="table-data">{unit}</div>
                        </div>
                      );
                    })}
                  </>
                  }
                </div>
              </div>
              <h3 className='ingredients__title'>Hops: </h3>
              <div className="table">
                <div className="table-header">
                  <div className="header__item filter__link">Name</div>
                  <div className="header__item filter__link filter__link--number">Value</div>
                  <div className="header__item filter__link">Unit</div>
                  <div className="header__item filter__link">Add</div>
                  <div className="header__item filter__link">Attribute</div>
                </div>
                <div className="table-content--malt">
                  {ingredients && <>
                    {ingredients.hops.map((hops, index) => {
                      const { name, amount, add, attribute } = hops;
                      const { value, unit } = amount;
                      return (
                        <div key={index} className="table-row">
                          <div className="table-data">{name}</div>
                          <div className="table-data">{value}</div>
                          <div className="table-data">{unit}</div>
                          <div className="table-data table-data--mobile">{add}</div>
                          <div className="table-data table-data--mobile" >{attribute}</div>
                        </div>
                      );
                    })}
                    <div><span>Yeast:</span> {ingredients.yeast}</div>
                  </>
                  }
                </div>
              </div>
              <SwiperOnBeerPage beerList={bearsList} />
            </div >

          ) : (
            <p>Error</p>
          )}
          <Footer />
        </>
      )
      }
    </>
  );
};
