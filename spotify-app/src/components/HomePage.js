
import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components'
import { axiosWithAuth } from '../utilities/axiosWithAuth';
import MaterialTable from 'material-table';
import  { SongContext } from '../contexts/SongContext'
import HomePageCard from './HomePageCard'

export default function HomePage(props) {
  const songs  = useContext(SongContext);
 

console.log('this is songs context',songs)
const handleChange = e => {
  setSearch(e.target.value)
}
const [data, setData] = useState([]);
const [search, setSearch] = useState("");
const [searchResults, setSearchResults] = useState([]);

const id = `${localStorage.getItem('id')}`


useEffect(()=> {
  axiosWithAuth().get(`https://spotify-buildweek.herokuapp.com/api/user/dashboard/${id}/songs`)
  .then(response => {
    console.log(response.data)
    setData(response.data)
    const filtered = data.filter(filteredSong => {
      return filteredSong.artist_name.toLowerCase().includes(search.toLowerCase());
    });
    setSearchResults(filtered)
  })
  .catch(error => {
    console.error('Server Error', error);
  });    
}, [search]);

  return (
    <section className="search-form">
    <form>
        <label htmlFor="title">Search</label>
        <input type="text" name="title" onChange={handleChange}
        value={search}/>
    </form>
    {searchResults.map(song =>
 
      <HomePageCard 
      key={song.track_id}
      song={song.track_name}
      artist={song.artist_name}
      />

      )}
     </section>
  );
}
 