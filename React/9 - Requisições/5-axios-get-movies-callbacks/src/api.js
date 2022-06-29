import axios from "axios"


export const api = {
    getMovies: ()=>{
        return axios.get('https://api.b7web.com.br/cinema/').then(res=>{return res}).catch(e=>alert(e))        
    }
        
    
}