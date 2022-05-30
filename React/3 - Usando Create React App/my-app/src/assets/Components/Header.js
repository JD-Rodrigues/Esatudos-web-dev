import React from 'react'
import { Route } from 'react-router-dom'
import css from '../../assets/global.css'
import {Menu} from '../Components/Menu'

// export function Header(props) {
//     return (
//         <>
//             <div className='container-header'>
//                 <div><h1>{props.name}</h1></div>
//                 <Menu list={props.links}></Menu>
//             </div>
//         </>
//     )
// }

export class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div className='container-header'>
                    <div><h1>{this.props.name}</h1></div>
                    <Menu list={this.props.links}></Menu>
            </div>
        )
    }
}