import React from 'react';
import styled from 'styled-components';

const estateData = ({source, title}) => {
    return (
        <EstateDataShower>
            <ImageBg src={source} alt="image of houses"></ImageBg>
            <h1>{title}</h1>
        </EstateDataShower>
    )
}

const ImageBg = styled.img`
    height: 100%;
    width: 100%;
`;

const EstateDataShower = styled.div`
    height: 300px;
    width: 400px;
    border-radius: 2rem;
`;

export default estateData;
