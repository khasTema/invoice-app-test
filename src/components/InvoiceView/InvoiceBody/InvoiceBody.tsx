import React from 'react'
import { InvoiceDetailsGrid } from '../IvoiceDetailsGrid'
import { InvoiceItemList } from '../InvoiceItemList'
import { InvoiceTotal } from '../InvoiceTotal'
import { InvoiceViewProps } from '../../../pages/InvoicePage/InvoicePage'

export const InvoiceBody:React.FC<InvoiceViewProps> = ({currentInvoice}):JSX.Element => {
  return (
    <div className='w-full bg-gray-800 p-10 mb-3 rounded-lg flex flex-col justify-between items-center relative'>
      <InvoiceDetailsGrid currentInvoice={currentInvoice} />
      <InvoiceItemList currentInvoice={currentInvoice} />
      <InvoiceTotal currentInvoice={currentInvoice} />
    </div>
  )
}
