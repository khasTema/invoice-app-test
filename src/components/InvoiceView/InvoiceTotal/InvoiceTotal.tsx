import React from 'react'
import { CURRENCY_SYMBOL } from '../../../config/constants'

export const InvoiceTotal:React.FC = ():JSX.Element => {
  return (
    <div className='w-full flex justify-between items-center p-8 bg-black rounded-b-2xl'>
        <span className='text-sm'>Amount Due</span>
        <p className='text-2xl font-bold'>{CURRENCY_SYMBOL} {'3456.00'}</p>
    </div>
  )
}
