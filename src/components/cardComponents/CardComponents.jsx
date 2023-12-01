import React from "react";
import "./CardComponents.css";
import cardImage from "../../assets/Group 7479.png";
import { Carousel } from "react-bootstrap";
function CardComponents() {
  return (
    <div className="cardComponents">
      <div className="card-container">
        <Carousel className="carousel slide" data-ride="carousel">
          {" "}
          <Carousel.Item>
            <img
              className="carousel-image img-fluid"
              src={cardImage}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-image img-fluid"
              src={cardImage}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-image img-fluid"
              src={cardImage}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-image img-fluid"
              src={cardImage}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-image img-fluid"
              src={cardImage}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-image img-fluid"
              src={cardImage}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-image img-fluid"
              src={cardImage}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-image img-fluid"
              src={cardImage}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-image img-fluid"
              src={cardImage}
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default CardComponents;
