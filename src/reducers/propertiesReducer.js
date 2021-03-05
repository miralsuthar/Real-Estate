import {estateData} from '../Properties';

const initialState = {
    properties: estateData
}


const propertiesReducer = (state=initialState ,action) => {
    switch(action.type){
        case 'GET_PROPERTIES':
            return {...state }
        default:
            return {...state}
    }
}

export default propertiesReducer;