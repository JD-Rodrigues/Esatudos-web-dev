import { Route, Routes } from 'react-router-dom'
import './App.css'
import { AboutUs } from './components/AboutUs'
import { Cases } from './components/Cases'
import { Contact } from './components/Contact'
import { Index } from './components/Index'
import { NotFound } from './components/NotFound'
import { Sites } from './components/Sites'
import { WebSystems  } from './components/WebSystems'
import { Games } from './components/Games'
import { Login } from './components/Login'
import { User } from './components/User'
import { Auth } from './components/Auth'

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<Index />}/>
          <Route path='about-us' element={<AboutUs />}/>
          <Route path='cases' element={<Cases />}>
            <Route path='sites' element={<Sites />}/>
            <Route path='web-systems' element={<WebSystems />}/>
            <Route path='games' element={<Games />}/>
          </Route>
          <Route path='contact' element={<Contact />}/>
          <Route path='user/:slug' element={<Auth><User /></Auth>}/>
          <Route path='login' element={<Login />}/>
          <Route path='auth' element={<Auth />}/>
        </Route>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  )
}

export default App
