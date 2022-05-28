import classes from "./KnowMore.module.css";
import { Link } from "react-router-dom";
import tes from "./herotes.jpg";
const KnowMore = () => {
  return (
    <section className={classes.knowMoreContainer}>
      <div className={classes.imageContainer}>
        <img src={tes} alt="ERR" />
      </div>
      <div className={classes.contentContainer}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
          incidunt tempore mollitia nostrum maiores assumenda inventore sint,
          fuga nisi corrupti vero provident ipsum quisquam optio ullam iure
          consectetur corporis eum?
        </p>
        <Link to={"/about"}>Know more</Link>
      </div>
    </section>
  );
};
export default KnowMore;
