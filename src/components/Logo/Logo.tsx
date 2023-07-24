import React from 'react'
import { ReactComponent as LogoImg } from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

export const Logo:React.FC = ():JSX.Element => {
  return (
    <Link to='/' className='logo bg-violet-600 rounded-r-xl w-full h-20 flex justify-center items-center cursor-pointer mb-auto'>
        <LogoImg/>
    </Link>
  )
}
