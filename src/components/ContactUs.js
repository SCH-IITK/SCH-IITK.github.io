import React from "react";
import "./contactUs.css";
import "bootstrap/dist/css/bootstrap.min.css";
import contacts from "../content/contactUs/contactUs.json";
import { Row, Col, Card, Container } from "react-bootstrap";

function ContactUs() {
  return (
    <div>
      <div className="background-image-contact">
        <h1>Meet The Team </h1>
      </div>
      <Container fluid className="people">
        <div className="people">
          <Row className=" p-3 justify-content-center">
            <h1>The Team</h1>
          </Row>
          <Container>
            <Row className="justify-content-md-center  justify-content-xs-center p-1 my-3">
              {contacts.leaders.map((person) => {
                return (
                  <Col md={6}>
                    <Card
                      style={{ width: "18rem" }}
                      text="black"
                      className="card my-2"
                    >
                      <Card.Img
                        variant="top"
                        src="https://github.com/SCH-IITK/SCH-IITK.github.io/blob/web-dev/src/content/contactUs.png?raw=true"
                      />
                      <Card.Body>
                        <Card.Title>
                          <center>Leader</center>
                        </Card.Title>
                        <Card.Text>
                          <center>{person.name}</center>
                          <hr></hr>
                          <h5>Interests:</h5>
                          {person.interests}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
            <Row className="justify-content-md-center  justify-content-xs-center p-1 my-3">
              {contacts.secys.map((person) => {
                return (
                  <Col md={3}>
                    <Card
                      style={{ width: "17rem" }}
                      text="black"
                      className="card my-2"
                    >
                      <Card.Img
                        variant="top"
                        src="https://static.wixstatic.com/media/00dcd9d1bed24e07b074ced045369915.jpg/v1/fill/w_425,h_400,fp_0.47_0.36,q_80,usm_0.66_1.00_0.01/00dcd9d1bed24e07b074ced045369915.webp"
                      />
                      <Card.Body>
                        <Card.Title>
                          <center>Secretary</center>
                        </Card.Title>
                        <Card.Text>
                          <center>{person.name}</center>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
            <Row className="justify-content-md-center  justify-content-xs-center p-1 my-3">
              {contacts.webdev.map((person) => {
                return (
                  <Col md={6}>
                    <Card
                      style={{ width: "18rem" }}
                      text="black"
                      className="card my-2"
                    >
                      <Card.Img
                        variant="top"
                        src="https://static.wixstatic.com/media/00dcd9d1bed24e07b074ced045369915.jpg/v1/fill/w_425,h_400,fp_0.47_0.36,q_80,usm_0.66_1.00_0.01/00dcd9d1bed24e07b074ced045369915.webp"
                      />
                      <Card.Body>
                        <Card.Title>
                          <center>Web Development Team</center>
                        </Card.Title>
                        <Card.Text>
                          <center>{person.name}</center>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      </Container>
    </div>
  );
}

export default ContactUs;
