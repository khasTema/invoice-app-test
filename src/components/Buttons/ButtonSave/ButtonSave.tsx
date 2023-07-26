import React, { useContext } from 'react'
import { IinvoiceButtonsProps } from '../../ModalForm/FormInvoiceButtons/FormInvoiceButtons'
import { InvoiceDataContext } from '../../../context/InvoiceDataContext'


export const ButtonSave:React.FC<IinvoiceButtonsProps> = ({isEditForm}):JSX.Element => {

  const { handleSaveNewInvoice } = useContext(InvoiceDataContext)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
    e.preventDefault()
    handleSaveNewInvoice()
}

  return (
    <button 
      className='new bg-violet-700 rounded-3xl text-xs px-4 py-2 flex justify-between items-center hover:bg-violet-400 transition-all ml-2'
      title='Prees To Save'
      onClick={handleClick}
      >
        <span>
          {isEditForm ? 'Save Changes' : 'Save & Send'}
          </span>
    </button>
  )
}
