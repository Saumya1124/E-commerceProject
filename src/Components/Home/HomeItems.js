import { Button } from "react-bootstrap";
import React, { Fragment } from "react";
import './HomeItems.css';

const HomeItem = (props)=> {
    return(
        <Fragment>
            <div className="container d-flex justify-content-center">     
               
               <div className="d-flex items col-lg-10">
                    
                    <div className="col-lg-2">
                        
                        <p>{props.date}</p>
                    </div>
                    <div className="col-lg-3">
                        <p>{props.name}</p>
                    </div>
                    <div className="col-lg-4">
                        <p>{props.activity}</p>
                    </div>
                    <div className="col-lg-3">
                        <Button variant='primary'>Buy Tickets</Button>
                    </div>

               </div>
            </div>
        </Fragment>
    )
}
export default HomeItem