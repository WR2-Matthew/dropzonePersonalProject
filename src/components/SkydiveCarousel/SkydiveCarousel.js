import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class SkydiveCarousel extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src="https://www.skydiveorange.com/wp-content/uploads/skydiving-through-clouds.jpg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="https://www.skydiveorange.com/wp-content/uploads/skydiving-through-clouds.jpg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="https://www.skydiveorange.com/wp-content/uploads/skydiving-through-clouds.jpg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    );
  }
};

export default SkydiveCarousel;