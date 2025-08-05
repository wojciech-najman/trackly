import { Item } from '../models/item';

export interface StockPerStore {
  [key: string]: number;
}

export const calculateStockPerStore = (item: Item): StockPerStore => {
  const stockPerStore = {};

  item.stock?.forEach((stock) => {
    const storeName = stock.store.name;

    if (stockPerStore[storeName]) {
      stockPerStore[storeName] = stockPerStore[storeName] + stock.quantity;
    } else {
      stockPerStore[storeName] = stock.quantity;
    }
  });

  return stockPerStore;
};
