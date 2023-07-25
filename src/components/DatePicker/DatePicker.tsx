import React from 'react'
import { ReactComponent as ArrowDown } from '../../assets/icon-arrow-down.svg'

export const DatePicker:React.FC = ():JSX.Element => {
  return (
    <div className='w-full flex justify-between items-center mb-4'>
        <div className="px-2 w-1/2">
            <label htmlFor={"date"}>Invoice Date
                <input type="date" name={"date"} className='block w-full bg-slate-700 py-2 px-3 mt-2 rounded-lg focus:outline-none'/>
            </label>
        </div>
        <div className="px-2 w-1/2 relative">
            <label htmlFor="duedate">Payment Terms</label>
            <select id="duedate" name="duedate" className='block w-full bg-slate-700 mt-2 py-2 px-3 rounded-lg focus:outline-none appearance-none'>
                <option value="20" selected>Next 20 Days</option>
                <option value="30">Next 30 Days</option>
                <option value="60">Next 60 Days</option>
                <option value="180">Next 180 Days</option>
            </select>
            <ArrowDown className='absolute top-12 right-6'/>
        </div>
    </div>
  )
}
