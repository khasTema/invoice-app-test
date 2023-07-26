import React from 'react'
import { IinvoiceButtonsProps } from '../../ModalForm/FormInvoiceButtons/FormInvoiceButtons'


export const ButtonSave:React.FC<IinvoiceButtonsProps> = ({isEditForm}):JSX.Element => {

  return (
    <button 
      className='new bg-violet-700 rounded-3xl text-xs px-4 py-2 flex justify-between items-center hover:bg-violet-400 transition-all ml-2'
      title='Open New Invoice Form'
      >
        <span>
          {isEditForm ? 'Save Changes' : 'Save & Send'}
          </span>
    </button>
  )
}
