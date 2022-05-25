import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import companyLogo from "../../assets/company/companyLogo.png";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.headerContainer}>
        <div className={classes.logoContainer}>
          <Link to={"/"}>
            <img src={companyLogo} alt="ERR" />
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
              <NavLink to={"about"} activeClassName={classes.active}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to={"product"} activeClassName={classes.active}>
                Product
              </NavLink>
            </li>
            <li>
              <NavLink to={"contact"} activeClassName={classes.active}>
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
