import Post from "./components/Post"



export const api = {
   
    getPosts: async()=>{
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
            const json = response.json()
            return json 
        } catch (error) {
            console.warn(error)
        }
                 
    },

    makePost: (title, body)=>{
        fetch('https://jsonplaceholder.typicode.com/posts/', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                id: 95
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res=>res.json()).then(res=>alert(res.body))
        .catch(e=>console.warn(e))

        
        
    }
    
        
    
}