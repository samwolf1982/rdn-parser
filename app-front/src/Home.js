import React, {useEffect, useState,Suspense} from 'react';
import Button from "./components/Button/Button";
import  axios from 'axios'

const Elem=()=>{
    return null;
    return <div>Загрузка...</div>
}

function Home (props) {
  const [pi,setPi]=useState();

  // axios.get('https://api.github.com/users').then(e=>console.log(e.data[0]))
  axios.get('http://nginx/api/test').then(e=>console.log(e.data))
    console.log('axios')
  useEffect(()=>{
      fetch(`https://api.local.com/api/test`)
          .then(response => response.json())
          .then(data => setPi(data.pi));
  },[])

    return (
        <React.Fragment>
            <div className="home-page">
            HOME PAGE GUGddde3
            <Button/>
            <p>Pi:{pi}</p>
        </div>
        </React.Fragment>
    );
}

export default  Home;
