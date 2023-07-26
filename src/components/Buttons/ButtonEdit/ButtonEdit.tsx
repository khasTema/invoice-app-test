import React, { useContext } from 'react'
import { InvoiceIdProp } from '../../../interface/interface'
import { InvoiceDataContext } from '../../../context/InvoiceDataContext'


export const ButtonEdit:React.FC<InvoiceIdProp> = ({invoiceId}):JSX.Element => {

  const {handleTogleFormModal} = useContext(InvoiceDataContext)

  return (
    <button 
    className='bg-gray-600 bg-opacity-40 rounded-3xl px-6 py-3 flex justify-between items-center hover:bg-opacity-90 transition-all'
    title='Click to Edit Invoice'
    onClick={handleTogleFormModal}
    >
        <span>
            Edit
        </span>
    </button>
  )
}
