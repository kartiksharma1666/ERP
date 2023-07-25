import Carousel from 'react-bootstrap/carousel';
import 'D:/temporary/Ecommerce_sem5/src/App.css';
import {Link} from 'react-router-dom'


function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <Link to="/feed">
        <img
          id="carousel-image"
          src="https://bucketforada.s3.ap-south-1.amazonaws.com/uploads/all/qKiGLW5feEIeDYHR398on5Im0z0hXfBrbRA2EtCF.jpg"
          alt="First slide"
        />
        </Link>
        <Carousel.Caption >
          <h3 >First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <Link to="/feed">
        <img
          id="carousel-image"
          src="https://bucketforada.s3.ap-south-1.amazonaws.com/uploads/all/H5hZauVXglRBjRTemyeJPQGeiuJ23mNVrhYMmPgB.jpg"
          alt="Second slide"
        />
         </Link>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <Link to="/feed">
        <img
          id="carousel-image"
          src="https://bucketforada.s3.ap-south-1.amazonaws.com/uploads/all/K9YQ4pdHGU33sI3eagvhtYQrFci6a9jijXmxfLNn.jpg"
          alt="Third slide"
        />
         </Link>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            AQSA CHIKAN ARTS
          </p>
        </Carousel.Caption>
       
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;