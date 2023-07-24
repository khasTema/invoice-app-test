import React from 'react'
import { ReactComponent as LogoImg } from '../../assets/logo.svg';

export const Logo:React.FC = ():JSX.Element => {
  return (
    <div className='logo bg-violet-600 rounded-r-xl w-full h-20 flex justify-center items-center cursor-pointer mb-auto'>
        <LogoImg/>
    </div>
  )
}
