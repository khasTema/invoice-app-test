import { createContext, useState} from "react";
import { IContextProps, IFormContext } from "./interface";
import { Address, Invoice, Item } from "../interface/interface";
import { FormContextDefaults } from "./defaults";

export const InvoiceFormContext = createContext<IFormContext>(FormContextDefaults);

export const InvoiceFormContextProvider:React.FC<IContextProps> = ({children}) => {

    const [ senderAddress, setSenderAddress ] = useState<Address>({
        street: '',
        city: '',
        postCode: '',
        country: ''
    });

    const handleSenderAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSenderAddress((prevAddress) => ({
          ...prevAddress,
          [name]: value
        }));
        setNewInvoiceData((prevData) => ({
            ...prevData,
            senderAddress: {
              ...prevData.senderAddress,
              [name]: value
            }
          }));
      };

    const [ clientAddress, setClientAddress ] = useState<Address>({
        street: '',
        city: '',
        postCode: '',
        country: ''
    });

    const handleClientAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setClientAddress((prevAddress) => ({
          ...prevAddress,
          [name]: value
        }));
        setNewInvoiceData((prevData) => ({
            ...prevData,
            clientAddress: {
              ...prevData.clientAddress,
              [name]: value
            }
          }));
      };


    const [ newInvoiceItems, setNewInvoiceItems ] = useState<Item[]>([
        {
            name: '',
            quantity: 0,
            price: 0,
            total: 0 
        }
    ]);

    const handleInvoiceItemsChange = (index: number, field: string, value: string | number): void => {
        const updatedItems = [...newInvoiceItems];
        updatedItems[index] = { ...updatedItems[index], [field]: value };
        // Calculate the total for the specific item based on quantity and price
        const item = updatedItems[index];
        const quantity = parseFloat(item.quantity.toString()); 
        const price = parseFloat(item.price.toString());
        const total = quantity * price;
      
        updatedItems[index].total = total;
      
        setNewInvoiceItems(updatedItems);
        setNewInvoiceData({
          ...newInvoiceData,
          items: updatedItems, // Use the updatedItems array to set the items in newInvoiceData
        });
      };

    const addNewItem = ():void => {
        const newItem = {
            name: '',
            quantity: 0,
            price: 0,
            total: 0 
        }
        setNewInvoiceItems([...newInvoiceItems, newItem])
    };

    const removeItem = (index: number):void => {
        const updatedItems = newInvoiceItems.filter((_, i) => i !== index);
        setNewInvoiceItems(updatedItems)
    };

    const [ newInvoiceData, setNewInvoiceData ] = useState<Invoice>({
        id: '',
        createdAt: '',
        paymentDue: '',
        description: '',
        paymentTerms: 20,
        clientName: '',
        clientEmail: '',
        status: '',
        senderAddress: senderAddress,
        clientAddress: clientAddress,
        items: [],
        total: parseFloat('')
    });

    const handleNewInvoiceDataChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>):void => {
        const { name, value } = e.target;
        setNewInvoiceData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };


    return(
        <InvoiceFormContext.Provider value={{
            senderAddress,
            clientAddress,
            newInvoiceItems,
            newInvoiceData,
            handleSenderAddressChange,
            handleClientAddressChange,
            handleInvoiceItemsChange,
            addNewItem,
            removeItem,
            handleNewInvoiceDataChange,
        }}>
            {  children}
        </InvoiceFormContext.Provider>
    )
} 