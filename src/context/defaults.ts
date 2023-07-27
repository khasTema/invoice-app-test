export const DataContextDefault = {
    data : null,
    filteredData: null,
    isListShown: false,
    numberOfInvoices: 0,
    handleDelete: () => {},
    isModalShown: false,
    handleToggleModal: () => {},
    handleStatusChange: () => {},
    handleStatusFilter: () => {},
    handleClearFilter: () => {},
    isFormModalShown: false,
    handleTogleFormModal: () => {},
    handleCloseModalForm: () => {},
    handleSaveNewInvoice: () => {},
    handleSaveAsDraft: () => {},
    error: false
}

export const FormContextDefaults = {
    senderAddress: {
        street: '',
        city: '',
        postCode: '',
        country: ''
    },
    clientAddress: {
        street: '',
        city: '',
        postCode: '',
        country: ''
    },
    newInvoiceItems: [
        {
            name: '',
            quantity: 0,
            price: 0,
            total: 0 
        }
    ],
    newInvoiceData: {
        id: '',
        createdAt: '',
        paymentDue: '',
        description: '',
        paymentTerms: 20,
        clientName: '',
        clientEmail: '',
        status: '',
        senderAddress:  {
                street: '',
                city: '',
                postCode: '',
                country: ''
            },
        clientAddress:  {
                street: '',
                city: '',
                postCode: '',
                country: ''
            },
        items: [],
        total: 0,
    },
    handleSenderAddressChange: () => {},
    handleClientAddressChange: () => {},
    handleInvoiceItemsChange: () => {},
    addNewItem: () => {},
    removeItem: () => {},
    handleNewInvoiceDataChange: () => {},
    handleEditingForm: () => {},
    handleClearForm: () => {}
}