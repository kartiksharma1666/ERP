import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    const navigate = useNavigate();
    const [details, setDetails] = useState({ name: "", email: "", adress: "", town: "", pin: "", phone: "", password: "", cpassword: "" })

    const handleSubmit = async (e) => {
        const check = ()=>{
            if(details.password !== details.cpassword){
                alert('both password field must have same value');
                return false;
            }
        }
        if(check()){

        } 
       else {
        e.preventDefault();
        let header = new Headers();


        header.append('Content-Type', 'application/json');
        header.append('Accept', 'application/json');

        header.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        header.append('Access-Control-Allow-Credentials', 'true');
        header.append('GET', 'POST', 'OPTIONS');
        const response = await fetch("http://localhost:5000/api/auth/createUser", {
            method: 'POST',
            headers: header,
            body: JSON.stringify({ name: details.name, email: details.email, address: details.address, town: details.town, pin: details.pin, phone: details.phone, password: details.password, cpassword: details.cpassword })
        });
        const json = await response.json();
        console.log(json)
        if (json.success) {
            alert('You signed up successfully now you can login!!!')
            navigate('/')
        }
        else {
            alert('wrong credentials')
        }
    }


}
const onChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value })

}

return (
    <>
        <Navbar />
        <div className='container'>

            <form onSubmit={handleSubmit}>
                <div className="form-group mb-2">
                    <label htmlFor="name">Name</label>
                    <input required type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" placeholder="Enter Name" onChange={onChange} />
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="email">Email address</label>
                    <input required type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={onChange} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="exampleInputEmail1">Blg / room  number</label>
                    <input required type="text" className="form-control" id="address" name='address' aria-describedby="emailHelp" placeholder="Enter Blg/Romm No eg : Monalisa B/04" onChange={onChange} />
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="text">Town Name</label>
                    <input required type="text" className="form-control" id="town" name='town' aria-describedby="emailHelp" placeholder="Enter town name eg : Andheri" onChange={onChange} />
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="exampleInputEmail1">Pin code</label>
                    <input required type="text" className="form-control" id="pincode" name='pin' aria-describedby="emailHelp" placeholder="Enter pincode eg: 400001" onChange={onChange} />
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="phone">phone number</label>
                    <input required type="text" className="form-control" id="phone" name='phone' aria-describedby="emailHelp" placeholder="Enter phone Number" maxLength={10} minLength={10} onChange={onChange} />
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="password">Password</label>
                    <input required type="password" className="form-control" id="password" name='password' placeholder="Password" minLength={5} onChange={onChange} />
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="cpassword">Confirm Password</label>
                    <input required type="password" className="form-control" id="cpassword" name="cpassword" placeholder="confirm Password" minLength={5} onChange={onChange} />
                </div>
                <div className="form-group form-check mb-2">
                    <input required type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">agree terms & conditions</label>
                </div>
                <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Submit</button>
            </form>

        </div>
    </>
)
}