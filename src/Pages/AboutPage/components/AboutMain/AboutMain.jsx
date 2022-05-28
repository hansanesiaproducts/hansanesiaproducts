import classes from "./AboutMain.module.css";
import tes from "./herotes.jpg";
const AboutMain = () => {
  return (
    <section className={classes.aboutSection}>
      <div className={classes.aboutContainer}>
        <h1 className={classes.mainTitle}>About Us</h1>
        <div className={classes.aboutInnerContainer}>
          <div className={classes.contentContainer}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              tempora aliquam omnis laudantium, quibusdam, sapiente maxime eum
              quisquam vero, quidem molestias libero expedita placeat. Incidunt
              quisquam tempore quos officiis dolor?
            </p>
          </div>
          <div className={classes.imageContainer}>
            <img src={tes} alt="ERR" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMain;
