import React, { useContext } from 'react'
import { InvoiceBlock } from '../InvoiceBlock'
import { Invoice } from '../../interface/interface'
import { InvoiceDataContext } from '../../context/InvoiceDataContext'


export const InvoiceList:React.FC = ():JSX.Element => {

  const { data, filteredData } = useContext(InvoiceDataContext)
  const renderedData = filteredData?.length ? filteredData : data
 
  return (
    <>
      {renderedData && renderedData.map((item: Invoice) => 
          <InvoiceBlock 
              key={item.id} 
              invoice={item}
            />
      )}
    </>
  )
}
