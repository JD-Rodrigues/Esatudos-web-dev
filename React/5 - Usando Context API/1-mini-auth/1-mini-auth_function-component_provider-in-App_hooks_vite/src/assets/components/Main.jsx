
import { useContext } from 'react';
import Context from '../AuthProvider';
import LoginPage from './LoginPage';
import UserPage from './UserPage';

function Main() {
  const userContext = useContext(Context)
  
  return userContext.user.nick?<UserPage />:<LoginPage />
}

export default Main;