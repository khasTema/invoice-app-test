import React from 'react'
import { InvoiceIdProp } from '../../InvoiceView/InvoiceViewHead/InvoiceViewHead'

export const ButtonMarkStatus:React.FC<InvoiceIdProp> = ({invoiceId}):JSX.Element => {
  return (
    <button className='bg-violet-700 rounded-3xl px-5 py-3 flex justify-between items-center hover:bg-violet-400 transition-all'>
        <span>Mark as Paid</span>
    </button>
  )
}
