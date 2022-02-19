

function getAdmins(map) {
    let admins = []
    for (const [user,role] of map) {
        if (role=='admin') {
            admins.push(user)
        }
    }
    return `Os administradores do sistema são ${admins}.`
}   

const users = ([
    ['Arthur','admin'],
    ['Mário','common'],
    ['Márcio','beginner'],
    ['Otávio','admin']
])

//const Mário = users[1][1]



console.log(getAdmins(users))