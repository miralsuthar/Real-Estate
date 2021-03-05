import React from 'react'
import styled from 'styled-components';
import EstateData from './estateData';
import {useSelector} from 'react-redux';


const estateDataList = () => {
   const properties = useSelector(state => state.properties.properties);
    return (
        <DataList>
            {properties.map((property,index) => (
                <EstateData key={property.id} source={property.img} title={property.name} />
            ))}
        </DataList>
    )
}
const DataList = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    min-height: 100vh;
    width: 90%;
    margin: auto;
    grid-column-gap: 20px;
`;


export default estateDataList
