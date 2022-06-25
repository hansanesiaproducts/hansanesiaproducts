import classes from "./ContactMain.module.css";
import email from "../../../../assets/icons/email.png";
import phone from "../../../../assets/icons/phone.png";
import instagram from "../../../../assets/icons/instagram.png";
const ContactMain = () => {
  return (
    <section className={classes.contactUsSection}>
      <div className={classes.contactUsContainer}>
        <h1 className={classes.mainTitle}>Contact Us</h1>
        <div className={classes.contactUsInnerContainer}>
          <div className={classes.addressContainer}>
            <h2>Hansanesia Products </h2>
            <address>
              Jalan Raya Kebon Jeruk <br />
              Jakarta 11530
            </address>
          </div>
          <div className={classes.socialsContainer}>
            <ul>
              <li>
                <img src={email} alt="ERR" />
                <a href="mailto:hansanesia@yahoo.com">hansanesia@yahoo.com</a>
              </li>
              <li>
                <img src={instagram} alt="ERR" />
                <a href="https://instagram.com">@hansanesia</a>
              </li>
              <li>
                <img src={phone} alt="ERR" />
                <a href="tel:0816-1846-300">+(62) 816-1846-300</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactMain;
