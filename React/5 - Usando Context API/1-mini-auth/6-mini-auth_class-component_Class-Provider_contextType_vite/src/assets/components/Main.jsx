
import { Component } from 'react';
import Context from '../AuthProvider';
import LoginPage from './LoginPage';
import UserPage from './UserPage';

class Main extends Component {
  static contextType = Context

  
  render(){
    const {user} = this.context
    return(
      user?<UserPage />:<LoginPage />
    )
  }
}

export default Main;