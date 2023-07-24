import React from 'react'
import { Head } from '../Head'
import { EmptyPlaceholder } from '../EmptyPlaceholder'

export const MainWrapper:React.FC = ():JSX.Element => {
  return (
    <div className='w-8/12 mx-auto mt-20 max-w-4xl'>
        <Head />
        <EmptyPlaceholder />
    </div>
  )
}
