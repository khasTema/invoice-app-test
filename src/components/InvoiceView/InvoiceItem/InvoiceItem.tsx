import React from 'react'
import { CURRENCY_SYMBOL } from '../../../config/constants'

export const InvoiceItem:React.FC = ():JSX.Element => {
  return (
    <div className='items-head w-full flex justify-end items-center text-sm mb-6'>
        <span className='mr-auto'>{'Banner Design'}</span>
        <span className='w-2/12 text-center'>{2}</span>
        <span className='w-2/12 text-center'>{CURRENCY_SYMBOL} {234.67}</span>
        <span className='w-2/12 text-right font-bold'>{CURRENCY_SYMBOL} {468.67}</span>
    </div>
  )
}
