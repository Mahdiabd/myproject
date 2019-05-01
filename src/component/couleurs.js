import React, { Component } from "react";
import {Link} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'

class Couleurs extends Component {
  state = {};
  render() {
    return (
      <div>
        <center><h1>Couleur Méditerranée</h1></center>
        <br/>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./CM3.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./CM4.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./CM2.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>;
        {/* <center> <h3>Nos Suites</h3></center>
        <img src="./CM2.jpg" className="" alt="" />
        <img src="./CM3.jpg" className="" alt="" /> */}
        <Link to="/Reserv">
				<center><button>Réserver</button></center>
				</Link>
        
      </div>
    );
  }
}

export default Couleurs;