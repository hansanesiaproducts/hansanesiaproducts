import classes from "./KnowMore.module.css";
import { Link } from "react-router-dom";
import tes from "./herotes.jpg";
import foto1 from "./foto1.jpg";

const KnowMore = () => {
  return (
    <section className={classes.knowMoreContainer}>
      <div className={classes.imageContainer}>
        <img src={foto1} alt="ERR" />
      </div>
      <div className={classes.contentContainer}>
        <p>
          Randy & Brandon Outdoor Living is manufacturer and exporter 
          Outdoor Furniture in Indonesia since 1992 who produce high quality 
          furniture using plantation teak wood and rattan synthetic material.
        </p>
        <Link to={"/about"}>Know more</Link>
      </div>
    </section>
  );
};
export default KnowMore;
