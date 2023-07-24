import React from 'react'
import { Wrapper } from '../../components/Wrapper'
import { Head } from '../../components/Head'
import { EmptyPlaceholder } from '../../components/EmptyPlaceholder'
import { InvoiceList } from '../../components/InvoiceList'

export const InvoiceListPage:React.FC = ():JSX.Element => {

  // to update this var with state
  const isShown : boolean = true;

  return (
    <Wrapper>
        <Head />
        {isShown ? <InvoiceList /> :<EmptyPlaceholder />}
    </Wrapper>
  )
}
