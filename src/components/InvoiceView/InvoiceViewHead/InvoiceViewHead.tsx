import React from 'react'
import { StatusBadge } from '../../StatusBadge'
import { ButtonEdit } from '../../Buttons/ButtonEdit'
import { ButtonDelete } from '../../Buttons/ButtonDelete'
import { ButtonMarkStatus } from '../../Buttons/ButtonMarkStatus'


export const InvoiceViewHead:React.FC = ():JSX.Element => {
  return (
    <div className='w-full bg-gray-800 p-4 mb-6 rounded-lg flex justify-between items-center relative'>
      <div className='w-3/12 pl-5 flex justify-between items-center'>
        <span>Status</span>
        <StatusBadge status={'pending'}/>
      </div>
      <div className='w-5/12 flex justify-between items-center pr-2'>
        <ButtonEdit />
        <ButtonDelete />
        <ButtonMarkStatus />
      </div>
    </div>
  )
}
