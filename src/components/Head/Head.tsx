import React, { useContext } from 'react'
import { ButtonNew } from '../Buttons/ButtonNew/ButtonNew'
import { Filter } from '../Filter'
import { InvoiceDataContext } from '../../context/InvoiceDataContext'
import { InputField } from '../InputField'

export const Head:React.FC = ():JSX.Element => {

  const { numberOfInvoices, isListShown, handleSearch, searchBar } = useContext (InvoiceDataContext)

  return (
    <div className='w-full flex justify-start items-center py-8'>
        <div className="head mr-auto">
            <h1 className='s text-4xl font-bold'>Invoices</h1>
            {
              isListShown && numberOfInvoices ?
              <span>There are {numberOfInvoices} total invoices</span>
              : <span>No invoices</span>
            }
        </div>
        <InputField name={'search'} value={searchBar} error={false} description={'search'} handleChange={handleSearch} />
        {isListShown && numberOfInvoices ? <Filter /> : ''}
        <ButtonNew/>
    </div>
  )
}
