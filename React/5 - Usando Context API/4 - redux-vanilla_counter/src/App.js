import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { increment, decrement } from './assets/actions';
import './App.css';

function App() {
  const counter = useSelector((state)=>state.value)
  const msg = useSelector((state)=>state.msg)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <button 
        onClick={
          counter<11?()=>dispatch(decrement('Continue incrementando')):()=>dispatch(decrement('Você conseguiu!'))
          } 
          className='decrement-btn'
          >Decremento
        </button>
      <span>{counter}</span>
      <button 
        onClick={
          counter<9?()=>dispatch(increment('Continue incrementando')):()=>dispatch(increment('Você conseguiu!'))
          } 
          className='increment-btn'
          >Incremento
          </button>
      <p>{msg}</p>
      
    </div>
  );
}

export default App;
