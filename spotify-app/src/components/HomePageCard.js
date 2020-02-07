import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import styled from 'styled-components'
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import {axiosWithAuth} from '../utilities/axiosWithAuth'
import axios from 'axios'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent:'center',
    maxwidth:'300px'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    textAlign:'center'
  },
  content: {
    flex: '1 0 auto',
    minwidth:'200px',
    maxwidth:'200px',
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


const Div = styled.div`
margin:2% auto;
max-width:30%;
.button {
  margin:2px;
}
`;
const Div2 = styled.div`
max-width:100%;
display:flex;
justify-content:space-between;
`;
const id = `${localStorage.getItem('id')}`

const HomePageCard = (props) => {
  const [state, setState] = useState({
  user_id: `${id}`,
	song_id: `${props.trackId}`
  })
  const [sim, setSim]= useState({
    track_id: `${props.trackId}`
  })

  
const classes = useStyles();
const theme = useTheme();
console.log('this is fav state outside ',state)

    function handleSave(event){
      console.log(props.trackId)
      console.log('this is state in save', state)
      event.preventDefault();
        axiosWithAuth().post(`https://spotify-buildweek.herokuapp.com/api/user/dashboard/${id}/favorites/`, state)
        .then(response => {
          console.log('this is post fav',response)
            console.log('this is fav state',state)
            window.alert('Song added to favorites')
        })
        .catch(error => {
            console.log('ehh error', error)
        },[])
      }

      function handleSim(e){
        e.preventDefault();
        console.log('sim in handlesim',sim)
        axios.post('https://song-suggest-josh.herokuapp.com/processjson', sim)
        .then(response => {
          console.log('this is sim res',response)
            console.log('this is fav state',state)
            window.alert('Song added to favorites')
        })
        .catch(error => {
            console.log('ehh error', error)
        },[])
      }
      
    return (
        <Div>
        <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5" key={props.key}>
          {props.song}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          {props.artist}
          </Typography>
          <Div2>
          <Button
        className="button"
        variant="contained"
        color="primary"
        size="large"
        startIcon={<SaveIcon />}
        onClick={handleSave}
      >
        Save
      </Button>
      <Button variant="contained" color="primary"
       onClick={handleSim}
       className="button"
      >
        Similar Songs
      </Button>
      </Div2>
        </CardContent>
      </div>
        
    </Card>
    </Div>
    )
}

export default HomePageCard;