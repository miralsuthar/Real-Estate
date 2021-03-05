import React from 'react'
import styled from 'styled-components'

const Input = ({holder}) => {
    return (
        <InputSection>
            <input placeholder={holder} />
        </InputSection>
    )
}


const InputSection = styled.div`
    margin: 2rem 0rem;
    input{
        border: none;
        font-size: 2rem;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        padding: 0.7rem 2rem;
        border-radius: 1rem;
    }
`;

export default Input
