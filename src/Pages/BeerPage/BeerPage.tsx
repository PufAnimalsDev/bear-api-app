import { useState, useEffect } from 'react';
import { Ingredients } from '../../types/Ingredients'
import { BeerDetails } from '../../types/BeerDetails'
import { getSelectedBeer } from "../../api/beers";
import { Loader } from '../../components/Loader';
interface BeerPageProps {
    id: number;
}

export const BeerPage = (props: BeerPageProps) => {
    const { id } = props;
    const [beerDetails, setBeerDetails] = useState<BeerDetails>();
    const [ingredients, setIngredients] = useState<Ingredients>();
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    const loadBeer = async () => {
        try {
            setIsLoading(true);
            const loadedBeer = await getSelectedBeer(id);
            setBeerDetails(loadedBeer[0])
            setIngredients(loadedBeer[0].ingredients)
        } catch (error) {
            setHasError(true);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        loadBeer();
    }, [id]);

    return (
        <>
            {isLoading && <Loader />}
            {!isLoading && <>
                {!hasError
                    ?
                    <div>
                        
                        <img src={beerDetails?.image_url} alt={beerDetails?.name} />
                        <div>{beerDetails?.name}</div>
                        <div>{beerDetails?.tagline}</div>
                        <div>{beerDetails?.description}</div>
                        <div>{beerDetails?.abv}</div>
                        <div>{beerDetails?.ibu}</div>
                        {ingredients?.malt.map((malt) => {
                            const { name, amount } = malt;
                            const { value, unit } = amount;
                            return (
                                <>
                                    <div>{name}</div>
                                    <div>{value}</div>
                                    <div>{unit}</div>
                                </>
                            );
                        })}
                        {ingredients?.hops.map((hops) => {
                            const { name, amount } = hops;
                            const { value, unit } = amount;
                            return (
                                <>
                                    <div>{name}</div>
                                    <div>{value}</div>
                                    <div>{unit}</div>
                                </>
                            );
                        })}
                        <div>{ingredients?.yeast}</div>
                    </div>
                    : <p>Error</p>
                }
            </>}

        </>

    );
};
