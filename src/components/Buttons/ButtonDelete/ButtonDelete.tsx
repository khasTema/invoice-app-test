import React from 'react'

export const ButtonDelete:React.FC = ():JSX.Element => {
  return (
    <button className='bg-red-500 hover:bg-opacity-70 rounded-3xl px-6 py-3 flex justify-between items-center transition-all'>
        <span>
            Delete
        </span>
    </button>
  )
}
