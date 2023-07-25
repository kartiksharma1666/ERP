import React from 'react'
import { useState, useEffect } from 'react'
import FeedsCard from '../components/FeedsCard'
import Navbar from '../components/Navbar.js'
import { FaFunnelDollar } from 'react-icons/fa'



export default function Feed() {
  let qty = 0
  if (Object.values(sessionStorage) !== null) {
    // console.log(localStorage.getItem('token'))
    if (localStorage.getItem('token') !== null) {
      Object.values(sessionStorage).forEach((k) => {

        k = JSON.parse(k)
        qty += k.quantity
      })
    }
  }
  const [itemCart, updateCart] = useState(qty);
  const [fabric, setFabric] = useState("All")
  const [kurti, setKurti] = useState([{
    name: "",
    description: "",
    color: "",
    image_url: "",
    price: 0,
    fabric: ""
  }])
  const [preview, setPreview] = useState({ name: "", description: "", price: "" })

  // const fetchData = async () => {
  //   try {
  //     let header = new Headers();

  //     header.append('Content-Type', 'application/json');
  //     header.append('Accept', 'application/json');

  //     header.append('Access-Control-Allow-Origin', 'http://localhost:3000');
  //     header.append('Access-Control-Allow-Credentials', 'true');
  //     header.append('GET', 'POST', 'OPTIONS');
  //     const response = await fetch(`http://localhost:5000/api/kurti/data/${fabric}`, {
  //       method: 'GET',
  //       Headers: header
  //     })
  //     const json = await response.json();
  //     console.log(json);
  //     setKurti(json)
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };


  useEffect(() => {
    const fetchData = async () => {
      try {
        let header = new Headers();

        header.append('Content-Type', 'application/json');
        header.append('Accept', 'application/json');

        header.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        header.append('Access-Control-Allow-Credentials', 'true');
        header.append('GET', 'POST', 'OPTIONS');
        const response = await fetch(`http://localhost:5000/api/kurti/data/${fabric}`, {
          method: 'GET',
          Headers: header
        })
        const json = await response.json();
        console.log(json);
        setKurti(json)
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();

  }, [fabric])


  const handleFilterByDate =async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/kurti/data/${fabric}`, {
        method: 'GET',
        Headers: {'Content-Type':'application/json' , }
      })
      const json = await response.json();
      console.log(json);
      json.sort((a,b) => (a._id < b._id) ? 1 : ((b._id < a._id) ? -1 : 0))
      setKurti(json)
    } catch (error) {
      console.log("error", error);
    }
  }
  
  const handleFilterByPriceLtH =async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/kurti/data/${fabric}`, {
        method: 'GET',
        Headers: {'Content-Type':'application/json' , }
      })
      const json = await response.json();
      console.log(json);
      json.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))
      setKurti(json)
    } catch (error) {
      console.log("error", error);
    }
  }
  const handleFilterByPriceHtL =async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/kurti/data/${fabric}`, {
        method: 'GET',
        Headers: {'Content-Type':'application/json' , }
      })
      const json = await response.json();
      console.log(json);
      json.sort((a,b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0))
      setKurti(json)
    } catch (error) {
      console.log("error", error);
    }
  }




  return (
    <div>
      <Navbar itemCart={itemCart} updateCart={updateCart} fabric={fabric} setFabric={setFabric} preview={preview} setPreview={setPreview} />
      {/* <p onClick={handleFilter} style={{'width':0}}><FaFunnelDollar style={{"fontSize":38 , "marginLeft":1200 , "color":'green'}}/></p> */}
      <div className="dropdown" style={{"alignItems":'end' , "alignSelf":'end'}}>
        <p className='dropdown-toggle' style={{'width':0}} data-bs-toggle="dropdown" aria-expanded="false"><FaFunnelDollar style={{"fontSize":38 , "color":'green'}}/></p>
        <ul className="dropdown-menu">
          <li><button className="dropdown-item" onClick={handleFilterByDate}>Newest First </button></li>
          <li><button className="dropdown-item" onClick={handleFilterByPriceLtH}>Price (Low to High)</button></li>
          <li><button className="dropdown-item" onClick={handleFilterByPriceHtL}>Price (High to Low)</button></li>
        </ul>
      </div>
      <div className='container px-1 mt-3'>
        <div className='row gx-6'>
          {kurti.map((k) => {
            return <div className='col-6 md-3'>
              <FeedsCard url={k.image_url} title={k.name} description={k.description} price={k.price} color={k.color} itemCart={itemCart} updateCart={updateCart} preview={preview} setPreview={setPreview} />

            </div>

          })}
        </div>

      </div>

    </div>
  )
}

