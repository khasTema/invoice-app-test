import { Invoice } from "../interface/interface"
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
    handleTogleFormModal: () => void
}

export interface IContextProps {
    children: ReactNode
}