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

    const {newInvoiceData, handleClearForm} = useContext(InvoiceFormContext)
    
    const { data, setData, isListShown } = useInitialData()
    
    const [ filteredData, setFilteredData ] = useState<Invoice[]>([])
    const [ isModalShown, setIsModalShown ] = useState<boolean>(false)
    const [ isFormModalShown, setIsFormModalSHown ] = useState<boolean>(false)
    const [ error, setError ] = useState<boolean>(false)

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
        setError(false)
    }

    // closes modal when logo is clicked
    const handleCloseModalForm = ():void => {
        setIsFormModalSHown(false)
        setError(false)
        handleClearForm()
    }

    const handleFormFilledCheck = (): boolean => {
        const totalCheck = calculateTotalSum(newInvoiceData.items)
        return (!!newInvoiceData.clientName 
        && !!newInvoiceData.clientEmail
        && !!newInvoiceData.createdAt
        && !!newInvoiceData.description
        && !!newInvoiceData.clientAddress.street
        && !!newInvoiceData.clientAddress.city
        && !!newInvoiceData.senderAddress.street
        && !!totalCheck)
    }

    const handleUpdateInvoice = (id: string):void => {
            const updatedData = data.filter(invoice => invoice.id !== id)
            // if(newInvoiceData.status === DRAFT && n)
            const updatedItem = {
                ...newInvoiceData,
                total: calculateTotalSum(newInvoiceData.items),
                status: newInvoiceData.status === DRAFT && calculateTotalSum(newInvoiceData.items) ? PENDING : DRAFT
            }
            setData([ updatedItem ,...updatedData])
            handleClearForm();
            setError(false);
            setIsFormModalSHown(false);
    }

    const handleCreateInvoice = (): void => {
            setError(false)
            const newInvoice = {
                ...newInvoiceData,
                id: newInvoiceData.id || generateRandomID(), //if no id it will create new
                paymentDue: calculatePaymentDue(newInvoiceData.createdAt, newInvoiceData.paymentTerms),
                status: PENDING,
                total: calculateTotalSum(newInvoiceData.items)
            }
            setData([newInvoice, ...data])
            setIsFormModalSHown(false)
            handleClearForm()
            setError(false)
    }

    const handleSaveNewInvoice = ():void => {
        if(newInvoiceData.id){
            handleUpdateInvoice(newInvoiceData.id)
        } else if(handleFormFilledCheck()) {
            handleCreateInvoice()
        } else {
            setError(true)
        }
    }

    const handleSaveAsDraft = ():void => {
        const draftInvoice = {
            ...newInvoiceData,
            id: generateRandomID(),
            total: calculateTotalSum(newInvoiceData.items),
            status: DRAFT
        }
        setData([draftInvoice, ...data])
        setIsFormModalSHown(false)
        handleClearForm()
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
            handleSaveNewInvoice,
            handleSaveAsDraft,
            error
        }}>
            { children }
        </InvoiceDataContext.Provider>
    )
}