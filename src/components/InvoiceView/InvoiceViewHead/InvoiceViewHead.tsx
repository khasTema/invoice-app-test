import React from 'react'
import { StatusBadge } from '../../StatusBadge'
import { ButtonEdit } from '../../Buttons/ButtonEdit'
import { ButtonDelete } from '../../Buttons/ButtonDelete'
import { ButtonMarkStatus } from '../../Buttons/ButtonMarkStatus'
import { InvoiceViewProps } from '../../../pages/InvoicePage/InvoicePage'



export const InvoiceViewHead:React.FC<InvoiceViewProps> = ({currentInvoice}):JSX.Element => {

  const {status} = currentInvoice

  return (
    <div className='w-full bg-gray-800 p-4 mb-6 rounded-lg flex justify-between items-center relative'>
      <div className='pl-5 w-fit flex justify-between items-center'>
        <span className='mr-2'>Status</span>
        <StatusBadge status={status}/>
      </div>
      <div className='w-5/12 flex justify-between items-center pr-2'>
        <ButtonEdit />
        <ButtonDelete />
        <ButtonMarkStatus />
      </div>
    </div>
  )
}
