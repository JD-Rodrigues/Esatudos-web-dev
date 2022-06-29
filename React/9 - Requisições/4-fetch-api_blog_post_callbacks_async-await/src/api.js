import axios from "axios"



export const api = {
   
    getPosts: async()=>{
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/')
            return response.data             
        } catch (error) {
            console.warn(error)
        }
                 
    },

    makePost: (title, body)=>{
        axios.post('https://jsonplaceholder.typicode.com/posts/',
        {
            title: title,
            body: body,
            id: 95
        })
        .then(res=>alert(res.data.body))
        .catch(e=>console.warn(e))

        
        
    }
    
        
    
}