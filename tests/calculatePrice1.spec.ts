import calculatePrice from '../src/req1/calculatePrice1'
import { CoffeeOrder } from '../src/req1/coffeeOrder.model';


describe('test calculatePrice1 function', () => {

    test('base price', () => {
        // const order: CoffeeOrder = {
        //     drinkType: 'hot',
        //     size: 'S',
        //     whippedCream: false,
        // };
        expect(calculatePrice({
            drinkType: 'hot',
            size: 'S',
            whippedCream: false,
        })).toBe(2);
    });

    test('unavailable size', () => {
        expect(() => calculatePrice({
            drinkType: 'hot',
            size: 'L',
            whippedCream: false,
        })).toThrow('Hot drinks cannot be ordered in size L');
    });

    // test('blended M price', () => {
    //     const order: CoffeeOrder = {
    //         drinkType: 'blended',
    //         size: 'M',
    //         whippedCream: false,
    //     };
    //     expect(calculatePrice(order)).toBe(3.5);
    // });

    // test('whipped cream L price', () => {
    //     const order: CoffeeOrder = {
    //         drinkType: 'cold',
    //         size: 'L',
    //         whippedCream: true,
    //     };
    //     expect(calculatePrice(order)).toBe(3.5);
    // });
});