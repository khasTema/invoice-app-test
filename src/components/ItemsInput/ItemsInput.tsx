import React, { useState } from 'react'
import { InputField } from '../InputField'
import { CURRENCY_SYMBOL } from '../../config/constants'

export const ItemsInput:React.FC = ():JSX.Element => {

    const [ itemsCount, setItemsCount ] = useState<number>(1)
    const handleAddItemInput = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
        e.preventDefault()
        setItemsCount(prev => prev + 1)
    }

  return (
    <div>
        <p className='text-gray-400 mb-2 mt-8'>Items List</p>
        <div>
            <div className='w-full flex justify-between items-center'>
                <span className='w-5/12 pl-1'>Item Name</span>
                <span className='w-2/12 pl-4'>QTY.</span>
                <span className='w-2/12 pl-3'>Price</span>
                <span className='w-2/12 pl-5'>Total</span>
            </div>
            {[...Array(itemsCount)].map((item, index) => (
                <div key={index} className="items-input w-full flex justify-between items-center">
                    <div className='w-5/12'>
                        <InputField 
                            name='name'
                            description=''
                            value={''}
                            error={false}
                        />
                    </div>
                    <div className='w-1/12'>
                        <InputField 
                            name='quantity'
                            description=''
                            value={''}
                            error={false}
                        />
                    </div>
                    <div className='w-2/12'>
                        <InputField 
                            name='price'
                            description=''
                            value={''}
                            error={false}
                        />
                    </div>
                    <div className='1/12'>{CURRENCY_SYMBOL}{'24.00'}</div>
                </div>
            ))}
            

        </div>
        <button 
            className='w-full bg-slate-700 py-2 rounded-3xl hover:bg-slate-500'
            onClick={handleAddItemInput}
        >
            +Add New Item
        </button>
    </div>
  )
}
