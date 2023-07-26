import React from 'react'
import { IModalFormProps } from '../ModalForm'



export const EditInvoiceHead:React.FC<IModalFormProps> = ({invoiceId}):JSX.Element => {
  return (
    <h2 className='font-bold text-xl'>
        Edit <span className='text-gray-400 font-normal'>#</span>{invoiceId}
    </h2>
  )
}
