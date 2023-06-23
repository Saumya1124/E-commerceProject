import React , {useState} from 'react';
import './App.css';
import { Button , Accordion } from 'react-bootstrap';
import { Fragment } from 'react';
import Header from './Components/Header/Header';
import Store from './Components/Store/Store';
import StoreCard from './UI/StoreCard';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart';
import StoreModal from './UI/StoreModal';


const App = ()=> {

  const [cartIsShown , setCartIsShown] = useState(false)

  const showCartHandler = ()=> {
    setCartIsShown(true)
  }

  const hideCartHandler = ()=> {
    setCartIsShown(false)
  }

  return (
     <Fragment>
            {cartIsShown && <Cart onHideCart={hideCartHandler}></Cart>}
            <Header onShowCart={showCartHandler}></Header>
              <Store></Store>
              <Footer></Footer>
              
              
     </Fragment>
  )
}

export default App;
