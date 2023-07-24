import { formatDate } from "./formatDate";


describe('formatDate_function', () => {

    // Tests that a valid date string in the format 'yyyy-mm-dd' returns a formatted date string in the format 'dd MMM yy'.
    it('test_happy_path_valid_date', () => {
        expect(formatDate('2022-01-01')).toEqual('01 Jan 22');
    });

    // Tests that passing a date string with leading zeros in the month or day is processed correctly.
    it('test_general_behaviour_leading_zeros', () => {
        const inputDate = '2022-01-01';
        const expectedOutput = '01 Jan 22';
        expect(formatDate(inputDate)).toEqual(expectedOutput);
    });
});
