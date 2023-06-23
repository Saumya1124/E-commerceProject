import React , {useState} from 'react';
import './App.css';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import Header from './Components/Header/Header';
import Store from './Components/Store/Store';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart';
import CartProvider from './Context/CartProvider';
import About from './Components/About/About';


const router = createBrowserRouter([
  { path: '/' , element:<Header/>},
  { path: '/about' , element:<About/>}

])


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
            <RouterProvider router={router} />          
     </CartProvider>
  )
}

export default App;
