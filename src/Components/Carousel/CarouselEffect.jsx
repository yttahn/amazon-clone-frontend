
import React from "react";
import { imgs } from "../../Utility/data";
import { Carousel } from "react-responsive-carousel";
import classes from "./Carousel.module.css";

function CarouselEffect() {
  return (
    <Carousel
      autoPlay      // This enables autoplay
      interval={3000}  // Time interval in milliseconds (3000ms = 3 seconds)
      infiniteLoop   // Allows the carousel to loop infinitely
      showThumbs={false}  // Hides the thumbnail navigation
      showStatus={false}  // Hides the status indicator (e.g., "1/5")
      showArrows={false}  // Optionally hide navigation arrows if desired
    >
      {imgs.map((imageItem, index) => (
        <div className={classes.hero__image} key={index}>
          <img src={imageItem} alt={`carousel-item-${index}`} />
        </div>
      ))}
    </Carousel>
  );
}

export default CarouselEffect;

