import React from 'react'

interface BadgeStatusProp {
    status: string
}

export const StatusBadge:React.FC<BadgeStatusProp> = ({status}):JSX.Element => {

    const badgeColor: boolean =  status === 'paid'

  return (
    <div className={`${badgeColor ? "bg-green-400 text-green-400": "bg-orange-300 text-orange-400"} w-24 p-3 bg-opacity-10 rounded-lg capitalize flex justify-center items-center`}>
       <span className={`${badgeColor ? "bg-green-400": "bg-orange-400"} badge-dot block w-2 h-2 rounded-3xl mr-2`}></span> 
       {status}
    </div>
  )
}
