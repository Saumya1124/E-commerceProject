import React , {useContext, useState} from 'react';
import { lazy , Suspense } from 'react';
import './App.css';
import { Redirect, Route , Switch} from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart';
import CartProvider from './Context/CartProvider';
import RootLayout from './Components/RootLayout';
import AuthContext from './Context/auth-context';
import ItemProvider from './Context/ItemProvider';

// import About from './Components/About/About';
import Store from './Components/Store/Store';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import ProductDetails from './Components/Products/ProductDetails';
import Login from './Components/Login/Login';


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


  // const Login = React.lazy(()=>import('./Components/Login/Login'))
  // const Contact = React.lazy(()=>import('./Components/Contact/Contact'));
  // const Home = React.lazy(()=>import('./Components/Home/Home'));
  const About = React.lazy(()=>import('./Components/About/About'));
  // const Store = React.lazy(()=>import('./Components/Store/Store'));
  // const ProductDetails = React.lazy(()=>import('./Components/Products/ProductDetails'))



 

  const [cartIsShown , setCartIsShown] = useState(false)

  const showCartHandler = ()=> {
    setCartIsShown(true)
  }

  const hideCartHandler = ()=> {
    setCartIsShown(false)
  }

  const ctx = useContext(AuthContext)

  return (

    <ItemProvider >

      {/* <CartProvider >  */}

  

        {cartIsShown && <Cart onHideCart={hideCartHandler}></Cart>}
        <Header onShowCart={showCartHandler}></Header>
        
        {/* <RouterProvider router={router} />           */}

       
        <Switch >

        <Route path='/' exact>
           <Redirect to='/home'/>
        </Route>

        {!ctx.isLoggedIn && <Route path='/login'>
          <Login />
        </Route>}
        

        <Route path='/store' exact>
          {ctx.isLoggedIn ? <Store></Store> : <Redirect to='/login' />}                       
        </Route>
        

        
        <Route path='/home'>
            <Home></Home>
        </Route>


        <Route path='/about'>
            <Suspense fallback={<p>Loading...</p>}>
                <About></About>
            </Suspense>              
        </Route>

        <Route path='/contact'>
            <Contact></Contact>
        </Route>

        <Route path='/login'>
            <Login></Login>
        </Route>

        <Route path='/store/:productID'>
           
                <ProductDetails></ProductDetails>
         
        </Route>

        </Switch>

        

        <Footer></Footer>
      

      {/* </CartProvider> */}

      </ItemProvider>


  )
}

export default App;
