
import { useContext } from 'react';
import { AuthProvider } from '../AuthProvider';
import LoginPage from './LoginPage';
import UserPage from './UserPage';

function Main() {
  const context = useContext(AuthProvider)
  
  return context.user?<UserPage />:<LoginPage />
}

export default Main;