import React, { Fragment } from "react";
import { Button } from "react-bootstrap";

const CartItem = (props)=> {

    const removeHandler = (event) => {
        event.preventDefault()
        // const id = console.log(event.target.id)
        props.onRemove()
    }

    return(
        <Fragment>

            <hr />

            <div className="d-flex">
                
                <div className="col-lg-6">
                    <img src={props.img} className="col-lg-4"></img>
                    <p className="col-lg-6">{props.title}</p>
                    
                </div>
                
                <p className="col-lg-3">{props.price}</p>

                <div className="col-lg-3 d-flex">
                    <p>{props.quantity}</p>
                    <br />
                    <div>
                        <Button variant="danger" onClick={removeHandler} id={props.id}>Remove</Button>
                    </div>
                    
                </div>
                
            </div>
           
        </Fragment>
    )
}
export default CartItem