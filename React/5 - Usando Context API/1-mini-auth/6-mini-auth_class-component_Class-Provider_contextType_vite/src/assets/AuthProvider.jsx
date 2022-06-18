import { Component, createContext } from "react";

const Context = createContext()

export class AuthProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: false
        }
        this.setUser = this.setUser.bind(this)
    }

    setUser(state){
        this.setState(state)
    }

    render(){
        const {user} = this.state
        const {setUser} = this
        return(
            <Context.Provider value={{user, setUser}}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default Context