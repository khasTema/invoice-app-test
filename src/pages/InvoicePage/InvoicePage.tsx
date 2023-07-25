import React from 'react'
import { Wrapper } from '../../components/Wrapper'
import { InvoiceViewHead } from '../../components/InvoiceView/InvoiceViewHead'
import { InvoiceBody } from '../../components/InvoiceView/InvoiceBody'

export const InvoicePage:React.FC = ():JSX.Element => {
  return (
    <Wrapper>
      <InvoiceViewHead />
      <InvoiceBody />
    </Wrapper>
  )
}
