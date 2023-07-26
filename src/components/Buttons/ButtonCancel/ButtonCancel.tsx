import React, { useContext } from 'react'
import { IinvoiceButtonsProps } from '../../ModalForm/FormInvoiceButtons/FormInvoiceButtons'
import { InvoiceDataContext } from '../../../context/InvoiceDataContext'

export const ButtonCancel:React.FC<IinvoiceButtonsProps> = ({isEditForm}):JSX.Element => {

    const {handleCloseModalForm} = useContext(InvoiceDataContext)

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
        e.preventDefault()
        handleCloseModalForm()
    }

    return (
      <button 
      className={`${!isEditForm ? 'bg-white text-violet-700 mr-auto' : 'bg-gray-600 bg-opacity-40'}  text-xs rounded-3xl px-6 py-2 flex justify-between items-center hover:bg-opacity-90 transition-all'`}
      onClick={handleClick}
      >
          <span>
              {isEditForm ? 'Cancel' : 'Discard'}
          </span>
      </button>
    )
  }