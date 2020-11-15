import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {useDispatch} from 'react-redux';
import {getFollowing} from '../../storage/actions/githubActions';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    height: '500px',
    overflow: 'auto'
  },
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }


const imgStyle = {
    width: '40px'
}
export default function Following() {
    const user = useSelector(state => state.github.user);
    const following = useSelector(state => state.github.following);
    const errMsg = useSelector(state => state.github.errMsg);
    const classes = useStyles();
    const dispatch = useDispatch();
    const [pageSize, setPageSize] = useState(10);

    useEffect(() => {
        if(user.login) {
            dispatch(getFollowing(user.login, 10));
        }
    },[user])

    const loadMore = () => {
        dispatch(getFollowing(user.login, pageSize + 10))
        setPageSize(pageSize + 10);
    }

  return (
      <>
      <p style={{color: 'red'}}>{errMsg}</p>
      {user.login ? (
        <>
            <h1>Following</h1>
            {
                user.following > following.length ?
                <Button onClick={() => loadMore()}>Load More</Button>
                :
                 <Button variant="contained" disabled>
                    Load More
                </Button>
            }
            <div className={classes.root}>
                
                <List component="nav" aria-label="main mailbox folders">
                    {following.length > 0 && 
                        following.map((data) => (
                            <ListItem >
                                <ListItemIcon>
                                <img src={data.avatar_url} alt="user avatar" style={imgStyle}/>
                                </ListItemIcon>
                                <ListItemText primary={data.login} />
                            </ListItem>
                        ))
                    }    
                </List>
            </div>
        </>
        ) : (
            <p>Search For Github User</p>
        )}
    </>
    )
}
