import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';

function Login() {
    const navigate = useNavigate();
    // const history = useHistory();
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    const [token, setToken] = useState({ success: false, token: "" })

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                  },
                body: JSON.stringify({ email: credentials.email, password: credentials.password })
            });

            const json = await response.json()
            console.log(json)
            setToken({ success: json.success, token: json.token })
            // console.log(token.success)
            if (json.success) {
               
                localStorage.setItem('token', JSON.stringify(json));
                navigate('/');
                console.log(localStorage.getItem('token'))
                // history.push('/');
            }
            else {
                alert('Wrong credentials')
            }
        }
        catch(e){
            alert('internal server error')
        }

    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })

    }
    return (
        <>
            <Navbar token={token} setToken={setToken} />
            <div className='container ml-9'>

                <h1> Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input required type="email" className="form-control" id="email" onChange={onChange} name='email' value={credentials.email} aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input required type="password" className="form-control" id="password" onChange={onChange} value={credentials.password} name='password' />
                    </div>
                    {/* <div className="mb-3 form-check">
                    <input required type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div> */}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        </>
    )
}

export default Login
