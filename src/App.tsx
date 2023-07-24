import React from 'react';
import './App.css';
import { Aside } from './components/Aside';
import { InvoiceList } from './pages/InvoiceList';
import { InvoicePage } from './pages/InvocePage';
import { Routes, Route } from "react-router-dom";

export const App: React.FC = ():JSX.Element => {
  return (
    <div className="App bg-gray-950 w-full h-screen flex justify-start items-start">
     <Aside />
     <Routes>
      <Route path='/' element={ <InvoiceList/> } />
      <Route path='/:id' element={ <InvoicePage/> } />
     </Routes>
    </div>
  );
}

export default App;
