export const generateRandomID = (): string => {
    const letters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers: string = '0123456789';
  
    let randomID: string = '';
    
    // Generate two random letters
    for (let i: number = 0; i < 2; i++) {
      const randomLetterIndex: number = Math.floor(Math.random() * letters.length);
      randomID += letters.charAt(randomLetterIndex);
    }
    
    // Generate four random numbers
    for (let i: number = 0; i < 4; i++) {
      const randomNumberIndex: number = Math.floor(Math.random() * numbers.length);
      randomID += numbers.charAt(randomNumberIndex);
    }
    
    return randomID;
  }