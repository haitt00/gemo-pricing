
import { DrinkOrder } from './drinkOrder.model';

export default function calculatePrice3(order: DrinkOrder): number {

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

  return price;
  }