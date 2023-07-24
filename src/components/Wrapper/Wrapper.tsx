import React, { ReactNode } from 'react'

interface WrapperProps {
    children: ReactNode
}

export const Wrapper:React.FC<WrapperProps> = ({children}):JSX.Element => {
  return (
    <div className='w-8/12 mx-auto mt-20 max-w-4xl'>
        { children }
    </div>
  )
}
