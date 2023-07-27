import { createContext, useMemo, useState} from "react";
import { IContextProps, IFormContext } from "./interface";
import { Address, Invoice, Item } from "../interface/interface";
import { FormContextDefaults } from "./defaults";


export const InvoiceFormContext = createContext<IFormContext>(FormContextDefaults);

export const InvoiceFormContextProvider:React.FC<IContextProps> = ({children}) => {

    const [ senderAddress, setSenderAddress ] = useState<Address>(FormContextDefaults.senderAddress);
    const [ clientAddress, setClientAddress ] = useState<Address>(FormContextDefaults.clientAddress);
    const [ newInvoiceItems, setNewInvoiceItems ] = useState<Item[]>(FormContextDefaults.newInvoiceItems);
    const [ newInvoiceData, setNewInvoiceData ] = useState<Invoice>(FormContextDefaults.newInvoiceData);

    const handleEditingForm = useMemo(() => (currentInvoice: Invoice): void => {
      // console.log(currentInvoice);
      setNewInvoiceData(currentInvoice);
      setSenderAddress(currentInvoice.senderAddress)
      setClientAddress(currentInvoice.clientAddress)
      setNewInvoiceItems(currentInvoice.items)
  }, []);

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
        setNewInvoiceItems([...newInvoiceItems, FormContextDefaults.newInvoiceItems[0]])
    };

    const removeItem = (index: number):void => {
        const updatedItems = newInvoiceItems.filter((_, i) => i !== index);
        setNewInvoiceItems(updatedItems)
    };

    const handleNewInvoiceDataChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>):void => {
        const { name, value } = e.target;
        setNewInvoiceData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };

      const handleClearForm = (): void => {
        setSenderAddress(FormContextDefaults.senderAddress);
        setClientAddress(FormContextDefaults.clientAddress);
        setNewInvoiceItems(FormContextDefaults.newInvoiceItems);
        setNewInvoiceData(FormContextDefaults.newInvoiceData);
      }

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
            handleEditingForm,
            handleClearForm
        }}>
            { children }
        </InvoiceFormContext.Provider>
    )
} 