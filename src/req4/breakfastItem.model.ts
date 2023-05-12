export type BreakfastItem = Sandwich | Bagel

interface Sandwich {
    type: 'sandwich';
    filling?: 'egg' | 'turkey';
}

interface Bagel {
    type: 'bagel';
    topping?: 'butter' | 'cream cheese';
}