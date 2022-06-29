import { useEffect, useState } from 'react'
import { api } from './api'
import './App.css'
import Form from './components/Form'
import Post from './components/Post'



function App() {
  const [posts, setPosts] = useState([])

  useEffect(
    ()=>{      
      api.getPosts()
      .then(json=>setPosts(json)) 
      .catch(e=>console.warn(e)) 
    },[posts]
  )
  return(
    <div className='App'>
      <Form />
      {posts.map(post=>(        
          <div key={post.id}>
          <Post post={post} />
          </div>       
  ))}
    </div>
  )
}
  

export default App
