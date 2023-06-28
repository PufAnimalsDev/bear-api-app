import { useGlobalContext, } from "../../context/GlobalContextProvider"
import { BearsListItem } from '../../components/BeersListItem';
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer";

export const FavouritesPage = () => {
    const { favourites } = useGlobalContext();
    return (

        <>
            <Header headTitle="Favourites" />
            <div className="page-container container">
                <div className="beersList">
                    {favourites.length > 0 &&
                        (<>
                            {favourites.map(favItem => <BearsListItem
                                key={favItem.id}
                                id={favItem.id}
                                img={favItem.image_url}
                                name={favItem.name}
                                tagline={favItem.tagline}
                                bearsList={favourites}
                            />)}
                        </>)
                    }
                </div>
            </div>
            <Footer />

        </>
    )
}