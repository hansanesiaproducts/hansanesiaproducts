import classes from "./AboutMain.module.css";
import tes from "./herotes.jpg";
import foto1 from "./foto1.jpg";

const AboutMain = () => {
  return (
    <section className={classes.aboutSection}>
      <div className={classes.aboutContainer}>
        <h1 className={classes.mainTitle}>About Us</h1>
        <div className={classes.aboutInnerContainer}>
          <div className={classes.contentContainer}>
            <p>
              Randy &amp; Brandon Outdoor Living is manufacturer and exporter Outdoor Furniture in Indonesia since
              1992 who produce high quality furniture using plantation teak wood and rattan synthetic material.
              We work exclusively with international wholesalers, distributors, and retailers, as well customized
              commercial projects with architectural developers. As manufacturer with in house design and
              production team, we have earned a reputation for providing an innovative design and producing
              high quality furniture. By handling all the process from manufacturing the component, assembling,
              finishing, packing and stuffing we can assure that our clients get the best result for every aspect.
              <br />
              We also accept domestic Indonesian hotel / Resort / Restaurant for project basis.
            </p>
          </div>
          <div className={classes.imageContainer}>
            <img src={foto1} alt="ERR" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMain;
