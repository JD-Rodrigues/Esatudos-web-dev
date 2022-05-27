import css from '../../assets/global.css'

export function Menu2(props) {
    return (
        <div className='menu2'>
            {props.links.map((link, index)=>{
            return <a key={index} href="#">{link}</a>
            })}
        </div>
    )
}