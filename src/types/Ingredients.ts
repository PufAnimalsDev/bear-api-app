import { Malt } from './Malt';
import { Hops } from './Hops';

export interface Ingredients {
  malt: Malt[];
  hops: Hops[];
  yeast: string;
}
