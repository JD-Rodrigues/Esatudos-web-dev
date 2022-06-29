import axios from "axios"


export const api = {
    getMovies: async ()=>{        
        try {
            const response =  await axios('https://api.b7web.com.br/cinema/')
            return response.data
        } catch (error) {
            console.warn(error)
        }
    }
        
    
}