import axios from "axios"

const posts = axios.create(
    {
        baseURL:'https://jsonplaceholder.typicode.com/posts/',
        timeout: 1000,
        headers: {"Content-Type":"application/json"}
    }
)

export const api = {
   
    getPosts: async()=>{
        try {
            const response = await posts.get('https://jsonplaceholder.typicode.com/posts/')
            return response.data             
        } catch (error) {
            console.warn(error)
        }
                 
    },

    makePost: (title, body)=>{
        posts.post('https://jsonplaceholder.typicode.com/posts/',
        {
            title: title,
            body: body,
            id: 95
        })
        .then(res=>alert(res.data.body))
        .catch(e=>console.warn(e))

        
        
    }
    
        
    
}