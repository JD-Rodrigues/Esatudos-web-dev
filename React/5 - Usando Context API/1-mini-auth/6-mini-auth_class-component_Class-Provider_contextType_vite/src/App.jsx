import './App.css';
import Main from './assets/components/Main';
import { Component } from 'react';
import { AuthProvider } from './assets/AuthProvider';



class App extends Component { 

  render(){    
    return(
        <AuthProvider>
          <Main />
        </AuthProvider>
    )
  } 
        
}

export default App;
