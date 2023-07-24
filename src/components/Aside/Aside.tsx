import React from 'react'
import { Logo } from '../Logo/Logo'
import { UserPick } from '../UserPick/UserPick'
import { ThemeChanger } from '../ThemeChager/ThemeChanger'


export const Aside: React.FC = ():JSX.Element => {
  return (
    <div className='custom-sidebar bg-gray-800 w-20 h-full rounded-r-xl flex flex-col justify-start items-center overflow-hidden'>
        <Logo/>
        <ThemeChanger />
        <UserPick/>
    </div>
  )
}
