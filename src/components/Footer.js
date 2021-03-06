import React from "react";
import "./footer.css";
import {
  FaFacebook,
  FaFacebookMessenger,
  FaDiscord,
  FaCopyright,
} from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import Typography from "@material-ui/core/Typography";
import "bootstrap/dist/css/bootstrap.min.css";
function Footer() {
  return (
    <div className="footer">
      <div>
        <Container fluid="md" className="logo">
          <Row className="justify-content-center justify-content-md-center p-2">
            <Col md={1} xs={2} className="my-4">
              <a href="https://www.facebook.com/SCHIITK" target="_blank" rel="noreferrer" >
                <FaFacebook size={50} color="white" />
              </a>
            </Col>
            <Col md={1} xs={2} className="my-4">
              <a href="https://www.m.me/SCHIITK" target="_blank" rel="noreferrer" >
                <FaFacebookMessenger size={50} color="white" />
              </a>
            </Col>
            <Col md={1} xs={2} className="my-4">
              <a href="https://discord.gg/MM3JVe6WdW" target="_blank" rel="noreferrer" >
                <FaDiscord size={50} color="white" />
              </a>
            </Col>
          </Row>
          <Row className="justify-content-center justify-content-md-center pb-4">
            <Col>
              <FaCopyright color="white" size={15} className="copyright" />{" "}
              Science Coffee House , IIT Kanpur
            </Col>
          </Row>
          <div className="credits">
            <Row className="justify-content-center justify-content-md-center pb-2">
              <Col>
                <Typography variant="outline" gutterBottom>
                  Handcrafted at IITK by <strong>Abhinav Tiwari </strong>and
                  <strong> Debaditya Bhattacharya</strong>
                </Typography>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
