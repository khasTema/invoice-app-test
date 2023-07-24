import React from 'react'
import { ReactComponent as Placeholder } from '../../assets/illustration-empty.svg'

export const EmptyPlaceholder:React.FC = ():JSX.Element => {
  return (
    <div className='w-full flex flex-col justify-between items-center pt-10 pb-16'>
      <Placeholder />
      <h3 className='text-2xl font-bold mt-8 mb-5'>There is nothing here</h3>
      <p>Create an Invoce by clicking the</p>
      <p><b>New Invoice</b> button and get started</p>
    </div>
  )
}
