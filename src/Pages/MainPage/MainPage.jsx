import classes from "./MainPage.module.css";
import companyLogo from "../../assets/company/companyLogo.png";
import HeroCarousel from "./components/HeroCarousel/HeroCarousel";
import KnowMore from "./components/KnowMore/KnowMore";
import Collections from "./components/Collections/Collections";
import SendEmail from "./components/SendEmail/SendEmail";
const MainPage = () => {
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
