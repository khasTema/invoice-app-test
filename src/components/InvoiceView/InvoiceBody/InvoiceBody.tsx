import React from 'react'
import { InvoiceDetailsGrid } from '../IvoiceDetailsGrid'
import { InvoiceItemList } from '../InvoiceItemList'
import { InvoiceTotal } from '../InvoiceTotal'

export const InvoiceBody:React.FC = ():JSX.Element => {
  return (
    <div className='w-full bg-gray-800 p-10 mb-3 rounded-lg flex flex-col justify-between items-center relative'>
      <InvoiceDetailsGrid />
      <InvoiceItemList />
      <InvoiceTotal />
    </div>
  )
}
