import { BreakfastItem } from "./breakfastItem.model";

export interface DrinkOrder {
    type: 'coffee' | 'milktea';
    drinkType: 'hot' | 'cold' | 'blended';
    size: 'S' | 'M' | 'L' | 'XL';
    whippedCream: boolean;
    milk: 'none' | 'whole' | 'almond';
    chocoSaucePumps?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    breakfastItem?: BreakfastItem
}
  