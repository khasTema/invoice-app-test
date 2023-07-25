import React from 'react'
import styles from './grid.module.css'
import { formatDate } from '../../../utils/formatDate'
import { InvoiceViewProps } from '../../../interface/interface'


export const InvoiceDetailsGrid:React.FC<InvoiceViewProps> = ({currentInvoice}):JSX.Element => {

    const { id, description, senderAddress, paymentDue, createdAt, clientAddress, clientName, clientEmail } = currentInvoice

    const formatedCreateDate = formatDate(createdAt)
    const formatedDueDate = formatDate(paymentDue)

  return (
    <div className={styles.grid}>
        <div className={styles.invoiceId}>
            <p>
                <span className='text-gray-400'>#</span>
                {id}
            </p>
            <span>{description}</span>
        </div>
        <div className={styles.sender}>
            <span>{senderAddress.street}</span>
            <span>{senderAddress.city}</span>
            <span>{senderAddress.postCode}</span>
            <span>{senderAddress.country}</span>
        </div>
        <div className={styles.invoiceDate}>
            <span>Invoice Date</span>
            <p>{formatedCreateDate}</p>
        </div>
        <div className={styles.invoiceDueDate}>
            <span>Payment Date</span>
            <p>{formatedDueDate}</p>
        </div>
        <div className={styles.client}>
            <span>Bill to</span>
            <p>{clientName}</p>
            <span>{clientAddress.street}</span>
            <span>{clientAddress.city}</span>
            <span>{clientAddress.postCode}</span>
            <span>{clientAddress.country}</span>
        </div>
        <div className={styles.mail}>
            <span>Sent to</span>
            <p>{clientEmail}</p>
        </div>
    </div>
  )
}
