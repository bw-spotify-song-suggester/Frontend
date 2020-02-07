
import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components'
import { axiosWithAuth } from '../utilities/axiosWithAuth';
import MaterialTable from 'material-table';
import  { UserIdContext } from '../contexts/UserIdContext'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import HomePageCard from './HomePageCard';
import CircularProgress from '@material-ui/core/CircularProgress';




const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    margin:'2% auto'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));
const Section = styled.section`
  text-align:center;
  color:#EF019F;
`;

export default function HomePage(props) {
  const id = useContext(UserIdContext);
  const classes = useStyles();



const handleChange = e => {
  setSearch(e.target.value)
}
const [data, setData] = useState([]);
const [search, setSearch] = useState("");
const [searchResults, setSearchResults] = useState([]);
const [isLoading, setIsLoading] = useState(false);


function handleSubmit(event){
  event.preventDefault();
  setIsLoading(true);
  axiosWithAuth().get(`https://spotify-buildweek.herokuapp.com/api/user/dashboard/${id}/songs`)
  .then(response => {
    console.log(response.data)
    setData(response.data)
    const filtered = data.filter(filteredSong => {
      return filteredSong.artist_name.toLowerCase().includes(search.toLowerCase());
    });
    console.log('this is filtered',filtered)
    setSearchResults(filtered)
    setIsLoading(false)
  })
  .catch(error => {
    console.error('Server Error', error);
  }, [search]);
}
console.log('this is search results',searchResults)
  return (
    <Section className="search-form">
      <h1>Search for an artist</h1>
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search For a Artist"
        inputProps={{ 'aria-label': 'search for artist' }}
        value={search}
        onChange={handleChange}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick={handleSubmit}>
        <SearchIcon />
      </IconButton>
    </Paper>
    {isLoading ? (
       <CircularProgress color="secondary" />
    ) : (
    searchResults.map(song =>
       
      <HomePageCard 
      trackId={song.track_id}
      song={song.track_name}
      artist={song.artist_name}
      />

      )
    )}
     </Section>
  );
}

export default HomePage;
 