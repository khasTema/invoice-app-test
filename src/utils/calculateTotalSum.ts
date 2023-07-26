import { Item } from "../interface/interface";

export const calculateTotalSum = (arr: Item[]) => {
    const totalSum = arr.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.total;
    }, 0);

    return totalSum;
  };