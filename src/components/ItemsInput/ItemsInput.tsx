import React from 'react'
import { InputField } from '../InputField'
import { CURRENCY_SYMBOL } from '../../config/constants'
import { ReactComponent as Trash } from '../../assets/icon-delete.svg'
import { Item } from '../../interface/interface'

interface IitemsInputProps {
    itemsArr: Item[]
    addNewItem: () => void
    removeItem: (index: number) => void
    handleChange: (index: number, field: string, value: string | number) => void;
}

export const ItemsInput:React.FC<IitemsInputProps> = ({itemsArr, addNewItem, removeItem, handleChange}):JSX.Element => {

    // const [ itemsCount, setItemsCount ] = useState<number>(1)
    const handleAddItemInput = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
        e.preventDefault()
        addNewItem()
    }
    console.log(itemsArr)
    const handleDeleteItem = (index: number):void => {
        removeItem(index)
    }

  return (
    <div>
        <p className='text-gray-400 mb-2 mt-8'>Items List</p>
        <div>
            <div className='w-full flex justify-between items-center'>
                <span className='w-5/12 pl-1'>Item Name</span>
                <span className='w-2/12 pl-4'>QTY.</span>
                <span className='w-2/12 pl-1'>Price</span>
                <span className='w-2/12 pl-4'>Total</span>
                <span className='w-1/12 pl-5'></span>
            </div>
            {itemsArr.map((item, index) => (
                <div key={index} className="items-input w-full flex justify-between items-center">
                    <div className='w-5/12'>
                        <InputField 
                            name='name'
                            description=''
                            value={item.name}
                            error={false}
                            handleChange={(e) => handleChange(index, 'name', e.target.value)}
                        />
                    </div>
                    <div className='w-1/12'>
                        <InputField 
                            name='quantity'
                            description=''
                            value={item.quantity}
                            error={false}
                            handleChange={(e) => handleChange(index, 'quantity', e.target.value)}
                        />
                    </div>
                    <div className='w-2/12'>
                        <InputField 
                            name='price'
                            description=''
                            value={item.price}
                            error={false}
                            handleChange={(e) => handleChange(index, 'price', e.target.value)}
                        />
                    </div>
                    <div className='w-1/12 text-sm -translate-y-1'>{CURRENCY_SYMBOL}{item.total}</div>
                    <div 
                        className='w-1/12 delete-it flex justify-center items-center -translate-y-1.5 cursor-pointer'
                        onClick={() => handleDeleteItem(index)}
                    >
                        <Trash />
                    </div>
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
