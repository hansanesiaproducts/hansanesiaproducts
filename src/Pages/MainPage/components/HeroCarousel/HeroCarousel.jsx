import classes from "./HeroCarousel.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import foto1 from "./foto1.jpg";
import foto2 from "./foto2.jpg";
import foto3 from "./foto3.jpg";
import foto4 from "./foto4.jpg";
const HeroCarousel = () => {
  return (
    <Splide
      className={classes.carousel}
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
        <img src={foto1} alt="" className={classes.carouselImage} />
      </SplideSlide>
      <SplideSlide className={classes.mainCarouselContainer}>
        <img src={foto2} alt="" className={classes.carouselImage} />
      </SplideSlide>
      <SplideSlide className={classes.mainCarouselContainer}>
        <img src={foto3} alt="" className={classes.carouselImage} />
      </SplideSlide>
      <SplideSlide className={classes.mainCarouselContainer}>
        <img src={foto4} alt="" className={classes.carouselImage} />
      </SplideSlide>
    </Splide>
  );
};

export default HeroCarousel;
