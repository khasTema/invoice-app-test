export interface Invoice {
    id: string;
    createdAt: string;
    paymentDue: string;
    description: string;
    paymentTerms: number;
    clientName: string;
    clientEmail: string;
    status: string;
    senderAddress: Address;
    clientAddress: Address;
    items: Item[];
    total: number;
  }
  
  export interface Item {
    name: string;
    quantity: number;
    price: number;
    total: number;
  }
  
  export interface Address {
    street: string;
    city: string;
    postCode: string;
    country: string;
  }

  export interface InvoiceBlockProps {
    invoice: Invoice
}

export interface ItemProps {
  item: Item
}

export interface InvoiceIdProp {
  invoiceId: string 
}

export interface InvoiceViewProps {
  currentInvoice: Invoice,
}

export interface BadgeStatusProp {
  status: string
}