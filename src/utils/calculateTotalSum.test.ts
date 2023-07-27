import { Item } from "../interface/interface";
import { calculateTotalSum } from "./calculateTotalSum";

describe('calculateTotalSum_function', () => {

    // Tests that the function returns 0 when passed an empty array
    it('test_empty_array_returns_0', () => {
        const arr: Item[] = [];
        const result = calculateTotalSum(arr);
        expect(result).toBe(0);
    });

    // Tests that the function correctly calculates total sum when passed an array of items with valid total values
    it('test_valid_total_values', () => {
        const arr: Item[] = [
            { name: 'Item 1', quantity: 2, price: 10, total: 20 },
            { name: 'Item 2', quantity: 3, price: 5, total: 15 },
            { name: 'Item 3', quantity: 1, price: 8, total: 8 }
        ];
        const result = calculateTotalSum(arr);
        expect(result).toBe(43);
    });

    // Tests that the function returns 0 when passed an array of items with all total values equal to 0
    it('test_all_total_values_0', () => {
        const arr: Item[] = [
            { name: 'Item 1', quantity: 2, price: 10, total: 0 },
            { name: 'Item 2', quantity: 3, price: 5, total: 0 },
            { name: 'Item 3', quantity: 1, price: 8, total: 0 }
        ];
        const result = calculateTotalSum(arr);
        expect(result).toBe(0);
    });

    // Tests that the function correctly calculates total sum when passed an array of items with only one item
    it('test_one_item', () => {
        const arr: Item[] = [
            { name: 'Item 1', quantity: 2, price: 10, total: 20 }
        ];
        const result = calculateTotalSum(arr);
        expect(result).toBe(20);
    });

    // Tests that the function correctly calculates total sum when passed an array of items with only one item and total value equal to 0
    it('test_one_item_total_value_0', () => {
        const arr: Item[] = [
            { name: 'Item 1', quantity: 2, price: 10, total: 0 }
        ];
        const result = calculateTotalSum(arr);
        expect(result).toBe(0);
    });
});
