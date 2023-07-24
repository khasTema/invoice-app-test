import React from 'react'
import { ReactComponent as DownArrow } from '../../assets/icon-arrow-down.svg'

export const Filter = () => {
  return (
    <div className='filter flex justify-center items-center hover:bg-violet-400 py-2 px-3 cursor-pointer rounded-3xl'>
        <span className='mr-4'>Filter by status</span>
        <DownArrow />
    </div>
  )
}
