import React, { memo } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import { FaShoppingBasket } from "react-icons/fa";
// import { useEffect } from 'react';
// import { useEffect } from 'react';


function Cart(props) {


  return (
    <div>
        {/* <Link style={{color: 'green'}} to="/checkout"> */}
        <h3 className='d-inline-block'><FaShoppingBasket /></h3>
        <h6 className='d-inline-block mx-1'>{props.items}</h6>
        {/* </Link> */}
    </div>
  )
}

export default memo(Cart)
