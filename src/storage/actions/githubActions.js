import {GET_USER, GET_FOLLOWING, SET_ERR} from './types';
import axios from 'axios';

export const getUser = (userName) => dispatch => {
    axios.get(`https://api.github.com/users/${userName}`, {
        auth: {
            username: process.env.GITHUB_USERNAME,
            password: process.env.TOKEN
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
            username: process.env.GITHUB_USERNAME,
            password: process.env.TOKEN
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
