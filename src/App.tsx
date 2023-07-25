import React from 'react';
import './App.css';
import { Aside } from './components/Aside';
import { InvoiceListPage } from './pages/InvoiceListPage';
import { InvoicePage } from './pages/InvoicePage';
import { Routes, Route } from "react-router-dom";
import { InvoiceDataContextProvider } from './context/InvoiceDataContext';

export const App: React.FC = ():JSX.Element => {

  return (
    <div className="App bg-gray-950 w-full flex justify-start items-start relative overflow-x-hidden">
      <InvoiceDataContextProvider>
        <Aside />
        <Routes>
          <Route path='/' element={ <InvoiceListPage/> } />
          <Route path='/:id' element={ <InvoicePage/> } />
        </Routes>
      </InvoiceDataContextProvider>
    </div>
  );
}

export default App;
