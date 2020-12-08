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

      <div className="people">
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
                    <Card.Img variant="top" src={person.imgurl} />
                    <Card.Body>
                      <Card.Title>
                        <center style={{ fontSize: "0.8em" }}>Leader</center>
                      </Card.Title>
                      <Card.Text>
                        <center style={{ fontSize: "1.2em" }}>
                          {person.name}
                        </center>
                        <hr />
                        <h1 style={{ fontSize: "1em" }}>Interests:</h1>
                        <span style={{ fontSize: "0.9em" }}>
                          {person.interests}
                        </span>
                        <hr />
                        <div>
                          {/* Put the git-hub / facebook / linked-in / messenger links here*/}
                        </div>
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
                    <Card.Img variant="top" src={person.imgurl} />
                    <Card.Body>
                      <Card.Title>
                        <center style={{ fontSize: "0.8em" }}>Secretary</center>
                      </Card.Title>
                      <Card.Text>
                        <center style={{ fontSize: "1.2em" }}>
                          {person.name}
                        </center>
                        <hr></hr>
                        <h1 style={{ fontSize: "1em" }}>Interests:</h1>
                        <span style={{ fontSize: "0.9em" }}>
                          {person.interests}
                        </span>
                        <hr />
                        <div>
                          {/* Put the git-hub / facebook / linked-in / messenger links here*/}
                        </div>
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
                    <Card.Img variant="top" src={person.imgurl} />
                    <Card.Body>
                      <Card.Title>
                        <center style={{ fontSize: "0.8em" }}>
                          Web Development Team
                        </center>
                      </Card.Title>
                      <Card.Text>
                        <center style={{ fontSize: "1.2em" }}>
                          {person.name}
                        </center>
                        <hr></hr>
                        <h1 style={{ fontSize: "1em" }}>Interests:</h1>
                        <span style={{ fontSize: "0.9em" }}>
                          {person.interests}
                        </span>
                        <hr />
                        <div>
                          {/* Put the git-hub / facebook / linked-in / messenger links here*/}
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default ContactUs;
