import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { increment, decrement } from './assets/slice';
import './App.css';

function App() {
  const counter = useSelector((state)=>state.onlyReducer.value)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <button onClick={()=>dispatch(decrement())} className='decrement-btn'>Decremento</button>
      <span>{counter}</span>
      <button onClick={()=>dispatch(increment())} className='increment-btn'>Incremento</button>
      
    </div>
  );
}

export default App;
