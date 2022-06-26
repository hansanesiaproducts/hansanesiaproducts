import classes from "./MainPage.module.css";
import companyLogo from "../../assets/company/companyLogo.png";
import HeroCarousel from "./components/HeroCarousel/HeroCarousel";
import KnowMore from "./components/KnowMore/KnowMore";
import Collections from "./components/Collections/Collections";
import SendEmail from "./components/SendEmail/SendEmail";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const MainPage = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        let y;
        if (window.screen.width <= 450) {
          y = elem.getBoundingClientRect().top + window.pageYOffset - 130;
        } else {
          y = elem.getBoundingClientRect().top + window.pageYOffset - 100;
        }

        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);
  return (
    <main>
      <HeroCarousel />
      <KnowMore />
      <Collections />
      <SendEmail />
    </main>
  );
};

export default MainPage;
