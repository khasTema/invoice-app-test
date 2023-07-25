import React from 'react'

interface DeleteButtonProps {
  handleClick: () => void
}

export const ButtonDelete:React.FC<DeleteButtonProps> = ({handleClick}):JSX.Element => {

  return (
    <button 
      className='bg-red-500 hover:bg-opacity-70 rounded-3xl px-6 py-3 flex justify-between items-center transition-all'
      onClick={handleClick}
    >
        <span>
            Delete
        </span>
    </button>
  )
}
