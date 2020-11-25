import "./App.css";
import Header from "./components/Header";
import React from "react";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
            <div className="blank"></div>
            <Footer />
          </Route>

          <Route path="/blog">
            <Header />
            <Footer />
          </Route>

          <Route path="/contact">
            <Header />
            <AboutUs />
            <Footer />
          </Route>

          <Route path="/announcements">
            <Header />
            <Footer />
          </Route>

          <Route path="/projects">
            <Header />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
