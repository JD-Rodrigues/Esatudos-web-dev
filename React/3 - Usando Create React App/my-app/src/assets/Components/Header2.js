import css from '../../assets/global.css'
import {Menu2} from './Menu2'

export function Header2(props) {
    return (    
        <div className='header2'>
            <div><h1>Este é o menu 2</h1></div>
            <Menu2 links={props.links}></Menu2>
        </div>          
        
    )
}