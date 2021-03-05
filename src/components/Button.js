import React from 'react'
import styled from 'styled-components'

const Button = ({text}) => {
    return (
        <ButtonComponent>
            <p>{text}</p>
        </ButtonComponent>
    )
}

const ButtonComponent = styled.div`
    width: 278px;
    height: 53px;
    background-color: #7868E6;
    border-radius: 2rem;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    p{
        color: #EDEEF7;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 30px;
    }
`;

export default Button
