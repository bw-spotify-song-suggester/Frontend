import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components'
import { axiosWithAuth } from '../utilities/axiosWithAuth';
import MaterialTable from 'material-table';
import  { SongContext } from '../contexts/SongContext'



const HomePageCard = (props) => {
    console.log('this is props',props)


    return (
        <div key={props.key}>
        <p> Song Name: {props.song} </p>
        <p> Artist: {props.artist} </p>
         </div>
    )
}

export default HomePageCard;