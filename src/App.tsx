import React from 'react';
import './App.css';
import { Aside } from './components/Aside';
import { MainWrapper } from './components/MainWrapper';

export const App: React.FC = ():JSX.Element => {
  return (
    <div className="App bg-gray-950 w-full h-screen flex justify-start items-start">
     <Aside />
     <MainWrapper />
    </div>
  );
}

export default App;
