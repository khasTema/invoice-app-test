import { createContext, useState, useEffect, useMemo } from "react";
import { Invoice } from "../interface/interface";
import { useNavigate } from "react-router-dom";
import { PAID, PENDING } from "../config/constants";
import { IContext, IContextProps } from './interface'

export const InvoiceDataContext = createContext<IContext>({
    data : null,
    isListShown: false,
    numberOfInvoices: 0,
    handleDelete: (invoiceId) => {},
    isModalShown: false,
    handleToggleModal: () => {},
    handleStatusChange: () => {}
}) 

export const InvoiceDataContextProvider:React.FC<IContextProps> = ({children}) => {

    const [ data, setData ] = useState<Invoice[]>([])
    const [ isListShown, setIsListShown ] = useState<boolean>(false)
    const [ isModalShown, setIsModalShown ] = useState<boolean>(false)
    const navigate = useNavigate()

    // getting initila data
    useEffect(()=> {
        const getData = async () =>  {
            try {
                const res = await fetch('data/data.json');
                const json = await res.json()
                setData(json)
                setIsListShown(true)
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsListShown(false)
            }
        };
            setTimeout(()=> getData(), 1000)  
    }, [])

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

    return (
        <InvoiceDataContext.Provider value={{
            data,
            isListShown, 
            numberOfInvoices,
            handleDelete,
            isModalShown,
            handleToggleModal,
            handleStatusChange
        }}>
            { children }
        </InvoiceDataContext.Provider>
    )
}