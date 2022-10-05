import React ,{Suspense}from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './Home';
import './App.css';

function isServer(){
    return typeof window === "undefined";
}


const App = () => {
   // return <Routes>
   //     <Route exact={true} path="/" element={ <Home/>} />
   //  </Routes>
    if(isServer()){
        return (
            <Routes>
                <Route exact={true} path="/" element={ <Home/>} />
            </Routes>
        )
    }else{
        return (
            <Routes>
                <Route exact={true} path="/" element={ <Suspense fallback={<div>Loading...</div>}><Home/></Suspense>} />
            </Routes>
        )
    }

}


export default  App;
