import { createContext, useState, useMemo, useContext } from "react";
import { Invoice} from "../interface/interface";
import { useNavigate } from "react-router-dom";
import { DRAFT, PAID, PENDING } from "../config/constants";
import { IContext, IContextProps } from './interface'
import { InvoiceFormContext } from "./InvoiceFormContext";
import { DataContextDefault } from "./defaults";
import { useInitialData } from "../hooks/useInitialData";
import { generateRandomID } from "../utils/generateRandomID";
import { calculateTotalSum } from "../utils/calculateTotalSum";
import { calculatePaymentDue } from "../utils/calculatePaymentDue";

export const InvoiceDataContext = createContext<IContext>(DataContextDefault) 

export const InvoiceDataContextProvider:React.FC<IContextProps> = ({children}) => {

    const {newInvoiceData} = useContext(InvoiceFormContext)
    
    const { data, setData, isListShown } = useInitialData()
    const [ filteredData, setFilteredData ] = useState<Invoice[]>([])
    const [ isModalShown, setIsModalShown ] = useState<boolean>(false)
    const [ isFormModalShown, setIsFormModalSHown ] = useState<boolean>(false)
    const navigate = useNavigate()


    // counting number of invoices
    const numberOfInvoices: number = useMemo(()=> data.length, [data] )

    // delete function fired from modal
    const handleDelete = (invoiceId: string):void => {
        const updatedData = [...data].filter(invoice => invoice.id !== invoiceId)
        setData(updatedData)
        setIsModalShown(prev => !prev)
        setTimeout(() => navigate('/'), 1000)
    }

    // Modal function
    const handleToggleModal = ():void => {
        setIsModalShown(prev => !prev)
    }
    
    //invoice status updating
    const handleStatusChange = (invoiceId: string): void => {
        const itemIndex = data.findIndex(item => item.id === invoiceId);
        if (itemIndex !== -1) {
            const currentStatus = data[itemIndex].status;
        
            if (currentStatus === PENDING) {
                const updatedData = [...data];
                updatedData[itemIndex] = {
                    ...updatedData[itemIndex],
                    status: PAID,
            };
                setData(updatedData);
            }
        }
    };

    // filtering
    const handleStatusFilter = (status: string):void => {
        const updatedData = [...data].filter(item => item.status === status)
        setFilteredData(updatedData)
    }

    const handleClearFilter = ():void => {
        setFilteredData([])
    }

    // form modal
    const handleTogleFormModal = ():void => {
        setIsFormModalSHown(prev => !prev)
    }

    // TEMPORARY FUNCTION chek it later if it is needed and decide what to do
    // for now it closes modal when logo is clicked
    const handleCloseModalForm = ():void => {
        setIsFormModalSHown(false)
    }

    const handleSaveNewInvoice = ():void => {
        const newInvoice = {
            ...newInvoiceData,
            id: generateRandomID(),
            paymentDue: calculatePaymentDue(newInvoiceData.createdAt, newInvoiceData.paymentTerms),
            status: DRAFT,
            total: calculateTotalSum(newInvoiceData.items)
        }
        setData([newInvoice, ...data])
        setIsFormModalSHown(false)
    }

    return (
        <InvoiceDataContext.Provider value={{
            data,
            filteredData,
            isListShown, 
            numberOfInvoices,
            handleDelete,
            isModalShown,
            handleToggleModal,
            handleStatusChange,
            handleStatusFilter,
            handleClearFilter,
            isFormModalShown,
            handleTogleFormModal,
            handleCloseModalForm,
            handleSaveNewInvoice
        }}>
            { children }
        </InvoiceDataContext.Provider>
    )
}