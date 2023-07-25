import React from 'react'
import { ReactComponent as Plus } from '../../../assets/icon-plus.svg'

export const ButtonNew:React.FC = ():JSX.Element => {
  return (
    <button className='new bg-violet-700 rounded-3xl px-3 py-2 flex justify-between items-center hover:bg-violet-400 transition-all ml-4'>
        <span className='bg-white p-2 flex justify-center items-center rounded-3xl mr-2'>
            <Plus />
        </span>
        <span>New Invoice</span>
    </button>
  )
}
