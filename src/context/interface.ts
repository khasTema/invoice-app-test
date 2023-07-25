import { Invoice } from "../interface/interface"
import { ReactNode } from "react"

export interface IContext {
    data: Invoice[] | null,
    isListShown: boolean,
    numberOfInvoices: number
    handleDelete: (invoiceId: string) => void,
    isModalShown: boolean
    handleToggleModal: () => void,
    handleStatusChange: (invoiceId: string) => void
}

export interface IContextProps {
    children: ReactNode
}