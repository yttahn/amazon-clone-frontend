import React from "react";
import { imgs } from "../../Utility/data";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import classes from "./Carousel.module.css";

function CarouselEffect() {
  return (
    <Carousel>
      {imgs.map((imageItem, index) => (
        <div className={classes.hero__image} key={index}>
          <img src={imageItem} alt={`carousel-item-${index}`} />
        </div>
      ))}
    </Carousel>
  );
}

export default CarouselEffect;
