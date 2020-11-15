import {GET_USER, GET_FOLLOWING, SET_ERR} from '../actions/types';

const initialState = {
    user: {}, 
    following: [],
    errMsg: ''
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_USER: 
            return {
                ...state,
                user: action.payload
            }
        case GET_FOLLOWING: 
            return {
                ...state,
                following: action.payload
            }
        case SET_ERR: 
            return {
                ...state,
                errMsg: action.payload
            }

        default:
            return state;
    }

}