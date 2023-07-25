import React from 'react'
import { NewInvoiceHead } from './NewInvoiceHead'
import { EditInvoiceHead } from './EditInvoiceHead'
import { InputField } from '../InputField'
import { AddressInputs } from '../AddressInput'
import { DatePicker } from '../DatePicker'

export const ModalForm:React.FC = ():JSX.Element => {

    const isNew: boolean = true
    const error: boolean = false

  return (
    <div className='fixed top-0 left-20 w-full h-screen bg-black bg-opacity-60 flex justify-start items-start overflow-y-scroll overflow-x-hidden'>
         <form className='w-2/5 bg-slate-800 p-8 overflow-y-auto'>
           { isNew ? <NewInvoiceHead /> : <EditInvoiceHead />}
           <span className='text-violet-700 text-xs block mb-2'>Bill From</span>
           <AddressInputs 
                street={'street'}
                city={'city'}
                postcode={'postcode'}
                country={'country'}
                error={error} 
            />
           <span className='text-violet-700 text-xs block mb-2'>Bill to</span>
           <div className='px-2'>
                <InputField 
                    name={'clientName'} 
                    description={"Client's Name"} 
                    value={''} 
                    error={error}
                />
                <InputField 
                    name={'clientEmail'} 
                    description={"Client's Email"} 
                    value={''} 
                    error={error}
                />
           </div>
           <AddressInputs 
                street={'street'}
                city={'city'}
                postcode={'postcode'}
                country={'country'}
                error={error} 
            />
           <DatePicker />
           <div className="px-2">
                <InputField 
                    name={'description'} 
                    description={"Project Description"} 
                    value={''} 
                    error={error}
                />
           </div>
         </form>
    </div>
  )
}
