import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import OrderCard from './OrderCard'


export default function OrderDetails() {

  let [order, setOrder] = useState([{ totalPrice: 0, quantity: 0, product: "" , price:0 , image:"" , size:0 , color:""}])

  useEffect(() => {
    async function getOrders() {
      let orders = await fetch('http://localhost:5000/api/order/ordered', {
        method: 'GET',
        headers: {
          'auth-token': JSON.parse(localStorage.getItem('token')).token,
          'Content-Type': 'application/json'
        }
      })

      const json = await orders.json()
      setOrder(json)

    }
    getOrders()
  } , [])
  return (
    <div>
      <h1> Your Orders : </h1>
      <div className='row gx-5'>
        {order.map((i) => {
          // i.timeStamp = String(Date(i.timeStamp).toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }))
          return <div className='col-md-4'><OrderCard name={i.product} price={i.price} quantity={i.quantity} totalPrice={i.totalPrice} image={i.image} color={i.color} size={i.size} date={i.timeStamp} id={i._id}/></div>
        })

        }
      </div>

    </div>
  )
}
