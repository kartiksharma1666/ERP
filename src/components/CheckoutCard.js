import React, { useEffect } from 'react'
import { useState } from 'react'



export default function CheckoutCard(props) {
    

    let qty1 = JSON.parse(sessionStorage.getItem(props.name+props.size)).quantity
    const [qty , setQty] = useState(qty1)

    const handleAdd = () => {
        setQty(qty => qty+1)
        sessionStorage.setItem(props.name+props.size, JSON.stringify({
            url: props.img,
            name: props.name,
            price: props.price,
            color: props.color,
            size : props.size,
            description: props.description,
            quantity: qty+1,
        }))
        props.setRender(~props.render)
    }

    const handleRemove = () => {
        setQty(qty => qty-1)
        sessionStorage.setItem(props.name+props.size, JSON.stringify({
            url: props.img,
            name: props.name,
            price: props.price,
            color: props.color,
            description: props.description,
            size : props.size,
            // quantity: qty === 1 ? sessionStorage.removeItem(props.name) : qty - 1,
            quantity:qty<=1?0: qty-1,

        }))
        props.setRender(~props.render)
    }

    useEffect(()=>{
        // if(qty===0){
        //     sessionStorage.removeItem(props.name+props.size)
        // }
        console.log(qty)
    },[props.render])
    

    return (
        <div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-2">
                        <img src={props.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-10">
                        <div className="card-body">
                            <h5 style={{ display: "inline-block" }}>Item : </h5><h5 className="card-title" style={{ display: "inline-block" }}>  {props.name}</h5><br />
                            <h6 > Description :</h6><p className="card-text" style={{ display: "inline-block" }}>{props.description}</p><br />
                            <h6 >qty :</h6><p className="card-text" style={{ display: "inline-block" }}>{JSON.parse(sessionStorage.getItem(props.name+props.size)).quantity}</p><br />
                            <h6 >size :</h6><p className="card-text" style={{ display: "inline-block" }}>{JSON.parse(sessionStorage.getItem(props.name+props.size)).size}</p><br />
                            <button type="button" className="btn btn-outline-success" onClick={handleAdd}>Add +</button>
                            <button type="button" className="btn btn-outline-danger" onClick={handleRemove} disabled={qty===0?true:false}>Remove -</button>
                            <h6 >price (INR) : </h6><p className="card-text" style={{ display: "inline-block" }}><small className="text-muted">₹  {props.price}</small></p><br />
                            <h6 >total (INR) :</h6><p className="card-text" style={{ display: "inline-block" }}><small className="text-muted">₹  {props.price * props.quantity}</small></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
