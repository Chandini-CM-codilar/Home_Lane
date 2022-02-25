import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Homelane from './homelane';
import Section from './section';
import Grid from './grid';
import Appliances from './appliances';
import Newarrivals from './Newarrivals';
import Work from './work';
import Login from './login';
import Rating from './rating';
import Visual from './visual';
import Footer from './footer';

ReactDOM.render(
  <>

    <Homelane />
    <Section/>
    <Grid/>
    <Appliances/>
    <Newarrivals/>
    <Work/>
    <Login/>
    <Rating/>
    <Visual/>
    <Footer/>
  </>,

  document.getElementById('root')
);

