import React from 'react'

interface IinputsProps {
    name: string,
    description: string,
    value: string,
    error: boolean
}

export const InputField:React.FC<IinputsProps> = ({name, description, value, error}):JSX.Element => {

  return (
    <label 
        htmlFor={name} 
        className='block mb-4 text-xs'>
            {description}
        <input 
            type="text" 
            name={name} 
            value={value}  
            className={`w-full bg-slate-700 py-2 px-3 mt-2 rounded-lg focus:outline-none ${error && 'border border-red-600'}`}
        />
    </label>
  )
}
