import React from 'react';
import './App.css';
import { Aside } from './components/Aside/Aside';

export const App: React.FC = ():JSX.Element => {
  return (
    <div className="App bg-gray-950 w-full h-screen">
     <Aside />
    </div>
  );
}

export default App;
