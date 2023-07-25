import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as RightArrow } from '../../assets/icon-arrow-right.svg'
import { StatusBadge } from '../StatusBadge'
import { formatDate } from '../../utils/formatDate'
import { CURRENCY_SYMBOL } from '../../config/constants'
import { InvoiceBlockProps } from '../../interface/interface'

export const InvoiceBlock:React.FC<InvoiceBlockProps> = ({invoice}):JSX.Element => {

    const {id, paymentDue, clientName, total, status} = invoice
    const dueDate = formatDate(paymentDue)

  return (
    <Link to={`/${id}`} className='w-full bg-gray-800 p-4 mb-3 rounded-lg hover:bg-gray-600 grid grid-cols-5 gap-5 items-center relative'>
        <span className='invoice-id'>
            <span className='text-gray-400'>#</span>
            <span className='font-bold tracking-wider'>{id}</span>
        </span>
        <div className="invoice-due-date text-xs">
            Due {dueDate}
        </div>
        <div className="invoice-name">
            {clientName}
        </div>
        <div className="invoice-ammount font-bold tracking-wider self-center place-self-end pr-8">
            {CURRENCY_SYMBOL}{total.toFixed(2)}
        </div>
        <StatusBadge status={status}/>
        <div className='absolute right-3'>
            <RightArrow />
        </div>
    </Link>
  )
}
