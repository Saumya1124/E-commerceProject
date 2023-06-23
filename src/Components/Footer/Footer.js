import React, { Fragment } from "react";
import './Footer.css';

const Footer = ()=> {
    return(
        <Fragment>
            <div className="d-flex footer">
                <div className="footerContent">
                    <h2>The Generics</h2>
                </div>
                <div className="d-flex justify-content-end footerIcon ">
                    <i class="fa-brands fa-square-youtube"></i>
                    <i class="fa-brands fa-spotify"></i>
                    <i class="fa-brands fa-facebook-f"></i>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer