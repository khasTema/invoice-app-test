import React from 'react'
import { BadgeStatusProp } from '../../interface/interface'
import { DRAFT, PAID } from '../../config/constants'

export const StatusBadge:React.FC<BadgeStatusProp> = ({status}):JSX.Element => {

    const badgeColor: boolean =  status === PAID
    const isItDraft: boolean = status === DRAFT

  return (
    <>
    {
      isItDraft ?
      <div className='w-24 flex justify-center items-center text-gray-400'>
        <span>{DRAFT}</span>
      </div>
      :
      <div className={`${badgeColor ? "bg-green-400 text-green-400": "bg-orange-300 text-orange-400"} w-24 p-3 bg-opacity-10 rounded-lg capitalize flex justify-center items-center`}>
       <span className={`${badgeColor ? "bg-green-400": "bg-orange-400"} badge-dot block w-2 h-2 rounded-3xl mr-2`}></span> 
       {status}
    </div>
    }
    </>
  )
}
