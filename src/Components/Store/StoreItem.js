import { Fragment } from "react";
import './StoreItem.css';
import {Card , Button} from 'react-bootstrap';


const StoreItem= (props)=> {

    const submitHandler = (e)=> {
        
        e.preventDefault()
        props.onAddToCart(props.id , 1)
        

    }

    
    return(
        <Card style={{ width: '18rem' }} className="cards">
           
            <Card.Body>
                <Card.Title className="text-center">{props.title}</Card.Title>
                <br />
                <Card.Img variant="top" src={props.img} />
                <br />
                {props.id}
                <Card.Text>${props.price}</Card.Text>
                
                <Button variant="primary" onClick={submitHandler}>Add to Cart</Button>
            </Card.Body>
      </Card>
       
    )
}

export default StoreItem