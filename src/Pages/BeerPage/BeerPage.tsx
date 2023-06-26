import { useState, useEffect } from 'react';

interface Malt {
  name: string;
  amount: {
    value: number;
    unit: string;
  };
}

interface Hops {
  name: string;
  amount: {
    value: number;
    unit: string;
  };
}

interface Ingredients {
  malt: Malt[];
  hops: Hops[];
  yeast: string;
}

interface Props {
  id: number;
  name: string;
  tagline: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  ingredients: Ingredients;
}

interface BeerPageProps {
  id: number;
}

export const BeerPage = (props: BeerPageProps) => {
  const { id } = props;
  const [result, setResult] = useState<Props>();
  const [ingredients, setIngredients] = useState<Ingredients>();

  useEffect(() => {
    const getData = async () => {
      const data = await fetch(`https://api.punkapi.com/v2/beers/${id}`, {
        method: 'GET',
      });
      const jsonData = await data.json();
      setResult(jsonData[0]);
      setIngredients(jsonData[0].ingredients);
    };

    getData();
  }, [id]);

  console.log(ingredients);
  return (
    <div>
      <img src={result?.image_url} alt={result?.name} />
      <div>{result?.name}</div>
      <div>{result?.tagline}</div>
      <div>{result?.description}</div>
      <div>{result?.abv}</div>
      <div>{result?.ibu}</div>
      {ingredients?.malt.map((value) => {
        return (
          <>
            <div>{value.name}</div>
            <div>{value.amount.value}</div>
            <div>{value.amount.unit}</div>
          </>
        );
      })}
      {ingredients?.hops.map((value) => {
        return (
          <>
            <div>{value.name}</div>
            <div>{value.amount.value}</div>
            <div>{value.amount.unit}</div>
          </>
        );
      })}
      <div>{ingredients?.yeast}</div>
    </div>
  );
};
