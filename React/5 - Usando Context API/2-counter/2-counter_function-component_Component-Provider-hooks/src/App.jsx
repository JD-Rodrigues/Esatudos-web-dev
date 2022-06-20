import React, { useContext } from 'react';
import './App.css';
import DecrementButton from './assets/components/DecrementButton';
import IncrementButton from './assets/components/IncrementButton';
import Msg from './assets/components/Msg';
import Value from './assets/components/Value';
import { Context, CounterProvider } from './assets/CounterProvider';


function App() {
  const context = useContext(Context)
  return (    
    <div className="App">
      <CounterProvider>
        <DecrementButton />
        <Value />
        <IncrementButton />
        <Msg />
      </CounterProvider>  
    </div>
  );
}

export default App;