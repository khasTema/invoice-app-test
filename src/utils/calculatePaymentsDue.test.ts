import { calculatePaymentDue } from "./calculatePaymentDue";



describe('calculatePaymentDue_function', () => {

    // Tests that the function returns a string representing the payment due date in the format 'YYYY-MM-DD' when valid arguments are passed
    it('test_happy_path_valid_arguments', () => {
        const createdAt = '2022-01-01';
        const paymentTerms = 30;
        const expectedPaymentDueDate = '2022-01-31';

        const result = calculatePaymentDue(createdAt, paymentTerms);

        expect(result).toBe(expectedPaymentDueDate);
    });

    // Tests that the function returns a string representing the payment due date in the format 'YYYY-MM-DD' when the payment due date falls on a weekend
    it('test_general_behaviour_payment_due_on_weekend', () => {
        const createdAt = '2022-01-01';
        const paymentTerms = 2;
        const expectedPaymentDueDate = '2022-01-03';

        const result = calculatePaymentDue(createdAt, paymentTerms);

        expect(result).toBe(expectedPaymentDueDate);
    });

    // Tests that the function returns a string representing the payment due date in the format 'YYYY-MM-DD' when the payment due date falls on a holiday
    it('test_general_behaviour_payment_due_on_holiday', () => {
        const createdAt = '2022-01-01';
        const paymentTerms = 5;
        const expectedPaymentDueDate = '2022-01-06';

        const result = calculatePaymentDue(createdAt, paymentTerms);

        expect(result).toBe(expectedPaymentDueDate);
    });
});
