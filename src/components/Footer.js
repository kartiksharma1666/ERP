import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook ,faInstagram , faShopify } from '@fortawesome/free-brands-svg-icons'
import { FaPhoneSquare  , FaEnvelope , FaHome} from "react-icons/fa";

export default function Footer() {
  return (
    <div>
        <script src="https://kit.fontawesome.com/57a35dc412.js" crossOrigin="anonymous"></script>
        <footer className="text-center text-lg-start bg-light text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
            </div>

            <div>
            <a href="https://www.facebook.com/profile.php?id=100064212601439" target="blank" className="me-4 text-reset">
                <FontAwesomeIcon icon={faFacebook}/>
            </a>
            <a href="https://instagram.com/aqsa_chikan_arts" target="blank" className="me-4 text-reset">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.indiamart.com/aqsachikanarts/" target="blank" className="me-4 text-reset">
               <FontAwesomeIcon icon={faShopify} />
            </a>
            </div>

        </section>
        <section className="">
            <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3"></i>AQSA CHIKAN ARTS
                </h6>
                <p>

                   Trending chikankari Kurtis.
                </p>
                </div>
                {/* <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                    Products
                </h6>
                <p>
                    <a href="/" className="text-reset">Angular</a>
                </p>
                <p>
                    <a href="/" className="text-reset">React</a>
                </p>
                <p>
                    <a href="/" className="text-reset">Vue</a>
                </p>
                <p>
                    <a href="/" className="text-reset">Laravel</a>
                </p>
                </div> */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                    Useful links
                </h6>
                <p>
                    <a href="/profile" className="text-reset">Profile</a>
                </p>
                <p>
                    <a href="about/" className="text-reset">About us</a>
                </p>
                <p>
                    <a href="/profile" className="text-reset">Orders</a>
                </p>
                <p>
                    <a href="/" className="text-reset">Help</a>
                </p>
                </div>
            
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><FaHome/>Mumbai , IN</p>
                <p>
                    <FaEnvelope />
                    <a href='mailto:aqsachikan@gmail.com' target="blank">aqsachikan@gmail.com </a>
                </p>
                <p><FaPhoneSquare /> +91 9022881215</p>
                <p><FaPhoneSquare /> +91 8356866102</p>
                </div>
            </div>
            </div>
        </section>
        <div className="text-center p-4">
            © 2021 Copyright:
            <a className="text-reset fw-bold" href="/">  Aqsa Chikan Arts </a>
        </div>

        </footer>

    </div>
  )
}