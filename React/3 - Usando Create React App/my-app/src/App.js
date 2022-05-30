import React from 'react'
import {Header} from './assets/Components/Header'
import './App.css';
import {Car} from './assets/Components/Car'
import { Header2 } from './assets/Components/Header2';
import { Footer } from './assets/Components/Footer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Dia: 'Quarta',
      Mês: 'Janeiro'
    }
  }

    setDay = (update)=>{
      this.setState(update) 
    }

  render() {
    console.log(this.state)
    return (
      <Router>
        <Routes>        
            <Route path='/' element={<Header name='J-Dev' links={['Home', 'About', 'Services', 'Contact']}></Header>} />
            <Route  path='/car' element={<Car day={this.state.Dia} setDay={this.setDay} name='Monza' year='86'></Car>}/>
            <Route path='/menu2'element={<Header2 links={['About us', 'Galery', 'Contact']}></Header2>} />         
            <Route path='/footer' element={<Footer></Footer>} />               
        </Routes>
        
      </Router>
  
    );
  }
  
}

export default App;
