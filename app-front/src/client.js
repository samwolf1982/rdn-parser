import App from './App';
import { BrowserRouter } from 'react-router-dom';
import React , { Suspense } from 'react';
import ReactDOM from 'react-dom'
import { hydrate } from 'react-dom';

// const element=
hydrate(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'),(a,b,c)=>{
  console.log("my callback",a,b,c)
});
// React.Render()
// ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
if (module.hot) {
  module.hot.accept();
}
