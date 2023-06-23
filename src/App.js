import React , {useState} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Store from './Components/Store/Store';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart';
import CartProvider from './Context/CartProvider';


const App = ()=> {

  const [cartIsShown , setCartIsShown] = useState(false)

  const showCartHandler = ()=> {
    setCartIsShown(true)
  }

  const hideCartHandler = ()=> {
    setCartIsShown(false)
  }

  return (
     <CartProvider>
            {cartIsShown && <Cart onHideCart={hideCartHandler}></Cart>}
            <Header onShowCart={showCartHandler}></Header>
              <Store></Store>
              <Footer></Footer>              
     </CartProvider>
  )
}

export default App;
