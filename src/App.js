import React , {useState} from 'react';
import './App.css';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import Header from './Components/Header/Header';
import Store from './Components/Store/Store';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart';
import CartProvider from './Context/CartProvider';
import About from './Components/About/About';
import RootLayout from './Components/RootLayout';
import Home from './Components/Home/Home';


const router = createBrowserRouter([
  
    { path: '/' , 
    element:<RootLayout />,
    children:[
      { path: '/home', element:<Home />},
      { path: '/about' , element:<About />},
      { path: '/store', element:<Store />}
      
    ]
  },
  
 
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
        <RouterProvider router={router} />          
      </CartProvider>
  )
}

export default App;
