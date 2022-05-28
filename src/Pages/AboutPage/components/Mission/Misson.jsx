import classes from "./Misson.module.css";
import tes from "./herotes.jpg";
const Misson = () => {
  return (
    <section className={classes.missonContainer}>
      <div className={classes.imageContainer}>
        <img src={tes} alt="" />
      </div>
      <div className={classes.contentContainer}>
        <h1>Mission</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
          incidunt tempore mollitia nostrum maiores assumenda inventore sint,
          fuga nisi corrupti vero provident ipsum quisquam optio ullam iure
          consectetur corporis eum?
        </p>
      </div>
    </section>
  );
};
export default Misson;
