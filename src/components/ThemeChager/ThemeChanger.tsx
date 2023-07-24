import React from 'react'
import { ReactComponent as Sun } from '../../assets/icon-sun.svg';

export const ThemeChanger:React.FC = ():JSX.Element => {
  return (
    <div className='w-full h-10 flex justify-center items-center cursor-pointer mb-2'>
        <Sun />
    </div>
  )
}
