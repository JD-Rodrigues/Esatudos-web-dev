import React from "react";
import { useSelector } from 'react-redux';
import LoginPage from './LoginPage';
import UserPage from './UserPage';

function Main() {
  const context = useSelector(state=>state)
  
  return context?<UserPage />:<LoginPage />
}

export default Main;