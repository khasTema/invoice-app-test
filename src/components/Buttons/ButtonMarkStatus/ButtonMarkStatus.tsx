import React, { useContext } from 'react'
import { InvoiceIdProp } from '../../InvoiceView/InvoiceViewHead/InvoiceViewHead'
import { InvoiceDataContext } from '../../../context/InvoiceDataContext'


export const ButtonMarkStatus:React.FC<InvoiceIdProp> = ({invoiceId}):JSX.Element => {

  const {handleStatusChange} = useContext(InvoiceDataContext)

  const handleClick = ():void => {
    handleStatusChange(invoiceId)
  }

  return (
    <button 
      className='bg-violet-700 rounded-3xl px-5 py-3 flex justify-between items-center hover:bg-violet-400 transition-all ml-2'
      onClick={handleClick}
      >
        <span>
          Mark as Paid
        </span>
    </button>
  )
}
