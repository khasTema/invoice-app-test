export const calculatePaymentDue = (createdAt: string, paymentTerms: number ) => {
    if (createdAt && paymentTerms) {
      const createdAtDate = new Date(createdAt);
      const paymentDueDate = new Date(createdAtDate);
      paymentDueDate.setDate(paymentDueDate.getDate() + paymentTerms);
      return paymentDueDate.toISOString().substr(0, 10); // Format the date as 'YYYY-MM-DD'
    }
    return '';
  };