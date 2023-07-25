import { useContext, useState, useEffect } from "react"
import { InvoiceDataContext } from "../context/InvoiceDataContext"
import { Invoice } from "../interface/interface"

interface UseCurrentInvoiceProps {
    id?: string
}

export const useCurrentInvoice = ({id}: UseCurrentInvoiceProps) => {
    
    const { data } = useContext(InvoiceDataContext)
    const [ currentInvoice, setCurrentInvoice ] = useState<Invoice>();

    useEffect(() => {
        let invoice = data?.find(item => item.id === id)
        setCurrentInvoice(invoice)
    },[id, data])

    return {
        currentInvoice
    }
}