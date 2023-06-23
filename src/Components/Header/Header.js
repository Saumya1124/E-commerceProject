import React, { Fragment } from "react";
import './Header.css'
import {Navbar} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import HeaderCart from "./HeaderCart";

const Header = ()=> {
    return(

        <Fragment>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container >
                {/* <Navbar.Brand href="#home"></Navbar.Brand> */}
                <Nav className="me-auto d-flex justify-content-center nav">
                    <Nav.Link href="#home">HOME</Nav.Link>
                    <Nav.Link href="#features">STORE</Nav.Link>
                    <Nav.Link href="#pricing">ABOUT</Nav.Link>
                </Nav>

                <div className="d-flex justify-content-end">
                    <HeaderCart></HeaderCart>
                </div>
                </Container>
            </Navbar>

            <div className="heading d-flex justify-content-center">

                <p>The Generics</p>

            </div>

            
        </Fragment>
        
    )
}

export default Header