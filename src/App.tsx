import React from 'react';
import './App.css';
import { Aside } from './components/Aside';
import { InvoiceListPage } from './pages/InvoiceListPage';
import { InvoicePage } from './pages/InvocePage';
import { Routes, Route } from "react-router-dom";

export const App: React.FC = ():JSX.Element => {
  return (
    <div className="App bg-gray-950 w-full flex justify-start items-start relative">
     <Aside />
     <Routes>
      <Route path='/' element={ <InvoiceListPage/> } />
      <Route path='/:id' element={ <InvoicePage/> } />
     </Routes>
    </div>
  );
}

export default App;
