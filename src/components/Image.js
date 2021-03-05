import React from 'react'
import styled from 'styled-components';

const Img = ({source}) => {
    return (
        <ImageSection>
            <img src={source}></img>
        </ImageSection>
    );
};

const ImageSection = styled.div`
    height: 667px;
    width: 500px;
    overflow: hidden;
    border-radius: 5%;
    box-shadow: 2px 3px 50px rgba(0,0,0,0.2);
    img{
        height: 100%;
        width: 100%;
    }
`

export default Img;
