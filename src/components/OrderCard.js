import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function OrderCard(props) {
    return (
        <div>
            <Card style={{ width: '28rem'  , marginLeft:'3rem' , marginTop : '3rem'}}>
                <Card.Img variant="top" src={props.image} height={10} />
                <Card.Body>
                    <Card.Title>{props.name}<br/>
                    <span className='fw-light text-end'>{String(props.date).substring(0,10)}</span> at <span>{String(props.date).substring(11,19)}</span></Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Order ID : {props.id}</ListGroup.Item>
                    <ListGroup.Item>Color : {props.color}               <span style={{"marginLeft":180}}>size :  {props.size}</span> </ListGroup.Item>
                    <ListGroup.Item>Price : ₹ {props.price} x (qty.){props.quantity} <span style={{"marginLeft":160}}>Total : ₹ {props.totalPrice}</span></ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    )
}

export default OrderCard
