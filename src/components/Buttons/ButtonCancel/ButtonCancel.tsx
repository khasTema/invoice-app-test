import React from 'react'
import { IinvoiceButtonsProps } from '../../ModalForm/FormInvoiceButtons/FormInvoiceButtons'

export const ButtonCancel:React.FC<IinvoiceButtonsProps> = ({isEditForm}):JSX.Element => {

    return (
      <button 
      className={`${!isEditForm ? 'bg-white text-violet-700 mr-auto' : 'bg-gray-600 bg-opacity-40'}  text-xs rounded-3xl px-6 py-2 flex justify-between items-center hover:bg-opacity-90 transition-all'`}
      title='Click to Edit Invoice'
      >
          <span>
              {isEditForm ? 'Cancel' : 'Discard'}
          </span>
      </button>
    )
  }