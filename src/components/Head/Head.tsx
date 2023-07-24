import React, { useContext } from 'react'
import { ButtonNew } from '../ButtonNew/ButtonNew'
import { Filter } from '../Filter'
import { InvoiceDataContext } from '../../context/InvoiceDataContext'

export const Head:React.FC = ():JSX.Element => {

  const { numberOfInvoices, isListShown } = useContext (InvoiceDataContext)

  return (
    <div className='w-full flex justify-start items-center py-8'>
        <div className="head mr-auto">
            <h1 className='s text-4xl font-bold'>Invoices</h1>
            {
              isListShown ?
              <span>There are {numberOfInvoices} total invoices</span>
              : <span>No invoices</span>
            }
        </div>
        <Filter />
        <ButtonNew/>
    </div>
  )
}
