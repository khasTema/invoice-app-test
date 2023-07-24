import React, { useEffect, useState } from 'react'
import { InvoiceBlock } from '../InvoiceBlock'
import { Invoice } from '../../interface/interface'

export const InvoiceList:React.FC = ():JSX.Element => {


  const [data, setData] = useState<Invoice[]>([])
  console.log(data)

  useEffect(()=> {
    const getData = async () =>  {
      try{
        const res = await fetch('data/data.json');
        const json = await res.json()
        setData(json)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    };
    getData()
  }, [])


  return (
    <>
      {data.map(item => <InvoiceBlock key={item.id} invoice={item}/>)}
    </>
  )
}
