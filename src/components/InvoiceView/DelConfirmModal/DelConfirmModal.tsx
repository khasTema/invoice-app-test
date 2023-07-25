import React, { useContext } from 'react'
import { ButtonDelete } from '../../Buttons/ButtonDelete'
import { InvoiceDataContext } from '../../../context/InvoiceDataContext'
import { InvoiceIdProp } from '../../../interface/interface'

export const DelConfirmModal:React.FC<InvoiceIdProp> = ({invoiceId}):JSX.Element => {

    const {handleToggleModal, handleDelete} = useContext(InvoiceDataContext)

    const handleClickDelete = () => {
      handleDelete(invoiceId)
    }

  return (
    <div className='fixed w-full h-screen bg-black z-50 t-0 l-0 bg-opacity-60 flex justify-center items-center'>
        <div className='w-6/12 p-12 bg-slate-700 rounded-xl'>
            <h3 className='font-bold text-3xl'>Confirm Deletion</h3>
            <p>Are you sure you want to delete invoice <span>#</span>{invoiceId}? This action cannot be undone. </p>
            <div className='mt-4 p-4 w-full flex justify-end items-center'>
                <button 
                  className='bg-gray-600 bg-opacity-40 rounded-3xl px-6 py-3 flex justify-between items-center hover:bg-opacity-90 transition-all' 
                  onClick={handleToggleModal}
                >
                  Cancel
                </button>
                <ButtonDelete handleClick={handleClickDelete} />
            </div>
        </div>
    </div>
  )
}
