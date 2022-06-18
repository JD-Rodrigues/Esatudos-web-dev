
import { Component } from 'react';
import Context from '../AuthProvider';
import LoginPage from './LoginPage';
import UserPage from './UserPage';

class Main extends Component {
  

  
  render(){
    return(
      <Context.Consumer>      
          
          {(props)=>{            
            return props.user?<UserPage />:<LoginPage />
          }}
        
      </Context.Consumer>
    )
  }
}

export default Main;