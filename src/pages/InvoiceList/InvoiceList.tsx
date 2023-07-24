import React from 'react'
import { Head } from '../../components/Head'
import { EmptyPlaceholder } from '../../components/EmptyPlaceholder'
import { Wrapper } from '../../components/Wrapper'

export const InvoiceList:React.FC = ():JSX.Element => {
  return (
    <Wrapper>
        <Head />
        <EmptyPlaceholder />
    </Wrapper>
  )
}
