import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import LoginPlease from './LoginPlease';
import OrderDetails from '../components/OrderDetails';



export default function Profile() {
  const [details, setDetails] = useState({ name: "", email: "", phone: "", address: "", town: "", pin: "" })
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token')).token === null ? null : JSON.parse(localStorage.getItem('token')).token

    async function getData() {
      const userData = await fetch('http://localhost:5000/api/auth/getuser', {
        method: 'POST',
        headers: {
          'auth-token': token,
          'User-Agent': 'Thunder Client (https://www.thunderclient.com)'
        }
      }).then(res => res.json()).then(res => setDetails(res));   //converted response to jsons
      console.log(userData);
      // console.log(userData.name);
      // console.log(userData.email);
    }
    getData();
  }, []);

  return (
    <div className=''>
      <Navbar />
      {details?<div className="prflcontainer">
        <div id="profile_img" className="iamge">
          <img src="https://i.imgur.com/hHS8Gl5.png" alt="Profile iamge"></img>
        </div>
        <div className="info">
          <p><label>Name  :   </label><label>{details.name}</label></p>
          <p><label>Phone No  :  </label><label> {details.phone}</label></p>
          <p><label>Email Id  :</label><label>{details.email}</label></p>
          <p><label>Adress  :</label><label>{details.address + " " + details.town + " " + details.pin}</label></p>
          <a className='btn btn-success' href='/home' onClick={() => localStorage.removeItem('token')}>Log out</a>
        </div>

      </div>:<LoginPlease />}
      <OrderDetails />
      <Footer />
    </div>
  )
}


