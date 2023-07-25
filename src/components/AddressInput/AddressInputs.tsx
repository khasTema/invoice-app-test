import React from 'react'
import { InputField } from '../InputField'

interface IaddressInputProps {
    street: string,
    city: string,
    postcode: string,
    country: string,
    error: boolean
}

export const AddressInputs:React.FC<IaddressInputProps> = ({street, city,postcode, country, error}):JSX.Element => {
  return (
    <div>
        <div className='px-2'>
            <InputField 
                name={street} 
                description={"Street Addres"} 
                value={''} 
                error={error}
            />
        </div>
        <div className='w-full flex'>
            <div className='w-1/3 px-2'>
                <InputField 
                    name={city} 
                    description={"City"} 
                    value={''} 
                    error={error}
                />
            </div>
            <div className='w-1/3 px-2'>
                <InputField 
                    name={postcode} 
                    description={"Post Code"} 
                    value={''} 
                    error={error}
                />
            </div>
            <div className='w-1/3 px-2'>
                <InputField 
                    name={country} 
                    description={"Country"} 
                    value={''} 
                    error={error}
                />
            </div>
        </div>
    </div>
  )
}
