import React  from 'react'
import Navbar from '../components/Navbar'


function Preview(props) {
   

    return (
        <div className=''>
            <Navbar />
            <div className="card bg-dark text-white">
                <img src={props.image} className="card- mt-2 mx-2" style={{height : 480}} alt="..." />
                    <div className="card-img-overlay">
                        <h5 className="card-title">{props.title}</h5>                       
                        <p className="card-text">{props.price}</p>
                    </div>
            </div>

        </div>
    )
}

export default Preview
