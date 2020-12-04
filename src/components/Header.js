import React from "react";
import {
  Navbar,
  Nav,
  Button,
  Form,
  FormControl,
  Image,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import logo from "./SCH_professional_logo.jpg";
import { createBrowserHistory } from "history";

import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter,
} from "react-router-dom";

function Header() {
  //   var navbarCSS = document.getElementById("#header");
  //   window.onscroll = function() {
  //     if (window.screenTop > 0) {
  //         alert("Working");
  //         navbarCSS.style.boxShadow = "0px 1px 10px #999";
  //         // navbarCSS.classList.addClass("navbarFloat");
  //     } else {
  //         // document.getElementsByClassName("header");
  //         navbarCSS.style.boxShadow = "0px 0px 0px #999";
  //         // navbarCSS.removeClass("navbarFloat");
  //     }
  // };

  return (
    <HashRouter
      basename={process.env.PUBLIC_URL}
      history={createBrowserHistory()}
    >
      <Row>
        <Col sm={12}>
          <div className="header" id="header">
            <Navbar variant="dark" expand="lg" collapseOnSelect fixed="top">
              <Container fluid="md">
                <Navbar.Brand href="/">SCH</Navbar.Brand>
                {/* <Navbar.Brand href="/">
                  <img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                  />
                </Navbar.Brand> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="/#/">Home</Nav.Link>
                    <Nav.Link href="/#/blog">Blogs</Nav.Link>
                    <Nav.Link href="/#/projects">Projects</Nav.Link>
                    <Nav.Link href="/#/announcements">Announcements</Nav.Link>
                    <Nav.Link href="/#/contact">Contact Us</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </Col>
      </Row>
    </HashRouter>
  );
}

export default Header;
