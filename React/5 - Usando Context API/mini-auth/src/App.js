
import './App.css';
import { AuthProvider } from './assets/AuthProvider';
import Main from './assets/components/Main';


function App() {
  
  
  return <AuthProvider>
            <Main />
        </AuthProvider>
}

export default App;
