import React from "react";
import "./footer.css";
import { FaFacebook, FaFacebookMessenger, FaDiscord } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function Footer() {
  return (
    <div className="footer">
      <Container fluid="md">
        <Row className="justify-content-center justify-content-md-center p-2">
          <Col md={1} xs={1}>
            <a href="https://www.facebook.com/SCHIITK" target="_blank">
              <FaFacebook color="white" />
            </a>
          </Col>
          <Col md={1} xs={1}>
            <a href="https://www.m.me/SCHIITK" target="_blank">
              <FaFacebookMessenger color="white" />
            </a>
          </Col>
          <Col md={1} xs={1}>
            <a href="https://discord.gg/Xb8dsD3VUA" target="_blank">
              <FaDiscord color="white" />
            </a>
          </Col>
        </Row>
        <div className="credits">
          <Row className="justify-content-center justify-content-md-center pb-2">
            <Col>
              Hand crafted at IITK by Abhinav Tiwari and Debaditya Bhattacharya.
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
