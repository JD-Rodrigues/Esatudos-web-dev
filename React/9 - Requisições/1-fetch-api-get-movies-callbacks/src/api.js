


export const api = {
    getMovies: ()=>{
        return fetch('https://api.b7web.com.br/cinema').then(data=> {return data.json()}).catch(e=>alert(e))        
    }
        
    
}