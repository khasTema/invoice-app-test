import { createContext, ReactNode, useState, useEffect, useMemo } from "react";
import { Invoice } from "../interface/interface";
import { useNavigate } from "react-router-dom";

interface Context {
    data: Invoice[] | null,
    isListShown: boolean,
    numberOfInvoices: number
    handleDelete: (invoiceId: string) => void,
    isModalShown: boolean
    handleToggleModal: () => void
}

export const InvoiceDataContext = createContext<Context>({
    data : null,
    isListShown: false,
    numberOfInvoices: 0,
    handleDelete: (invoiceId) => {},
    isModalShown: false,
    handleToggleModal: () => {}
}) 

interface ContextProps {
    children: ReactNode
}

export const InvoiceDataContextProvider:React.FC<ContextProps> = ({children}) => {

    const [ data, setData ] = useState<Invoice[]>([])
    const [ isListShown, setIsListShown ] = useState<boolean>(false)
    console.log(data)
  
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

    const numberOfInvoices: number = useMemo(()=> data.length, [data] )

    const navigate = useNavigate()

    const handleDelete = (invoiceId: string):void => {
        console.log('dlete from the context')
        const updatedData = [...data].filter(invoice => invoice.id !== invoiceId)
        setData(updatedData)
        setTimeout(() => navigate('/'), 1000)
    }

    // Modal function
    const [ isModalShown, setIsModalShown ] = useState<boolean>(true) 

    const handleToggleModal = ():void => {
        setIsModalShown(prev => !prev)
    }

    return (
        <InvoiceDataContext.Provider value={{
            data,
            isListShown, 
            numberOfInvoices,
            handleDelete,
            isModalShown,
            handleToggleModal
        }}>
            { children }
        </InvoiceDataContext.Provider>
    )
}