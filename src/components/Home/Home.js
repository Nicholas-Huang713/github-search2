import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux';
import Paper from '@material-ui/core/Paper';

export default function Home() {
    const user = useSelector(state => state.github.user);
    const errMsg = useSelector(state => state.github.errMsg);
    
    return (
        <>
            <p style={{color: 'red'}}>{errMsg}</p>
            {user.login ? (
                <Paper elevation={3}>
                    <img src={user.avatar_url} alt="user avatar"/>
                    <p>{user.login}</p>
                    <p>{user.following} following</p>
                </Paper>
                
            ) : (
                <p>Search For Github User</p>
            )}
        </>
    )
}
