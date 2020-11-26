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
import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Header() {
  return (
    <Router>
      <Row>
        <Col sm={12}>
          <div className="header">
            <Navbar variant="dark" expand="sm" collapseOnSelect>
              <Container fluid="md">
                <Navbar.Brand href="/">SCH</Navbar.Brand>
                <Navbar.Brand href="/">
                  <img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                  />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="blog">Blog</Nav.Link>
                    <Nav.Link href="projects">Projects</Nav.Link>
                    <Nav.Link href="announcements">Announcements</Nav.Link>
                    <Nav.Link href="contact">Contact US</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </Col>
      </Row>
    </Router>
  );
}

export default Header;
