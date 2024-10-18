
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import images from '../../Utility/data.js';  // Import the array of images

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      interval={3000}
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      showArrows={false}
    >
      {images.map((imageItem, index) => (
        <div className="hero__image" key={index}>
          <img src={imageItem} alt={`carousel-item-${index}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default MyCarousel;
