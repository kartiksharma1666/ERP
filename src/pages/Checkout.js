import React from 'react'
import CheckoutCard from '../components/CheckoutCard'
// import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Bill from '../components/Bill'
import { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'

export default function Checkout() {

  const [render , setRender] = useState(true);
 

  return (
    <div>
      <Navbar />


      <div className='row'>

        {
          Object.values(sessionStorage).map((k) => {
            console.log(typeof (k))
            k = JSON.parse(k)
            // console.log(k.quantity)
            return ( <CheckoutCard className="py-2" img={k.url} color={k.color} quantity={k.quantity} name={k.name} description={k.description} price={k.price} size={k.size} render={render} setRender={setRender}/>)
            
           
          })
        }
      </div>
      <h2> Amount to be paid</h2>
      
     <Bill render={render} setRender = {setRender}/>

      <Footer />
    </div>
  )
}
