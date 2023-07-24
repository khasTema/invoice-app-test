import { generateRandomID } from "./generateRandomID";

describe('generateRandomID_function', () => {

    // Tests that the function returns a string with length 6
    it('returns a string with length 6', () => {
        const id = generateRandomID();
        expect(id).toHaveLength(6);
    });

    // Tests that the function generates random letters and numbers
    it('generates random letters and numbers', () => {
        const id1 = generateRandomID();
        const id2 = generateRandomID();
        expect(id1).not.toEqual(id2);
    });

    // Tests that the function does not generate the same ID twice
    it('does not generate the same ID twice', () => {
        const ids = new Set();
        for (let i = 0; i < 1000; i++) {
            const id = generateRandomID();
            expect(ids.has(id)).toBe(false);
            ids.add(id);
        }
    });

    // Tests that the function does not generate IDs with special characters
    it('does not generate IDs with special characters', () => {
        const id = generateRandomID();
        expect(/^[A-Z0-9]*$/.test(id)).toBe(true);
    });

    // Tests that the function does not generate IDs with lowercase letters
    it('does not generate IDs with lowercase letters', () => {
        const id = generateRandomID();
        expect(id).toEqual(id.toUpperCase());
    });

    // Tests that the function can generate IDs with the same length of 6
    it('generates IDs with the same length', () => {
        const id1 = generateRandomID();
        const id2 = generateRandomID();
        expect(id1.length).toEqual(6);
        expect(id2.length).toEqual(6);
    });
});
