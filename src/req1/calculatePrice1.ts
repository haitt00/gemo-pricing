
import {CoffeeOrder} from './coffeeOrder.model'

export default function calculatePrice1(order: CoffeeOrder): number {
    let price = 2; // Base price for small hot drink without cream
  
    if (order.drinkType === 'hot' && order.size === 'L') {
        throw new Error('Hot drinks cannot be ordered in size L');
    }
  
    switch (order.size) {
      case 'M':
        price += 0.5;
        break;
      case 'L':
        price += 1;
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
  
    return price;
  }