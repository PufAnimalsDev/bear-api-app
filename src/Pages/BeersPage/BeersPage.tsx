import { useMemo, useState, useEffect } from 'react';
import { Bears } from '../../types/Bears';
import { BearsList } from '../../components/BearsList';
import { Pagination } from '../../components/Pagination/Pagination';
import { BeerPage } from '../BeerPage';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Loader } from '../../components/Loader';
import { getBeers } from '../../api/beers';

export const BeersPage: React.FC = () => {
  const [result, setResult] = useState<Bears[]>([]);
  const [result2, setResult2] = useState<Bears[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const perPageValue = 12;
  const { beerId } = useParams();

  const loadBeers = async (
    URL: string,
    setResult: (value: React.SetStateAction<Bears[]>) => void,
  ) => {
    try {
      setIsLoading(true);
      const loadedBeer = await getBeers(URL);
      setResult(loadedBeer);
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
    loadBeers('?per_page=80', setResult);
    loadBeers('?page=2&per_page=40', setResult2);
  }, []);

  const allBeers = useMemo(() => {
    return result.concat(result2);
  }, [result2, result]);

  const indexOfLastBeer = currentPage * perPageValue;
  const indexOfFirstBeer = indexOfLastBeer - perPageValue;
  const lastPage = Math.ceil(allBeers.length / perPageValue);

  const pages = (amount: number) => {
    const numberedPages = [];

    for (let i = 1; i <= amount; i += 1) {
      numberedPages.push(i);
    }

    return numberedPages;
  };

  const currentBeers = useMemo(() => {
    return allBeers.slice(indexOfFirstBeer, indexOfLastBeer);
  }, [indexOfFirstBeer, indexOfLastBeer, allBeers]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage !== lastPage ? currentPage + 1 : currentPage));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage !== 1 ? currentPage - 1 : currentPage));
  };

  const handleChangePage = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (

    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          {
            !hasError && beerId ? (
              <BeerPage id={Number(beerId)}
                bearsList={currentBeers} />
            ) : (
              <>
                <Header headTitle='Beers' />
                <div className='page-container container'>

                  <BearsList bearsList={currentBeers} />
                  <Pagination
                    total={pages(lastPage)}
                    currentPage={currentPage}
                    onHandlePrevPage={handlePrevPage}
                    onHandleNextPage={handleNextPage}
                    lastPage={lastPage}
                    onHandleChangePage={handleChangePage}
                  />
                </div></>

            )
          }
        </>)}
    </>
  );
};
