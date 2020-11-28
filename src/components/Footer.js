import React from "react";
import "./footer.css";
import { FaFacebook, FaFacebookMessenger, FaDiscord } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { withTheme } from "@material-ui/core";
function Footer() {
  return (
    <div className="footer">
      <Container fluid="md">
      <Row className="p-3">
        <Col md={6} xs={6}>
          <h5 text="text-uppercase">Adress</h5>
          <p>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
          </p>
        </Col>
        <Col md={6} xs={6}>
          <h5 text="text-uppercase">Contact us</h5>
          <p>
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchange
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center justify-content-md-center p-2">
        <Col md={1} xs={1}>
          <a href="https://www.facebook.com/SCHIITK" target="_blank">
            <FaFacebook color="white" />
          </a>
        </Col>

        <Col md={1} xs={1}>
          <a href="m.me/SCHIITK" target="_blank">
            <FaFacebookMessenger color="white" />
          </a>
        </Col>
        <Col md={1} xs={1}>
          <a href="https://discord.gg/zMPnVQAk" target="_blank">
            <FaDiscord color="white" />
          </a>
        </Col>
      </Row>
      </Container>
    </div>
  );
}

export default Footer;
