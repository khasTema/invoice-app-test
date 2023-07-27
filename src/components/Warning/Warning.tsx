import React from 'react'

export const Warning:React.FC = ():JSX.Element => {
  return (
    <div className='py-2 px-4 bg-red-500 rounded-lg text-center absolute bottom-0 right-96'>
        <span className='text-xs'>
            All Fields Are Required<br/> 
            There should be at least one item to save Invoice<br/>
            Save as Draft, and edit later
        </span>
    </div>
  )
}
