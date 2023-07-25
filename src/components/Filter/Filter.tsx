import React, { useState, useContext } from 'react'
import { ReactComponent as DownArrow } from '../../assets/icon-arrow-down.svg'
import { StatusBadge } from '../StatusBadge'
import { PAID, PENDING } from '../../config/constants'
import { InvoiceDataContext } from '../../context/InvoiceDataContext'

export const Filter = () => {

  const [ isDropShown, setIsDropShown ] = useState<boolean>(false)
  const { handleStatusFilter, handleClearFilter } = useContext(InvoiceDataContext)

  const handleDropMenuClick = (status: string) => {
    handleStatusFilter(status)
  }

  return (
    <div 
      className='filter flex justify-center items-center hover:bg-violet-400 py-2 px-3 cursor-pointer rounded-3xl relative'
      title='Click to filter'
      onClick={()=> setIsDropShown(prev => !prev)}
    >
        <span className='mr-4'>Filter by status</span>
        <DownArrow />
        {
          isDropShown 
          &&
          <div className={`absolute top-10 z-10 bg-gray-800 border border-gray-300 w-36 flex flex-col justify-between items-center rounded-2xl py-2 ${isDropShown ? 'h-fit' : 'h-0'} overflow-hidden transition-all`}>
            <div className='mb-2' onClick={() => handleDropMenuClick(PAID)}>
              <StatusBadge status={PAID}/>
            </div>
            <div onClick={() => handleDropMenuClick(PENDING)}>
              <StatusBadge status={PENDING}/>
            </div>
            <div className='mt-4' onClick={handleClearFilter}>
              Clear filters
            </div>
          </div>
        }
    </div>
  )
}
