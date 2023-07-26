import React from 'react'
import { ButtonSave } from '../../Buttons/ButtonSave'
import { ButtonDraft } from '../../Buttons/ButtonDraft'
import { ButtonCancel } from '../../Buttons/ButtonCancel'

export interface IinvoiceButtonsProps {
    isEditForm: boolean
}

export const FormInvoiceButtons:React.FC<IinvoiceButtonsProps> = ({isEditForm}):JSX.Element => {
  return (
    <div className='w-full flex justify-end items-center pt-5 pb-2 px-2'>
        <ButtonCancel isEditForm={isEditForm} />
        { !isEditForm && <ButtonDraft /> }
        <ButtonSave isEditForm={isEditForm}/>
    </div>
  )
}
