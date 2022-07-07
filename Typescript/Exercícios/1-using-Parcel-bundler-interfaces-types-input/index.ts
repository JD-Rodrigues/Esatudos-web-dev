

interface ICar {
    name: string;
    year: number;
    air: boolean;
    horn: (sound:string )=>string;
    
}

interface ICar2 {
    model: string;
    chasis: number;
    dvd: boolean;
    engineSound: (sound:string)=> string;
}

type ICars = ICar | ICar2

const car: ICars = {
    name: "Monza",
    year: 1972,
    air: true,
    horn: function(sound){ return `${document.querySelector('input').value}: ${sound}`}    
}





document.querySelector('button').addEventListener('click', (e)=>{
    e.preventDefault()
    document.querySelector('h1').innerHTML=car.horn('Buuuuuuu')
})




