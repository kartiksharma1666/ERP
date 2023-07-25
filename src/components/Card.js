import React from 'react'
import 'D:/temporary/Ecommerce_sem5/src/App.css';
import { Link } from 'react-router-dom'

export default function Card(props) {
  return (
    <div className='my-3 card_container'>
    <div className="card" style={{"width":"18rem"}}> 
      <img src={props.url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-text">{props.description} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non ratione fugitem? Doloribus ducimus dignissimos distinctio!</p>
        <h5 className='card-price'>Rs. {props.price} </h5>
        <div className="d-grid gap-2">
         <center><Link to="/feed"><div className="btn btn-primary btn-dark" type="button">See More</div></Link></center>
        </div>
      </div>
    </div>
  </div>
  )
}
