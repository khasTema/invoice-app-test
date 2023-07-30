### Invoicing Application - README

## Brief

I have successfully implemented the application using TypeScript and React, adhering to the design files provided in the /designs folder. While I strived to achieve pixel-perfection, my primary focus was on ensuring the functionality meets the requirements outlined in the Expected Behaviour section. I have thoroughly tested the application to ensure it behaves in a sensible and thought-out manner.

## Key Points:

- All functionality, including creating, reading, updating, and deleting invoices, is working as expected.
- I have generated unique IDs for each new invoice in the format of 2 random uppercased letters followed by 4 random numbers.
- Users can create invoices as drafts or pending. Clicking "Save as Draft" allows leaving form fields blank, while clicking "Save & Send" requires all fields to be filled and sets the status to "pending."
- The paymentDue property updates based on the createdAt date plus the specified payment terms.
- The total field correctly displays the sum of all items on the invoice.
- During invoice editing, all fields are required when saving changes, and clicking "Cancel" resets any unsaved changes.
If editing a "draft" invoice, the status updates to "pending" when clicking "Save Changes."
- Users can mark invoices as paid using the "Mark as Paid" button, changing the status to "paid."
- I also have considered implementing a confirmation modal when attempting to delete invoices.

While I have covered a significant volume of tasks, I acknowledge that there could be further improvements, such as adding more input validation, refactoring to reduce repeated code, and enhancing the overall user experience. I attempted to utilize Tailwind CSS for styling to streamline the design process.

I thoroughly enjoyed working on this project and appreciate the opportunity to showcase my skills as a Frontend Developer. I kindly request proper feedback and review of my work to help me grow and learn from this experience.

# Thank you once again for considering my candidacy for the Frontend Developer role in your esteemed company. I look forward to hearing from you soon.

