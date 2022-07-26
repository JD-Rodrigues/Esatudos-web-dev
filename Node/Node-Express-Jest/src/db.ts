const database = ["Márcio", "Maria", "Ronaldo"]

function update(name:string):void{
    database.push(name)
    console.log(database)
}

export {update, database}



