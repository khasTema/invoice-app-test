import React from 'react'
import { ReactComponent as LogoImg } from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

export const Logo:React.FC = ():JSX.Element => {
  return (
    <Link to='/' className='logo bg-violet-600 rounded-r-xl w-full h-20 flex justify-end items-end cursor-pointer mb-auto relative'>
      <div className='h-1/2 w-full bg-violet-400 rounded-tl-xl'></div>
      <div className='absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 hover:rotate-90 transition-all'>
        <LogoImg/>
      </div>
    </Link>
  )
}
