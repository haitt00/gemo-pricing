
import { BreakfastItem, } from './breakfastItem.model';
import { DrinkOrder } from './drinkOrder.model';

export default function calculatePrice4(order: DrinkOrder): number {

  let price;
  switch (order.type) {
    case 'coffee':
      price = 2;
      break;
    case 'milktea':
      price = 2.25;
      break;
    default:
      break;
  }
  
  if (order.drinkType === 'hot' && (order.size === 'L')) {
      throw new Error('Hot drinks cannot be ordered in size L');
  }

  switch (order.size) {
    case 'M':
      price += 0.5;
      break;
    case 'L':
      price += 1;
      break;
      case 'XL':
        price += 1.5;
        break;
    default:
      break;
  }

  if (order.drinkType === 'blended') {
    price += 1;
  }

  if (order.whippedCream) {
    price += 0.5;
  }

  if (order.milk === 'almond') {
    price += 0.5;
  }

  if(order.drinkType === 'hot' && order.chocoSaucePumps !== undefined && order.chocoSaucePumps! > 2) {
    price += 0.5 * (order.chocoSaucePumps! - 2);
  }
  
  if(order.breakfastItem !== undefined) {
    price += calculatePriceBreakfast(order.breakfastItem!);
  }
  return price;
  }

function calculatePriceBreakfast(breakfastItem: BreakfastItem): number {
  let base = 3;
  if(breakfastItem.type === 'sandwich' && breakfastItem.filling !== undefined) {
    base += 1;
  }
  if(breakfastItem.type === 'bagel' && breakfastItem.topping !== undefined) {
    base += 0.5;
  }
  return base;
}
