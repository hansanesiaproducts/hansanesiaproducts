import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import companyLogo from "../../assets/company/companyLogo.png";
import companyLogo2 from "../../assets/company/companyLogo2.png";
import classes from "./Header.module.css";
import hamburger from "../../assets/icons/hamburger_icon.png";

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handlePageScroll);
  }, []);
  const handlePageScroll = () => {
    if (window.scrollY === 0) {
      document.getElementsByTagName("header")[0].style.boxShadow = "none";
    } else {
      document.getElementsByTagName("header")[0].style.boxShadow =
        "0px 1px 7px 1px #626262";
    }
  };
  const handleChangeHeader = () => {
    setHeaderActive((prevState) => !prevState);
  };
  const handleCloseHeader = () => {
    setHeaderActive(false);
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
          <img
            src={hamburger}
            alt="ERR"
            className={classes.hamburger}
            onClick={handleChangeHeader}
          />
          <ul className={headerActive ? classes.active : ""}>
            <li>
              <NavLink
                exact
                to={"/"}
                activeClassName={classes.active}
                onClick={handleCloseHeader}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                activeClassName={classes.active}
                onClick={handleCloseHeader}
              >
                About
              </NavLink>
            </li>
            <li>
              <Link to={"/#collections"} onClick={handleCloseHeader}>
                Collections
              </Link>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                activeClassName={classes.active}
                onClick={handleCloseHeader}
              >
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
