import "./App.css";
import Header from "./components/Header";
import React from "react";
import { createBrowserHistory } from "history";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter,
} from "react-router-dom";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import Blogs from "./components/Blogs";
import Announcements from "./components/Announcements";
import Blog from "./components/Blog";
import Project from "./components/Project";
import Talks from "./components/Talks";
import Talk from "./components/Talk";

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
          <Route exact path="/projects" component={Projects}></Route>
          <Route path="/projects/:id" component={Project}></Route>
          <Route exact path="/talks" component={Talks} />
          <Route path="/talks/:id" component={Talk}></Route>
          <Route path="/contact">
            <ContactUs />
          </Route>

          <Route path="/announcements">
            <Announcements />
          </Route>
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
