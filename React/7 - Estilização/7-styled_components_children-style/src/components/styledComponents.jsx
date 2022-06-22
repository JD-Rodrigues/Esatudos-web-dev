import styled from 'styled-components'

export const Container = styled.div`
    width: 800px;
    height: 200px;
    padding:10px;
    column-gap: 10px;
    margin: auto;
    background-color: grey;
    display: flex;
    
    justify-content:center;
    align-items:center;
    border: 5px solid blue;
    border-radius: 5px;
    color: black;
    margin-top:20px;

    p {
        color: blue;
        font-weight: bold;
        font-size: 30px;
    }

    .free {
        width:100px;
        height: 50px;

        &:hover {
            background-color: purple;
        }
    }

    #box:checked+label{
        text-decoration: line-through
    }

    
`

