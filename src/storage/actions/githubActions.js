import {GET_USER, GET_FOLLOWING, SET_ERR} from './types';
import axios from 'axios';

export const getUser = (userName) => dispatch => {
    axios.get(`https://api.github.com/users/${userName}`, {
        auth: {
            username: 'nicholas-huang713',
            password: '59f7718421ff5ba6604e587ad8fe34cb6b36f2c1'
        }
    })
    .then((res) => {
        console.log(res.data);
        dispatch({
            type: GET_USER,
            payload: res.data
        })
        dispatch({
            type: SET_ERR,
            payload: ''
        })
        
    }).catch((err) => {
        dispatch({
            type: SET_ERR,
            payload: "User not found"
        })
    })
}

export const getFollowing = (userName, pageSize) => dispatch => {
    axios.get(`https://api.github.com/users/${userName}/following?page=0&per_page=${pageSize}`, {
        auth: {
            username: 'nicholas-huang713',
            password: '59f7718421ff5ba6604e587ad8fe34cb6b36f2c1'
        }
    })
    .then((res) => {
        console.log(res.data);
        dispatch({
            type: GET_FOLLOWING,
            payload: res.data.reverse()
        })
    })
}
