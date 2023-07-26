import React, { useState } from 'react'
import { NewInvoiceHead } from './NewInvoiceHead'
import { EditInvoiceHead } from './EditInvoiceHead'
import { InputField } from '../InputField'
import { AddressInputs } from '../AddressInput'
import { DatePicker } from '../DatePicker'
import { ItemsInput } from '../ItemsInput'
import { FormInvoiceButtons } from './FormInvoiceButtons'

import { Invoice, Address, Item } from '../../interface/interface'

export interface IModalFormProps {
    invoiceId?: string
}

export const ModalForm:React.FC<IModalFormProps> = ({invoiceId}):JSX.Element => {

    const isEditForm: boolean = !!invoiceId 
    const error: boolean = false

    const [ senderAddress, setSenderAddress ] = useState<Address>({
        street: '',
        city: '',
        postCode: '',
        country: ''
    })

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
    })

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
    ])

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
    }

    const removeItem = (index: number):void => {
        const updatedItems = newInvoiceItems.filter((_, i) => i !== index);
        setNewInvoiceItems(updatedItems)
    }

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
    })

    console.log(newInvoiceData)


    const handleNewInvoiceDataChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setNewInvoiceData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };

    

  return (
    <div className='fixed top-0 left-20 w-full h-screen bg-black bg-opacity-60 flex justify-start items-start overflow-y-scroll overflow-x-hidden'>
         <form className='w-2/5 bg-slate-800 p-8 overflow-y-auto'>
           { isEditForm? 
                <EditInvoiceHead  invoiceId={invoiceId}/>  
                : <NewInvoiceHead /> 
            }
           <span className='text-violet-700 text-xs block mb-2'>Bill From</span>
           <AddressInputs
                street={senderAddress.street}
                city={senderAddress.city}
                postCode={senderAddress.postCode}
                country={senderAddress.country}
                error={error}
                handleChange={handleSenderAddressChange}
            />
           <span className='text-violet-700 text-xs block mb-2'>Bill to</span>
           <div className='px-2'>
                <InputField 
                    name={'clientName'} 
                    description={"Client's Name"} 
                    value={newInvoiceData.clientName} 
                    error={error}
                    handleChange={handleNewInvoiceDataChange}
                />
                <InputField 
                    name={'clientEmail'} 
                    description={"Client's Email"} 
                    value={newInvoiceData.clientEmail} 
                    error={error}
                    handleChange={handleNewInvoiceDataChange}
                />
           </div>
           <AddressInputs
                street={clientAddress.street}
                city={clientAddress.city}
                postCode={clientAddress.postCode}
                country={clientAddress.country}
                error={error}
                handleChange={handleClientAddressChange} 
            />
           <DatePicker 
                handleChange={handleNewInvoiceDataChange}
                createdAt={newInvoiceData.createdAt}
                paymentTerms={newInvoiceData.paymentTerms}
           />
           <div className="px-2">
                <InputField 
                    name={'description'} 
                    description={"Project Description"} 
                    value={newInvoiceData.description} 
                    error={error}
                    handleChange={handleNewInvoiceDataChange}
                />
           </div>
           <div className="px-2">
            <ItemsInput 
                itemsArr={newInvoiceItems}
                addNewItem={addNewItem}
                removeItem={removeItem}
                handleChange={handleInvoiceItemsChange}
            />
           </div>
           <FormInvoiceButtons isEditForm={isEditForm} />
         </form>
    </div>
  )
}
