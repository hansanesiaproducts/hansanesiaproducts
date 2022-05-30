import classes from "./SideButton.module.css";
import whatsapp from "../../assets/icons/whatsapp_green.png";
const SideButton = () => {
  return (
    <div className={classes.sideButtonContainer}>
      <a
        href="https://api.whatsapp.com/send?phone=628161846300"
        target={"_blank"}
        rel="noreferrer"
        className={`${classes.buttonContainer} ${classes.whatsapp}`}
      >
        <img src={whatsapp} alt="ERR" />
      </a>
      {/* <a href="/" className={`${classes.buttonContainer} ${classes.whatsapp}`}>
        <img src={whatsapp} alt="ERR" />
      </a> */}
    </div>
  );
};
export default SideButton;
