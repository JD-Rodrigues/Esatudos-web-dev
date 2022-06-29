


export const api = {
    getMovies: async ()=>{
        
        try {
            const response =  await fetch('https://api.b7web.com.br/cinema/')
            const json = await response.json()
            return json
        } catch (error) {
            console.warn(error)
        }
    }
        
    
}