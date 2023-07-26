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
    handleSaveNewInvoice: () => {}
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
    newInvoiceItems: [],
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
}