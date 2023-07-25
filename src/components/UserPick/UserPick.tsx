import React from 'react'
import avatarImage from '../../assets/image-avatar.jpg'
import { Link } from 'react-router-dom';

export const UserPick:React.FC = ():JSX.Element => {
  return (
    <div className="userpick w-full h-20 flex justify-center items-center border-t border-gray-500 cursor-pointer">
        <Link to='/' className="avatar w-1/3 rounded-3xl overflow-hidden hover:border-2 border-violet-500 transition-all">
            <img src={avatarImage} alt="user" className='w-full' />
        </Link>
    </div>
  )
}
