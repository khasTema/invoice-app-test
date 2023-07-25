import React from 'react'

export const ButtonMarkStatus:React.FC = ():JSX.Element => {
  return (
    <button className='bg-violet-700 rounded-3xl px-4 py-3 flex justify-between items-center hover:bg-violet-400 transition-all'>
        <span>Mark as Paid</span>
    </button>
  )
}
