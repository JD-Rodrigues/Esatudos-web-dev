
export default function BotãoProp(props) {
    return (
        <button  style={{
            width:'200px',
            height:'50px',
            backgroundColor: props.bgColor,
            border:'5px solid yellow',
            color: props.bgColor==='yellow'||props.bgColor==='white'?'black':'white',
            fontSize: props.fontSize,
            borderRadius: '5px'
        }}>Clique aqui</button>
    )
    
}

