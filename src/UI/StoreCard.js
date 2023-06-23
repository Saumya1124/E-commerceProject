import { Fragment } from "react";
import './StoreCard.css';
import {Card , Button} from 'react-bootstrap';

const StoreCard = (props)=> {
    return(
        <Card style={{ width: '18rem' }} className="cards">
           
            <Card.Body>
                <Card.Title className="text-center">{props.title}</Card.Title>
                <br />
                <Card.Img variant="top" src={props.img} />
                <br />
                <Card.Text>${props.price}</Card.Text>
                <Button variant="primary">Add to Cart</Button>
            </Card.Body>
      </Card>
       
    )
}

export default StoreCard