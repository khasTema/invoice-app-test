import React from 'react'
import { ButtonNew } from '../ButtonNew/ButtonNew'
import { Filter } from '../Filter'

export const Head:React.FC = ():JSX.Element => {
  return (
    <div className='w-full flex justify-start items-center py-8'>
        <div className="head mr-auto">
            <h1 className='s text-4xl font-bold'>Invoices</h1>
            <span>No invoices</span>
        </div>
        <Filter />
        <ButtonNew/>
    </div>
  )
}
