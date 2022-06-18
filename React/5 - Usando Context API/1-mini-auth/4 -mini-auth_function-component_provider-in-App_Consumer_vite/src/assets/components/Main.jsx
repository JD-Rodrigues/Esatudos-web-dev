
import Context from '../AuthProvider';
import LoginPage from './LoginPage';
import UserPage from './UserPage';

function Main() { 
  
    
    return(
      <Context.Consumer>
        {(props)=>{
          return props.user.nick?<UserPage />:<LoginPage />
        }}
      </Context.Consumer>
    )
  
}

export default Main;