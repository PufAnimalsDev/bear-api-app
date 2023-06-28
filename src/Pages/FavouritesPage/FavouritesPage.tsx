import { useGlobalContext } from '../../context/GlobalContextProvider';
import { BeersListItem } from '../../components/BeersListItem';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer';
import './FavouritesPage.scss';

export const FavouritesPage = () => {
  const { favourites } = useGlobalContext();
  return (
    <>
      <Header headTitle='Favourites' />
      <div className='page-container container'>
        {!favourites.length && (
          <>
            <div>
              <div className='nothing-found'>
                <svg id='Layer_1' viewBox='0 0 13.999 12' className='nothing-found__svg'>
                  <path
                    fill='#ffc930'
                    d='m11.959 0.328c-1.147-0.531-2.518-0.393-3.573 0.242l-1.148 2.508 2.274 1.98-2.38 3.216 0.871-2.995-2.914-1.967 0.858-2.525c-1.085-0.812-2.617-1.045-3.884-0.459-1.901 0.882-2.81 3.135-1.308 5.794 1.067 1.891 2.958 3.317 6.256 5.872 3.299-2.555 5.189-3.98 6.257-5.872 1.502-2.659 0.592-4.912-1.309-5.794z'
                  />
                </svg>
                <h2 className='nothing-found__title'>Nothing Found!</h2>
              </div>
            </div>
          </>
        )}
        <div className='beersList'>
          {favourites.length > 0 && (
            <>
              {favourites.map((favItem) => (
                <BeersListItem
                  key={favItem.id}
                  id={favItem.id}
                  img={favItem.image_url}
                  name={favItem.name}
                  tagline={favItem.tagline}
                  beersList={favourites}
                />
              ))}
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
