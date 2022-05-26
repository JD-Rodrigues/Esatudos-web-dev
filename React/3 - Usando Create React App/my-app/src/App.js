import React from 'react'
import {Header} from './assets/Components/Header'
import './App.css';

function App() {
  return (
    <Header name='J-Dev' links={['Home', 'About', 'Services', 'Contact']}></Header>
  );
}

export default App;
