import css from '../../assets/global.css'

export function Menu(props) {
    return (
        <div id="lista-menu">
            {props.list.map((link, index)=>{
                return <a href='#' id={index}>{link}</a>
            })
            }
        </div>
    )
}