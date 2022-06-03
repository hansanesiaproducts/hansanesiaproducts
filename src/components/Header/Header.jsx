import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import companyLogo from "../../assets/company/companyLogo.png";
import companyLogo2 from "../../assets/company/companyLogo2.png";
import classes from "./Header.module.css";

const Header = () => {
  useEffect(() => {
    window.addEventListener("scroll", handlePageScroll);
  });
  const handlePageScroll = () => {
    if (window.scrollY === 0) {
      document.getElementsByTagName("header")[0].style.boxShadow = "none";
    } else {
      document.getElementsByTagName("header")[0].style.boxShadow =
        "0px 1px 7px 1px #626262";
    }
  };

  return (
    <header className={classes.header}>
      <div className={classes.headerContainer}>
        <div className={classes.logoContainer}>
          <Link to={"/"} className={classes.logoImageContainer}>
            <img src={companyLogo} alt="ERR" />
            <img src={companyLogo2} alt="ERR" />
          </Link>
        </div>
        <nav className={classes.linkContainer}>
          <ul>
            <li>
              <NavLink exact to={"/"} activeClassName={classes.active}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/about"} activeClassName={classes.active}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to={"/product"} activeClassName={classes.active}>
                Product
              </NavLink>
            </li>
            <li>
              <NavLink to={"/contact"} activeClassName={classes.active}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
