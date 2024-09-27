import React from "react";
import { Carousel } from "react-responsive-carousel";
import { imgs } from "../../Utility/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./Carousel.module.css";

function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={true}
        interval={3000}
        stopOnHover={false}
        dynamicHeight={true}
      >
        {imgs.map((imageItemLink, index) => (
          <img src={imageItemLink} alt={`carousel-item-${index}`} key={index} />
        ))}
      </Carousel>
      <div className={classes.hero__image}></div> {/* Fixed class name */}
    </div>
  );
}

export default CarouselEffect;
