import React from 'react'
import { InvoiceDetailsGrid } from '../IvoiceDetailsGrid'

export const InvoiceBody:React.FC = ():JSX.Element => {
  return (
    <div className='w-full bg-gray-800 p-8 mb-3 rounded-lg flex justify-between items-center relative'>
      <InvoiceDetailsGrid />
    </div>
  )
}
