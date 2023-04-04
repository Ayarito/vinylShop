import React from "react";
import "./Slider.css";
import Carousel from "react-bootstrap/Carousel";

function Slider() {
  return (
    <section id="slider">
        <h2 className="all__Headers">Albums of the week</h2>
        <Carousel>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
            <img
              className="d-block w-100%"
              src="https://imusic.b-cdn.net/images/item/original/625/0602438936625.jpg?florence-the-machine-2022-dance-fever-lp&class=scaled"
              alt="First slide"
            />
            </div>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div className="d-flex justify-content-center">
            <img
              className="d-block w-100%"
              src="https://imusic.b-cdn.net/images/item/original/625/0602438936625.jpg?florence-the-machine-2022-dance-fever-lp&class=scaled"
              alt="First slide"
            />
            </div>

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <div className="d-flex justify-content-center">
            <img
              className="d-block w-100%"
              src="https://imusic.b-cdn.net/images/item/original/625/0602438936625.jpg?florence-the-machine-2022-dance-fever-lp&class=scaled"
              alt="First slide"
            />
            </div>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </section>
  );
}

export default Slider;
