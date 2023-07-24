import React, { useContext } from 'react'
import { Wrapper } from '../../components/Wrapper'
import { Head } from '../../components/Head'
import { EmptyPlaceholder } from '../../components/EmptyPlaceholder'
import { InvoiceList } from '../../components/InvoiceList'
import { InvoiceDataContext } from '../../context/InvoiceDataContext'


export const InvoiceListPage:React.FC = ():JSX.Element => {

  const { isListShown } = useContext(InvoiceDataContext)

  return (
    <Wrapper>
        <Head />
        {
          isListShown ? 
          <InvoiceList /> 
          : <EmptyPlaceholder />
        }
    </Wrapper>
  )
}
