import React, { Fragment , useContext, useState} from "react";
import './Cart.css';
import { Modal , Button } from "react-bootstrap";
import StoreModal from "../../UI/StoreModal";
import CartItem from "./CartItem";
import CartContext from "../../Context/cart-context";


const productsArr = [

    { title : 'Colors' , price : 100 , imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png' , },

    { title : 'Black and white Colors' , price : 50 , imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png' , },

    { title : 'Yellow and Black Colors' , price : 70 , imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png' , },

    { title : 'Blue Color' , price : 100 , imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png' , },

    
    ]

const Cart = (props)=> {

    
    const ctx = useContext(CartContext)

    const totalPrice = ctx.items.reduce((totalPrice,item) =>{
        return totalPrice+item.price*item.quantity
      },0)

    return(
        <Fragment>
            
        <Modal show={true} animation={false}>
            <Modal.Header >
            <Modal.Title className="title">Cart</Modal.Title>
            <Button onClick={props.onHideCart}><i class="fa-solid fa-xmark"></i></Button>
            </Modal.Header>
            <Modal.Body>
                <div>
                    
                    <div className="d-flex ">
                        <p className="col-lg-6">ITEM</p>
                        <p className="col-lg-3">PRICE</p>
                        <p className="col-lg-3">QUANTITY</p>

                    </div>
                    {console.log(ctx.items)}
                        
                    {ctx.items.map((data)=> (<CartItem id = {data.id} title={data.title} price={data.price} quantity={data.quantity} img={data.imageUrl} onRemove={ctx.removeItem.bind(null,data)}></CartItem>))}

                    <div className="d-flex justify-content-end">
                        <h3>Total : $ {totalPrice} </h3>
                    </div>
            
                </div>

            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={props.onHideCart}>
                Close
            </Button>
            <Button variant="success" onClick={props.onHideCart}>
                Purchase
            </Button>
            </Modal.Footer>
        </Modal>
            

        

         </Fragment>
    )
}

export default Cart