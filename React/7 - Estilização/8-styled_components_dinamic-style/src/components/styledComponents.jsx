import styled from 'styled-components'

export const Container = styled.div`
    width: 500px;
    height: 200px;
    margin: auto;
    background-color: ${(props)=>props.bg || 'pink'};
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border: 5px solid blue;
    border-radius: 5px;
    color: ${(props)=>{return props.bg==='yellow' || props.bg==='white' || props.bg==='gold' ? 'black' : 'white'}};
`

