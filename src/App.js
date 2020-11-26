import "./App.css";
import Header from "./components/Header";
import React from "react";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Blogs from "./components/Blogs";
import Announcements from "./components/Announcements";
import Blog from "./components/Blog";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
            <div className="blank"></div>
            <Footer />
          </Route>

          <Route path="/blog">
            <Blogs />
            <Footer />
          </Route>

          <Route path="/contact">
            <AboutUs />
            <Footer />
          </Route>

          <Route path="/announcements">
            <Announcements />
            <Blog />
            <Footer />
          </Route>

          <Route path="/projects">
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
