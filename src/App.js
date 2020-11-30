import "./App.css";
import Header from "./components/Header";
import React from "react";
import { createBrowserHistory } from "history";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter,
} from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Blogs from "./components/Blogs";
import Announcements from "./components/Announcements";
import Blog from "./components/Blog";

function App() {
  return (
    <HashRouter basename="/" history={createBrowserHistory()}>
      <div className="App">
        <Header />
        <div class="empty"></div>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/blog" component={Blogs} />

          <Route exact path="/blog/:id" component={Blog} />

          <Route path="/contact">
            <AboutUs />
          </Route>

          <Route path="/announcements">
            <Announcements />
          </Route>

          <Route path="/projects">.</Route>
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
