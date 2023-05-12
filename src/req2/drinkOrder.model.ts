export interface DrinkOrder {
    type: 'coffee' | 'milktea';
    drinkType: 'hot' | 'cold' | 'blended';
    size: 'S' | 'M' | 'L' | 'XL';
    whippedCream: boolean;
    milk: 'none' | 'whole' | 'almond';
}
  