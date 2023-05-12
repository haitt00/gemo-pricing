import calculatePrice from '../src/req3/calculatePrice3'
import { DrinkOrder } from '../src/req3/drinkOrder.model';

describe('test calculatePrice1 function', () => {
    test('base price', () => {
        const order: DrinkOrder = {
            type: 'coffee',
            milk: 'none',
            drinkType: 'hot',
            size: 'S',
            whippedCream: false,
        };
        expect(calculatePrice(order)).toBe(2);
    });

    test('unavailable size', () => {
        const order: DrinkOrder = {
            type: 'coffee',
            milk: 'none',
            drinkType: 'hot',
            size: 'L',
            whippedCream: false,
        };
        expect(() => calculatePrice(order)).toThrow('Hot drinks cannot be ordered in size L');
    });

    test('blended M price', () => {
        const order: DrinkOrder = {
            type: 'coffee',
            milk: 'none',
            drinkType: 'blended',
            size: 'M',
            whippedCream: false,
        };
        expect(calculatePrice(order)).toBe(3.5);
    });

    test('whipped cream L price', () => {
        const order: DrinkOrder = {
            type: 'coffee',
            milk: 'none',
            drinkType: 'cold',
            size: 'L',
            whippedCream: true,
        };
        expect(calculatePrice(order)).toBe(3.5);
    });

    test('milktea base', () => {
        const order: DrinkOrder = {
            type: 'milktea',
            milk: 'none',
            drinkType: 'hot',
            size: 'S',
            whippedCream: false,
        };
        expect(calculatePrice(order)).toBe(2.25);
    });

    test('milktea XL', () => {
        const order: DrinkOrder = {
            type: 'milktea',
            milk: 'none',
            drinkType: 'hot',
            size: 'XL',
            whippedCream: false,
        };
        expect(calculatePrice(order)).toBe(3.75);
    });

    test('milktea almond milk', () => {
        const order: DrinkOrder = {
            type: 'milktea',
            milk: 'almond',
            drinkType: 'hot',
            size: 'S',
            whippedCream: false,
        };
        expect(calculatePrice(order)).toBe(2.75);
    });

    test('milktea almond milk 2pumps chocosause', () => {
        const order: DrinkOrder = {
            type: 'milktea',
            milk: 'almond',
            drinkType: 'hot',
            size: 'S',
            whippedCream: false,
            chocoSaucePumps: 2
        };
        expect(calculatePrice(order)).toBe(2.75);
    });

    test('milktea almond milk 3pumps chocosause', () => {
        const order: DrinkOrder = {
            type: 'milktea',
            milk: 'almond',
            drinkType: 'hot',
            size: 'S',
            whippedCream: false,
            chocoSaucePumps: 3
        };
        expect(calculatePrice(order)).toBe(3.25);
    });
});