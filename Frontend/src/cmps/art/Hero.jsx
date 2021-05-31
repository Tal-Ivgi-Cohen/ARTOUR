import React from 'react';
import Carousel from 'react-material-ui-carousel';

export class Hero extends React.Component {


  render() {
    return (
      <div className="carousel-container">
        <div>
          <Carousel className="heros-container">
            <img src="//cdn.shopify.com/s/files/1/0941/7736/files/FiroozehNeman-Banner02_2048x.jpg?v=1622084011" />
            <img src="//cdn.shopify.com/s/files/1/0941/7736/files/ErikoTsogo-Banner02_4e4b90b9-1a59-4927-abe7-2f8e48cd1a80_2048x.jpg?v=1621907690" />
            <img src="//cdn.shopify.com/s/files/1/0941/7736/files/MayVIPPreview-Banner01_2048x.jpg?v=1621475373"/>
            <img src="//cdn.shopify.com/s/files/1/0941/7736/files/SaraMarloweHall-Banner01_2048x.jpg?v=1621301210"/>
          </Carousel>
        </div>
      </div>

    );
  }
}
