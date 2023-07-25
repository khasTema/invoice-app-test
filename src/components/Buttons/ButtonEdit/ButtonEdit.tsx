import React from 'react'

export const ButtonEdit:React.FC = ():JSX.Element => {
  return (
    <button className='bg-gray-600 bg-opacity-40 rounded-3xl px-6 py-3 flex justify-between items-center hover:bg-opacity-90 transition-all'>
        <span>
            Edit
        </span>
    </button>
  )
}
