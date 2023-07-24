import React from 'react'
import { Logo } from '../Logo'
import { ThemeChanger } from '../ThemeChager'
import { UserPick } from '../UserPick'


export const Aside: React.FC = ():JSX.Element => {
  return (
    <div className='custom-sidebar bg-gray-800 w-20 h-full rounded-r-xl flex flex-col justify-start items-center overflow-hidden'>
        <Logo/>
        <ThemeChanger />
        <UserPick/>
    </div>
  )
}
