import { Link } from "react-router-dom";
import classes from "./Footer.module.css";

import facebookIcon from "../../assets/icons/facebook.png";
import instagramIcon from "../../assets/icons/instagram.png";
import whatsappIcon from "../../assets/icons/whatsapp.png";
const Footer = () => {
  // Splide JS
  return (
    <footer className={classes.footerContainer}>
      <div className={classes.topFooterContainer}>
        <div className={classes.leftFooterContainer}>
          <h3>Quick Links</h3>
          <div>
            <div className={classes.quickLinkContainer}>
              <Link to={""}>Home</Link>
              <Link to={"/about"}>About</Link>
              <Link to={""}>Product</Link>
              <Link to={"/contact"}>Contact</Link>
            </div>
            <div className={classes.addressContainer}>
              <h5>Hansanesia Products</h5>
              <address>
                Email:{" "}
                <a href="mailto:hansanesia@gmail.com">hansanesia@gmail.com</a>{" "}
                <br />
                Phone: <a href="tel:0812-3451-2411">+(62) 812-3451-2411</a>
              </address>
            </div>
          </div>
        </div>
        <div>
          <h3>Collections</h3>
          <div>
            <Link to={""}>Smith Collection</Link>
          </div>
        </div>
      </div>
      <div className={classes.bottomFooterContainer}>
        <div className={classes.bottomInsideFooterContainer}>
          <div className={classes.copyrightContainer}>
            <h5>
              Copyright &copy; 2022 HANSANESIA PRODUCTS, All rights Reserved.
            </h5>
          </div>
          <div className={classes.socialsContainer}>
            <a href="dw">
              <img src={instagramIcon} alt="ERR" />
            </a>
            <a href="dw">
              <img src={whatsappIcon} alt="ERR" />
            </a>
            <a href="dw">
              <img src={facebookIcon} alt="ERR" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
