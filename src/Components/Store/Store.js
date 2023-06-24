import React from 'react';
import { Fragment } from "react";
import { Button } from "react-bootstrap";
import StoreCard from "../../UI/StoreCard";
import StoreItem from "./StoreItem";
import {useContext} from 'react';
import CartContext from '../../Context/cart-context';


const productsArr = [

    { id : 1 ,title : 'Colors' , price : 100 , imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png' , },

    { id : 2 ,title : 'Black and white Colors' , price : 50 , imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png' , },

    { id : 3, title : 'Yellow and Black Colors' , price : 70 , imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png' , },

    { id : 4 ,title : 'Blue Color' , price : 100 , imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png' , },

    
    ]

const Store = ()=> {

    const ctx = useContext(CartContext)

    const addToCart = (id , amount)=> {
        ctx.addItem({
            id : id,
            title : productsArr.title,
            price : productsArr.price,
            amount : amount            
        })

    }

    return(
       <Fragment>
                
              <div className="music">
                   <br />
                   <h2 className="text-center">MUSIC</h2>
                   <div className="container">
                        <div className="row">
                            <div className="d-flex justify-content-center flex-wrap">
                                {productsArr.map( (data)=> (<StoreItem title={data.title} price={data.price} img = {data.imageUrl} onAddToCart={addToCart} id={data.id} />) )}
                            </div>
                            
                        </div>
                   </div>
              </div>
            
            <br />
            <br />
            <br />
              
            <div className="container d-flex justify-content-center">
                <Button variant="secondary">Go To Cart</Button>{' '}
            </div>

            <br />
            <br />
              
       </Fragment>
    )
}

export default Store