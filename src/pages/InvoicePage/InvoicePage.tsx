import React, {useContext} from 'react'
import { Link, useParams } from 'react-router-dom'
import { Wrapper } from '../../components/Wrapper'
import { InvoiceViewHead } from '../../components/InvoiceView/InvoiceViewHead'
import { InvoiceBody } from '../../components/InvoiceView/InvoiceBody'
import { InvoiceDataContext } from '../../context/InvoiceDataContext'
import { Invoice } from '../../interface/interface'
import { EmptyPlaceholder } from '../../components/EmptyPlaceholder'
import { DelConfirmModal } from '../../components/InvoiceView/DelConfirmModal'
import { ReactComponent as LeftArrow } from '../../assets/icon-arrow-left.svg'
import { useCurrentInvoice } from '../../hooks/useCurrentInvoice'

export interface InvoiceViewProps {
  currentInvoice: Invoice,
}

export const InvoicePage:React.FC = ():JSX.Element => {

  const { id } = useParams()
  const { isModalShown } = useContext(InvoiceDataContext)
  const { currentInvoice } = useCurrentInvoice({id})

  return (
    <>
      <Wrapper>
        <Link to='/' className='w-32 flex justify-start items-center mb-4 hover:text-violet-500 transition-all'>
          <LeftArrow className='mr-4'/>
          Go back
        </Link>
        { currentInvoice ?
          <>
            <InvoiceViewHead currentInvoice={currentInvoice} />
            <InvoiceBody currentInvoice={currentInvoice} />
            
          </>
          :
          <>
            <EmptyPlaceholder />
          </>
        }
      
      </Wrapper>
      {isModalShown && <DelConfirmModal invoiceId={id!}/>}
    </>
  )
}
