import React from 'react'


export const ButtonDraft:React.FC = ():JSX.Element => {

  return (
    <button 
    className='bg-gray-600 bg-opacity-40 text-xs rounded-3xl px-6 py-2 flex justify-between items-center hover:bg-opacity-90 transition-all'
    title='Click to Edit Invoice'
    >
        <span>
            Save As Draft
        </span>
    </button>
  )
}
