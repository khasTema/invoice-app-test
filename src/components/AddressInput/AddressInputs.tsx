import React from 'react'
import { InputField } from '../InputField'

interface IaddressInputProps {
    street: string,
    city: string,
    postCode: string,
    country: string,
    error: boolean
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const AddressInputs:React.FC<IaddressInputProps> = ({
    street, 
    city, 
    postCode, 
    country, 
    error, 
    handleChange
}):JSX.Element => {
  return (
    <div>
        <div className='px-2'>
            <InputField 
                name={'street'}
                description={"Street Addres"} 
                value={street} 
                error={error}
                handleChange={handleChange}
            />
        </div>
        <div className='w-full flex'>
            <div className='w-1/3 px-2'>
                <InputField 
                    name={'city'}
                    description={"City"} 
                    value={city} 
                    error={error}
                    handleChange={handleChange}
                />
            </div>
            <div className='w-1/3 px-2'>
                <InputField 
                    name={'postCode'}
                    description={"Post Code"} 
                    value={postCode} 
                    error={error}
                    handleChange={handleChange}
                />
            </div>
            <div className='w-1/3 px-2'>
                <InputField 
                    name={'country'} 
                    description={"Country"} 
                    value={country} 
                    error={error}
                    handleChange={handleChange}
                />
            </div>
        </div>
    </div>
  )
}
