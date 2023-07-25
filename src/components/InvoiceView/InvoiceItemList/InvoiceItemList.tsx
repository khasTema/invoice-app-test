import React from 'react'
import { InvoiceItem } from '../InvoiceItem/InvoiceItem'

export const InvoiceItemList:React.FC = ():JSX.Element => {
  return (
    <div className='w-full  pt-8 px-8 bg-slate-700 rounded-t-xl'>
        <div className='items-head w-full flex justify-end items-center text-xs mb-8'>
            <span className='mr-auto'>Item Name</span>
            <span className='w-2/12 text-center'>QTY.</span>
            <span className='w-2/12 text-center'>Price</span>
            <span className='w-2/12 text-right'>Total</span>
        </div>
        <InvoiceItem />
        <InvoiceItem />
    </div>
  )
}
