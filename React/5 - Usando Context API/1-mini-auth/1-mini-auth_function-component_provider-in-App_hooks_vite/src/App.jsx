import { Provider } from './assets/AuthProvider';
import './App.css';
import Main from './assets/components/Main';
import { useState } from 'react';


function App() {
  const [user, setUser] = useState(false)

  return <Provider value={{user, setUser}}>
          <Main />
        </Provider>
        
}

export default App;
