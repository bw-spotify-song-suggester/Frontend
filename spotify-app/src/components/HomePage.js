
import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { axiosWithAuth } from '../utilities/axiosWithAuth';
import MaterialTable from 'material-table';

export default function HomePage(props) {
  const [state, setState] = useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
      },
    ],
    data: [
      { name: ``, surname: 'Baran', birthYear: 1987, birthCity: 63 },
      {
        name: 'Zerya Betül',
        surname: 'Baran',
        birthYear: 2017,
        birthCity: 34,
      },
    ],
  });
console.log(props)
  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />

import React, { useEffect, useState }from 'react';
import styled from 'styled-components';
import { axiosWithAuth } from '../utilities/axiosWithAuth';

const Div = styled.div`
text-align:center;
color:#EF019F;
font-family: "Abril Fatface Regular";
`;


const id = `${localStorage.getItem('id')}`


const HomePage = () => {
  const id = `${localStorage.getItem(`id`)}`
  const[songlist, setSonglist] = useState();
  
  useEffect(() => {
    axiosWithAuth().get(`https://spotify-buildweek.herokuapp.com/api/user/dashboard/${id}/songs`)
    .then(res => {
      //console.log(res.data[3].track_name)
      setSonglist(res.data);
      console.log(songlist);
  })
    .catch(err => console.log(err))
  },[])

  return (
    <Div className="HomePage">
    <h1>Welcome to `Blank`</h1>
     <p>Welcome to our app that suggests songs to you based on your favorite song please sign in
       or if your a new user sign up here.
     </p>
     {console.log(songlist)}
    </Div>

  );
}
 