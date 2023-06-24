import { Fragment , useState} from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Cart from "./Cart/Cart";
import Store from "./Store/Store";
import Footer from "./Footer/Footer";
import Home from './Home/Home';
const RootLayout = ()=> {

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
            <Outlet></Outlet>
            {/* <Footer></Footer>  */}
            
        </Fragment>
    )
}
export default RootLayout