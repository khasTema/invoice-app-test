import React, { useContext } from 'react'
import { StatusBadge } from '../../StatusBadge'
import { ButtonEdit } from '../../Buttons/ButtonEdit'
import { ButtonDelete } from '../../Buttons/ButtonDelete'
import { ButtonMarkStatus } from '../../Buttons/ButtonMarkStatus'
import { InvoiceDataContext } from '../../../context/InvoiceDataContext'
import { PENDING } from '../../../config/constants'
import { InvoiceViewProps } from '../../../interface/interface'

export const InvoiceViewHead:React.FC<InvoiceViewProps> = ({currentInvoice}):JSX.Element => {

  const {status, id} = currentInvoice
  const {handleToggleModal} = useContext(InvoiceDataContext)

  return (
    <div className='w-full bg-gray-800 p-4 mb-6 rounded-lg flex justify-between items-center relative'>
      <div className='pl-5 w-fit flex justify-between items-center'>
        <span className='mr-2'>Status</span>
        <StatusBadge status={status}/>
      </div>
      <div className='w-fit flex justify-between items-center pr-2'>
        <ButtonEdit invoiceId={id}/>
        <ButtonDelete handleClick={handleToggleModal}/> 
        {status === PENDING && <ButtonMarkStatus invoiceId={id}/>}
      </div>
    </div>
  )
}
