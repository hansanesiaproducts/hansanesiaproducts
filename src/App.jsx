import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import classes from "./App.module.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import MainPage from "./Pages/MainPage/MainPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path={"/about"}>
          <AboutPage />
        </Route>
        <Route path={"/contact"}>
          <ContactPage />
        </Route>
        <Route path={"/"}>
          <MainPage />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
