import React from 'react'
import avatarImage from '../../assets/image-avatar.jpg'

export const UserPick:React.FC = ():JSX.Element => {
  return (
    <div className="userpick w-full h-20 flex justify-center items-center border-t border-gray-500 cursor-pointer">
        <div className="avatar w-1/3 rounded-3xl overflow-hidden">
            <img src={avatarImage} alt="user" className='w-full' />
        </div>
    </div>
  )
}
