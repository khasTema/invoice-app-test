import React from 'react'
import styles from './grid.module.css'

export const InvoiceDetailsGrid:React.FC = ():JSX.Element => {
  return (
    <div className={styles.grid}>
        <div className={styles.invoiceId}>
            <p>
                <span className='text-gray-400'>#</span>
                {'RT678906'}
            </p>
            <span>{'Graphic Design'}</span>
        </div>
        <div className={styles.sender}>
            <span>{'18 Union street'}</span>
            <span>{'London'}</span>
            <span>{'EI 6578'}</span>
            <span>{'United Kingdom'}</span>
        </div>
        <div className={styles.invoiceDate}>
            <span>Invoice Date</span>
            <p>{'21 Aug 2023'}</p>
        </div>
        <div className={styles.invoiceDueDate}>
            <span>Payment Date</span>
            <p>{'21 Aug 2023'}</p>
        </div>
        <div className={styles.client}>
            <span>Bill to</span>
            <p>{'John Doe'}</p>
            <span>{'18 Union street'}</span>
            <span>{'London'}</span>
            <span>{'EI 6578'}</span>
            <span>{'United Kingdom'}</span>
        </div>
        <div className={styles.mail}>
            <span>Sent to</span>
            <p>{'some@some.com'}</p>
        </div>
    </div>
  )
}
