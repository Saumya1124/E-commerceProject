import React from 'react';
import './App.css';
import { Button , Accordion } from 'react-bootstrap';
import { Fragment } from 'react';
import Header from './Components/Header/Header';
import Store from './Components/Store/Store';
import StoreCard from './UI/StoreCard';
import Footer from './Components/Footer/Footer';

const App = ()=> {
  return (
     <Fragment>
              <Header></Header>
              <Store></Store>
              <Footer></Footer>
              
     </Fragment>
  )
}

export default App;
