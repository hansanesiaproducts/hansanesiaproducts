import classes from "./SideButton.module.css";
import whatsapp from "../../assets/icons/whatsapp_green.png";
import email from "../../assets/icons/email.png";
import phone from "../../assets/icons/phone.png";
const SideButton = () => {
  return (
    <div className={classes.sideButtonContainer}>
      <a
        href="https://api.whatsapp.com/send?phone=628161846300&text=I%20am%20interest%20in%20your%20products%20and%20would%20like%20to%20know%20more"
        target={"_blank"}
        rel="noreferrer"
        className={`${classes.buttonContainer} ${classes.whatsapp}`}
      >
        <img src={whatsapp} alt="ERR" />
      </a>
      <a
        href="mailto:hansanesia@yahoo.com"
        className={`${classes.buttonContainer} ${classes.email}`}
      >
        <img src={email} alt="ERR" />
      </a>
      <a
        href="tel:0816-1846-300"
        className={`${classes.buttonContainer} ${classes.phone}`}
      >
        <img src={phone} alt="ERR" />
      </a>
    </div>
  );
};
export default SideButton;
