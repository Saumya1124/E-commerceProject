import React , {useState} from 'react';
import './App.css';
import { Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Store from './Components/Store/Store';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart';
import CartProvider from './Context/CartProvider';
import About from './Components/About/About';
import RootLayout from './Components/RootLayout';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';


// const router = createBrowserRouter([
  
//     { path: '/' , 
//     element:<RootLayout />,
//     children:[
//       { path: '/home', element:<Home />},
//       { path: '/about' , element:<About />},
//       { path: '/store', element:<Store />},
//       { path: '/contact', element:<Contact />}
      
//     ]
//   },
  
 
// ])


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
        <Header></Header>
        {/* <RouterProvider router={router} />           */}
        <Route path='/store'>
            <Store></Store>
        </Route>
        <Route path='/home'>
            <Home></Home>
        </Route>
        <Route path='/about'>
            <About></About>
        </Route>
        <Route path='/contact'>
            <Contact></Contact>
        </Route>
        <Footer></Footer>
      </CartProvider>
  )
}

export default App;
