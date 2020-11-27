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
        <div class="empty"></div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/blog">
            <Blogs />
          </Route>

          <Route path="/contact">
            <AboutUs />
          </Route>

          <Route path="/announcements">
            <Announcements />
            <Blog />
          </Route>

          <Route path="/projects">
          </Route>
        </Switch>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
