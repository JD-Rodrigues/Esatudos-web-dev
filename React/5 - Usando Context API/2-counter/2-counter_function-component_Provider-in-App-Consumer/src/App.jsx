import React, { useState } from 'react';
import './App.css';
import DecrementButton from './assets/components/DecrementButton';
import IncrementButton from './assets/components/IncrementButton';
import Context from './assets/context'


function App() {
  const [state, setState] = useState({ value: 0, msg: ''})
  return (
    <div className="App">
      <Context.Provider value={{state,setState}}>
        <DecrementButton />
        <span>{state.value}</span>
        <IncrementButton />
        <p>{state.msg}</p>
      </Context.Provider>  
    </div>
  );
}

export default App;