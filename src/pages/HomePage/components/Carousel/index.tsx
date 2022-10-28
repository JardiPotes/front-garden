import React, {Component} from 'react';
import {Carousel} from "react-bootstrap";
import garden1 from '../../../../assets/gardentest.jpg'
import garden2 from '../../../../assets/jardin2.png'
import garden3 from '../../../../assets/jardin3.png'


//carousel de photos de la page Main
export function CarouselHome()  {
    return (
      <div>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-50 mx-auto"
              src={garden1}
              alt="garden"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50 mx-auto"
              src={garden2}
              alt="garden"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50 mx-auto"
              src={garden3}
              alt="garden"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }


