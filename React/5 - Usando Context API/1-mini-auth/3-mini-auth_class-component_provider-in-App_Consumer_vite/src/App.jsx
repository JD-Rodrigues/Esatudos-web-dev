import { Provider } from './assets/AuthProvider';
import './App.css';
import Main from './assets/components/Main';
import { Component } from 'react';



class App extends Component {
  constructor(props) {
    super(props)
    this.setUser = this.setUser.bind(this)
    
    this.state = {
      user: false
    }
  }

  setUser(state) {
    this.setState(state)
  }

  render(){
    const {user} = this.state
    const {setUser} = this
    
    return(
        <Provider value={{user, setUser}}>
          <Main />
        </Provider>
    )
  } 
        
}

export default App;
