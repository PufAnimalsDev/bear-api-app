import { useMemo, useState, useEffect } from "react";
import { Bears } from "../../types/Bears";
import { BearsList } from "../../components/BearsList";
import { Pagination } from "../../components/Pagination/Pagination";
import { BeerPage } from "../BeerPage";
import { useParams } from "react-router-dom";

export const BeersPage: React.FC = () => {
    const [result, setResult] = useState<Bears[]>([]);
    const [result2, setResult2] = useState<Bears[]>([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [perPageValue, setPerPageValue] = useState(12);
    const { beerId } = useParams();

    useEffect(() => {
        const getData = async (URL: string, setResult: (value: React.SetStateAction<Bears[]>) => void) => {
            const data = await fetch(URL, {
                method: "GET"
            });
            const jsonData = await data.json();
            setResult(jsonData);
        };

        getData("https://api.punkapi.com/v2/beers?per_page=80", setResult);
        getData("https://api.punkapi.com/v2/beers?page=2&per_page=80", setResult2);

    }, []);


    
    const allBeers = useMemo(() => {
        return result.concat(result2);
    }, [result2, result])

    console.log(allBeers);
    const indexOfLastBeer = currentPage * perPageValue;
    const indexOfFirstBeer = indexOfLastBeer - perPageValue;
    const lastPage = Math.ceil(allBeers.length / perPageValue);

    const pages = (amount: number) => {
        const numberedPages = [];

        for (let i = 1; i <= amount; i += 1) {
            numberedPages.push(i);
        }

        return numberedPages;
    }

    const currentBeers = useMemo(() => {
        return allBeers.slice(indexOfFirstBeer, indexOfLastBeer);
    }, [indexOfFirstBeer, indexOfLastBeer, allBeers])

    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage !== lastPage ? currentPage + 1 : currentPage)
    }

    const handlePrevPage = () => {
        setCurrentPage(prevPage => prevPage !== 1 ? currentPage - 1 : currentPage);
    }

    const handleChangePage = (newPage: number) => {
        setCurrentPage(newPage);
    }


    return (

        <>
            {beerId ?
                <BeerPage id={Number(beerId)} />
                : <div className="page-container">
                    <BearsList
                        bearsList={currentBeers}
                    />
                    <Pagination
                        total={pages(lastPage)}
                        currentPage={currentPage}
                        onHandlePrevPage={handlePrevPage}
                        onHandleNextPage={handleNextPage}
                        lastPage={lastPage}
                        onHandleChangePage={handleChangePage}
                    />
                </div>
            }

        </>
    );
}
