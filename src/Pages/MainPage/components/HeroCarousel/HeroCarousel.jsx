import classes from "./HeroCarousel.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import tes from "./herotes.jpg";
const HeroCarousel = () => {
  return (
    <Splide
      options={{
        rewind: true,
        perPage: 1,
        perMove: 1,
        pagination: true,
        arrows: false,
        autoplay: true,
        drag: false,
        interval: 8500,
        lazyLoad: "nearby",
        preloadPages: 1,
        rewindSpeed: 1500,
        paginationDirection: "ttb",
      }}
    >
      <SplideSlide className={classes.mainCarouselContainer}>
        <img src={tes} alt="" className={classes.carouselImage} />
      </SplideSlide>
      <SplideSlide className={classes.mainCarouselContainer}>
        <img src={tes} alt="" className={classes.carouselImage} />
      </SplideSlide>
      <SplideSlide className={classes.mainCarouselContainer}>
        <img src={tes} alt="" className={classes.carouselImage} />
      </SplideSlide>
      <SplideSlide className={classes.mainCarouselContainer}>
        <img src={tes} alt="" className={classes.carouselImage} />
      </SplideSlide>
    </Splide>
  );
};

export default HeroCarousel;
