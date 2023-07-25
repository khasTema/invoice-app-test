import React, {useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Wrapper } from '../../components/Wrapper'
import { InvoiceViewHead } from '../../components/InvoiceView/InvoiceViewHead'
import { InvoiceBody } from '../../components/InvoiceView/InvoiceBody'
import { InvoiceDataContext } from '../../context/InvoiceDataContext'
import { Invoice } from '../../interface/interface'
import { EmptyPlaceholder } from '../../components/EmptyPlaceholder'

export interface InvoiceViewProps {
  currentInvoice: Invoice,
}

export const InvoicePage:React.FC = ():JSX.Element => {

  const {id} = useParams()
  const {data} = useContext(InvoiceDataContext)

  const [ currentInvoice, setCurrentInvoice ] = useState<Invoice>();
  console.log(currentInvoice)

  useEffect(() => {
    let invoice = data?.find(item => item.id === id)
    setCurrentInvoice(invoice)
  },[id, data])

  return (
    <Wrapper>
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
  )
}
