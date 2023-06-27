import { Ingredients } from './Ingredients';
export interface BeerDetails {
  id: number;
  name: string;
  tagline: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  ingredients: Ingredients;
}