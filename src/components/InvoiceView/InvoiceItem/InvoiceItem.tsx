import React from 'react'
import { CURRENCY_SYMBOL } from '../../../config/constants'
import { Item } from '../../../interface/interface'

interface ItemProps {
  item: Item
}

export const InvoiceItem:React.FC<ItemProps> = ({item}):JSX.Element => {

  const { name, quantity, price, total } = item

  return (
    <div className='items-head w-full flex justify-end items-center text-sm mb-6'>
        <span className='mr-auto'>{name}</span>
        <span className='w-2/12 text-center'>{quantity}</span>
        <span className='w-2/12 text-center'>{CURRENCY_SYMBOL} {price.toFixed(2)}</span>
        <span className='w-2/12 text-right font-bold'>{CURRENCY_SYMBOL} {total.toFixed(2)}</span>
    </div>
  )
}
