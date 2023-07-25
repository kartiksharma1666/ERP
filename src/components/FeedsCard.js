import React from 'react'
import { useState } from 'react';
// import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


export default function FeedsCard(props) {
    const navigate = useNavigate();
    const [size , setSize] = useState(36)
    const handleChange = (event)=>{
        setSize(event.target.value)
    }

    const handleBuy = () => {
        if (sessionStorage.getItem(props.title + size)) {
            let qty = JSON.parse(sessionStorage.getItem(props.title + size)).quantity
            // console.log(qty)
            sessionStorage.setItem(props.title +size, JSON.stringify({
                url: props.url,
                name: props.title,
                price: props.price,
                color: props.color,
                size: size,
                description: props.description,
                quantity: qty + 1,

            }))
        }
        else {
            sessionStorage.setItem(props.title + size, JSON.stringify({
                url: props.url,
                name: props.title,
                price: props.price,
                color: props.color,
                size: size,
                description: props.description,
                quantity: 1,

            }))
        }
        navigate('/checkout')
    }


    const handleAddCart = (event) => {
        event.preventDefault();
        if (localStorage.getItem('token') === null) {
            alert("You are not logged in . Please Login inorder to shop")
        }
        props.updateCart(props.itemCart + 1)
        if (sessionStorage.getItem(props.title +size)) {
            let qty = JSON.parse(sessionStorage.getItem(props.title + size)).quantity
            sessionStorage.setItem(props.title + size, JSON.stringify({
                url: props.url,
                name: props.title,
                price: props.price,
                color: props.color,
                size: size,
                description: props.description,
                quantity: qty + 1,

            }))
        }
        else {
            sessionStorage.setItem(props.title +size, JSON.stringify({
                url: props.url,
                name: props.title,
                price: props.price,
                color: props.color,
                size: size,
                description: props.description,
                quantity: 1,

            }))
        }
    }
    // const handleSize = (s)=>{
    //     setSize(s)
    // }

    const handleClick = (e) => {
        e.preventDefault();
        props.setPreview({
            name: props.name,
            description: props.description,
            price: props.price
        })
    }

    return (
        <div>
            <div className="card mb-3" style={{ 'maxWidth': 760 }}>
                <div className="row g-0">
                    <div className="col-md-5">
                        <Link to='/preview' ><img src={props.url} onClick={handleClick} className="img-fluid rounded-start h-1" alt="..." /></Link>
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.description}.</p>
                            <p className="card-price">₹ {props.price}</p>
                            <p className="card-price">color : {props.color}</p>
                            <span>Size : </span><select id='size' className='sizes mb=1' onChange={handleChange}>
                                <option value={36}>36</option>
                                <option value={38}>38</option>
                                <option value={40}>40</option>
                                <option value={42}>42</option>
                                <option value={44}>44</option>
                                <option value={46}>46</option>
                            </select>
                            <div className="d-grid gap-2">
                                <button className="btn btn-primary btn-dark mt-2" type="button" onClick={handleBuy}>Buy Now</button>
                                <button className="btn btn-primary btn-dark" type="button" onClick={handleAddCart}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
