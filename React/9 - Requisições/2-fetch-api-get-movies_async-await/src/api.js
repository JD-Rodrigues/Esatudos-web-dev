


export const api = {
    getMovies: async ()=>{
        const response =  await fetch('https://api.b7web.com.br/cinema/')
        const json = await response.json()
        return json
    }
        
    
}