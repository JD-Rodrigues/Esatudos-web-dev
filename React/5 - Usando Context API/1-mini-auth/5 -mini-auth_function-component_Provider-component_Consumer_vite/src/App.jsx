import { AuthProvider } from './assets/AuthProvider';
import './App.css';
import Main from './assets/components/Main';

function App (){
    
    return(
        <AuthProvider>
          <Main />
        </AuthProvider>
    )
  
        
}

export default App;
