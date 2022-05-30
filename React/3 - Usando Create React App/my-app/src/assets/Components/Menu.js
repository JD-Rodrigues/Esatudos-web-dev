import React from 'react';
import css from '../../assets/global.css'

// export function Menu(props) {
//     return (
//         <div id="lista-menu">
//             {props.list.map((link, index)=>{
//                 return <a href='#' key={index}>{link}</a>
//             })
//             }
//         </div>
//     )
// }

export class Menu extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
<div id="lista-menu">
            {this.props.list.map((link, index)=>{
                return <a href='#' key={index}>{link}</a>
            })
            }
        </div>
        )
    }
}