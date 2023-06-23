import { Fragment } from "react";
import { useContext } from "react";
import CartContext from "../../Context/cart-context";
import { Button } from "react-bootstrap";
import './HeaderCart.css';


const HeaderCart = (props)=> {

    const ctx = useContext(CartContext)
    const numberOfCartItems = ctx.items.length;
    
    return (
        <Fragment>
                <div>
                    <Button variant='secondary' className="d-flex cartBtn" onClick={props.showCart} >
                        <p>CART</p>
                        <p>{numberOfCartItems}</p>
                    </Button>
                </div>
        </Fragment>
    )
}

export default HeaderCart