import React from 'react'
import { CURRENCY_SYMBOL } from '../../../config/constants'
import { InvoiceViewProps } from '../../../interface/interface'

export const InvoiceTotal:React.FC<InvoiceViewProps> = ({currentInvoice}):JSX.Element => {

  const {total} = currentInvoice

  return (
    <div className='w-full flex justify-between items-center p-8 bg-black rounded-b-2xl'>
        <span className='text-sm'>Amount Due</span>
        <p className='text-2xl font-bold'>
          {
            total ?
            `${CURRENCY_SYMBOL} ${total.toFixed(2)}`
            : `${CURRENCY_SYMBOL} 00.00`
          }
        </p>
    </div>
  )
}
