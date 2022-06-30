import { useState } from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";
import classes from "./App.module.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SideButton from "./components/SideButton/SideButton";
import TrackVisitor from "./components/TrackVisitor/TrackVisitor";
import AboutPage from "./Pages/AboutPage/AboutPage";
import CollectionSetPage from "./Pages/CollectionSetPage/CollectionSetPage";
import CollectionsPage from "./Pages/CollectionsPage/CollectionsPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import MainPage from "./Pages/MainPage/MainPage";

function App() {
  const [totalVisitor, setTotalVisitor] = useState(0);
  return (
    <>
      <TrackVisitor setTotalVisitor={setTotalVisitor} />
      <SideButton />
      <div className="App">
        <Header />
        <div className={classes.headerMargin}></div>
        <Switch>
          <Route path={"/about"}>
            <AboutPage />
          </Route>
          <Route path={"/contact"}>
            <ContactPage />
          </Route>
          <Route path={"/collection/:name/:setName"}>
            <CollectionSetPage />
          </Route>
          <Route path={"/collection/:name"}>
            <CollectionsPage />
          </Route>

          <Route exact path={"/"}>
            <MainPage />
          </Route>
          <Route path={"*"}>
            <Redirect to="/" />
          </Route>
        </Switch>

        <Footer totalVisitor={totalVisitor} />
      </div>
    </>
  );
}

export default App;
