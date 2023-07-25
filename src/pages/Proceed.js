import React from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

export default function Proceed() {
    const navigate = useNavigate()

    const handleSubmit = () => {
        try{
            alert('Your order is placed 😊!!  ')
            Object.values(sessionStorage).map(async (k) => {
                k = JSON.parse(k)
                console.log(k.url)
                const details = await fetch('http://localhost:5000/api/order/updateOrders', {
                    method: 'POST',
                    headers: {
                        "auth-token": JSON.parse(localStorage.getItem('token')).token,
                        "Content-Type" : "application/json"
                    },
                    body: JSON.stringify({ totalPrice: k.price * k.quantity , quantity: k.quantity, product: k.name , price : k.price , image:k.url , color : k.color , size:k.size})

                })
                const detail = await details.json()
                console.log(detail)
            })

            navigate('/profile')
            sessionStorage.clear()
        }
        catch(e){
            console.log(e)
        }
    }
    return (
        <>
            <Navbar />
            <div className='container'>
                <h1> Enter Delivery Details</h1>
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Contact 1</label>
                        <input required  type="tel" className="form-control" id="inputEmail4" maxLength={10} minLength={10}/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Contact 2</label>
                        <input required type="tel" className="form-control" id="inputPassword4" maxLength={10} minLength={10}/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Building / Landmark</label>
                        <input required type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress2" className="form-label">Address </label>
                        <input required type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">City</label>
                        <input required type="text" className="form-control" id="inputCity" />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputState" className="form-label">Time Of delivery</label>
                        <select id="inputState" className="form-select">
                            <option selected>Afternoon</option>
                            <option>Evening</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="inputZip" className="form-label">Zip</label>
                        <input required type="text" className="form-control" id="inputZip" />
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input required className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" htmlFor="gridCheck">

                            </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Place Order</button>
                    </div>
                </form>

            </div>
        </>
    )
}
