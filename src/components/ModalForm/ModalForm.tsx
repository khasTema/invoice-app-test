import React, { useContext } from 'react'
import { NewInvoiceHead } from './NewInvoiceHead'
import { EditInvoiceHead } from './EditInvoiceHead'
import { InputField } from '../InputField'
import { AddressInputs } from '../AddressInput'
import { DatePicker } from '../DatePicker'
import { ItemsInput } from '../ItemsInput'
import { FormInvoiceButtons } from './FormInvoiceButtons'
import { InvoiceFormContext } from '../../context/InvoiceFormContext'
import { InvoiceDataContext } from '../../context/InvoiceDataContext'
import { Warning } from '../Warning'
import { useCurrentInvoice } from '../../hooks/useCurrentInvoice'

export interface IModalFormProps {
    invoiceId?: string
}

export const ModalForm:React.FC<IModalFormProps> = ({invoiceId}):JSX.Element => {

    const { error } = useContext(InvoiceDataContext)
    const { currentInvoice } = useCurrentInvoice({ id: invoiceId})
    

    const isEditForm: boolean = !!invoiceId 

    const {
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
        handleEditingForm
    } = useContext(InvoiceFormContext)

    if(isEditForm && currentInvoice) {
        handleEditingForm(currentInvoice)
    }

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
        { error && <Warning /> }
    </div>
  )
}
