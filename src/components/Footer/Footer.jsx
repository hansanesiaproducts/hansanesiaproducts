import { Link } from "react-router-dom";
import classes from "./Footer.module.css";

import facebookIcon from "../../assets/icons/facebook.png";
import instagramIcon from "../../assets/icons/instagram.png";
import whatsappIcon from "../../assets/icons/whatsapp.png";
const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <h3>Quick Links</h3>
          <div>
            <div>
              <Link to={""}>Home</Link>
              <Link to={"/about"}>About</Link>
              <Link to={""}>Product</Link>
              <Link to={"/contact"}>Contact</Link>
            </div>
            <div>
              <p>Hansanesia Products</p>
            </div>
          </div>
        </div>
        <div>
          <h3>Collections</h3>
          <div>
            <Link to={""}>Smith Collection</Link>
          </div>
        </div>
        {/* <div></div> */}
      </div>
      <div>
        <div>
          <h3>
            Copyright &copy; 2022 HANSANESIA PRODUCTS, All rights Reserved.
          </h3>
        </div>
        <div>
          <a href="">
            <img src={facebookIcon} alt="ERR" />
          </a>
          <a href="">
            <img src={instagramIcon} alt="ERR" />
          </a>
          <a href="">
            <img src={whatsappIcon} alt="ERR" />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
