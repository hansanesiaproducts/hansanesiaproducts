import { Link } from "react-router-dom";
import classes from "./Footer.module.css";

const Footer = (props) => {
  // Splide JS
  const { totalVisitor } = props;

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
                <a href="mailto:hansanesia@yahoo.com">hansanesia@yahoo.com</a>{" "}
                <br />
                Phone: <a href="tel:0816-1846-300">+(62) 816-1846-300</a>
              </address>
            </div>
          </div>
        </div>
        <div className={classes.collectionFooterContainer}>
          <h3>Collections</h3>
          <div className={classes.collectionLinkContainer}>
            <Link to={"/collection/rattan_synthetic"}>
              Rattan Synthetic Outdoor Furniture
            </Link>
            <Link to={"/collection/handicraft"}>Handicraft</Link>
            <Link to={"/collection/teak_garden"}>Teak Garden Furniture</Link>
          </div>
        </div>
        <div className={classes.counterFooterContainer}>
          <div className={classes.counterFooterInnerContainer}>
            <p>Counter: </p>
            <p> {totalVisitor}</p>
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
        </div>
      </div>
    </footer>
  );
};
export default Footer;
