import React, { useState } from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import {axiosWithAuth} from '../../utilities/axiosWithAuth'

import styled from 'styled-components'
const Div = styled.div`
margin:2% auto;
max-width:30%;

`;
const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      textAlign:'center',
      justifyContent:'center'
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      textAlign:'center'
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  }));
 
const id = `${localStorage.getItem('id')}`

const Favorite = (props) => {
const classes = useStyles();
const theme = useTheme();


const [state, setState] = useState({
	song_id: `${props.data.track_id}`
  })
  
  console.log('this is state', state) 
console.log('this is props in fav',props.data.track_id)
console.log('this is props data',props.data)

function handleDelete(){
  console.log('state in delete', state)
    axiosWithAuth()
    .delete(`https://spotify-buildweek.herokuapp.com/api/user/dashboard/${id}/favorites/`, state)
    .then(response => {
        console.log('this is delete res',response)
    })
    .catch(error => {
        console.log('ehh error', error)
    },[])
  }

    console.log("Favorite:", props);
    return (
        <Div>
        <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content} >
          <Typography component="h5" variant="h5">
          {props.data.track_name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          {props.data.artist_name}
          </Typography>
          <Button
          onClick={handleDelete}
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
        </CardContent>
      </div>
    </Card>
    </Div>
    )
}

export default Favorite;