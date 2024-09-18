import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import {imgs} from '../../Utility/data'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from './Carousel.module.css'

function CarouselEffect () {
    return (
        <div>
            <Carousel
                autoplay={false}
                infiniteloop ={true}
                showIndicators={false}
                showThumbs={false} 
                interval={500}>
                {
                    imgs.map((imageItemLink) => {
                        return (<img src={imageItemLink}/>)
                    })
                }
            </Carousel>
            <div className ={classes.hero__img}></div>
        </div>
    );
}

export default CarouselEffect;
