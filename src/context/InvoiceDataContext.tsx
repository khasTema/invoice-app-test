import { createContext, ReactNode, useState, useEffect, useMemo } from "react";
import { Invoice } from "../interface/interface";

interface Context {
    data: Invoice[] | null,
    isListShown: boolean,
    numberOfInvoices: number
}

export const InvoiceDataContext = createContext<Context>({
    data : null,
    isListShown: false,
    numberOfInvoices: 0
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

    return (
        <InvoiceDataContext.Provider value={{
            data,
            isListShown, 
            numberOfInvoices
        }}>
            { children }
        </InvoiceDataContext.Provider>
    )
}