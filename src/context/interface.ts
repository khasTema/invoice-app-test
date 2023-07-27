import { Address, Invoice, Item } from "../interface/interface"
import { ReactNode } from "react"

export interface IContext {
    data: Invoice[] | null,
    filteredData: Invoice[] | null,
    isListShown: boolean,
    numberOfInvoices: number
    handleDelete: (invoiceId: string) => void,
    isModalShown: boolean
    handleToggleModal: () => void,
    handleStatusChange: (invoiceId: string) => void,
    handleStatusFilter: (status: string) => void,
    handleClearFilter: () => void,
    isFormModalShown: boolean,
    handleTogleFormModal: () => void,
    handleCloseModalForm: () => void,
    handleSaveNewInvoice: () => void,
    handleSaveAsDraft: () => void,
    error: boolean
}

export interface IContextProps {
    children: ReactNode
}

export interface IFormContext {
    senderAddress: Address
    clientAddress: Address
    newInvoiceItems: Item[]
    newInvoiceData: Invoice
    handleSenderAddressChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleClientAddressChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleInvoiceItemsChange: (index: number, field: string, value: string | number) => void
    addNewItem: () => void
    removeItem: (index: number) => void
    handleNewInvoiceDataChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void
    handleEditingForm: (currentInvoice : Invoice) => void
    handleClearForm: () => void
}