import "./App.css";
import Header from "./components/Header";
import React from "react";
import { createBrowserHistory } from "history";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import {
  
  Switch,
  Route,
 
  HashRouter,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import Blogs from "./components/Blogs";
import Announcements from "./components/Announcements";
import Blog from "./components/Blog";
import Project from "./components/Project";
import Talks from "./components/Talks";
import Talk from "./components/Talk";
import FourZeroFour from "./components/FourZeroFour";

function App() {
  return (
    <HashRouter basename="/" history={createBrowserHistory()}>
      <div className="App">
        <Header />
        <div class="empty"></div>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/blog" component={Blogs} />
          <Route exact path="/blog/:id" component={Blog} />
          <Route exact path="/projects" component={Projects}></Route>
          <Route path="/projects/:id" component={Project}></Route>
          <Route exact path="/talks" component={Talks} />
          <Route path="/talks/:id" component={Talk}></Route>
          <Route exact path="/contact">
            <ContactUs />
          </Route>

          <Route exact path="/announcements">
            <Announcements />
          </Route>

          <Route path="*">
            <FourZeroFour />
          </Route>
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
