export const formatDate = (inputDate: string): string => {
    const dateParts: string[] = inputDate.split('-');
    const year: string = dateParts[0];
    const month: string = dateParts[1];
    const day: string = dateParts[2];
  
    const months: string[] = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
  
    const abbreviatedMonth: string = months[Number(month) - 1];
    const lastTwoDigitsOfYear: string = year.slice(-2);
  
    const formattedDate: string = `${day} ${abbreviatedMonth} ${lastTwoDigitsOfYear}`;
    return formattedDate;
  };
  