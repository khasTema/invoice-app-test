import React from 'react'
import { CURRENCY_SYMBOL } from '../../../config/constants'
import { InvoiceViewProps } from '../../../pages/InvoicePage/InvoicePage'

export const InvoiceTotal:React.FC<InvoiceViewProps> = ({currentInvoice}):JSX.Element => {

  const {total} = currentInvoice

  return (
    <div className='w-full flex justify-between items-center p-8 bg-black rounded-b-2xl'>
        <span className='text-sm'>Amount Due</span>
        <p className='text-2xl font-bold'>{CURRENCY_SYMBOL} {total.toFixed(2)}</p>
    </div>
  )
}
