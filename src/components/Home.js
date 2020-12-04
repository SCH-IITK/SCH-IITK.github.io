import React, { useState, useEffect } from "react";
import Markdown from "./Markdown";
import intro from "../SCH_professional_iitk.jpg";
import { Row, Col, Container, Alert, Card } from "react-bootstrap";
import "./home.css";
function Home() {

  const [body, setBody] = useState("");

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    const readmePath = require(`../content/home.md`);
    fetch(readmePath.default)
      .then((response) => response.text())
      .then((text) => {
        setBody(text);
      });
  });


  return (
    <div>
      <Row className="intro">
        <Col md={4} sm={6} xs={12}>
          <img src={intro} className="intro-image"/>
        </Col>
      </Row>
      <Container className="p-2">
        <Alert variant='danger'>
          Website is under construction!
        </Alert>
        <Row>
          <Col xs={12} md={8} Style="font-family: 'Nerko One';">
            <Markdown>{body}</Markdown>
          </Col>
          <Col xs={12} md={4}>
            <Card bg='white'>
              <Card.Body>
                <Card.Title><h5>About Us</h5></Card.Title>
                <Card.Text>
                  About us contentgoes here
                </Card.Text>
                <Card.Link href="#">Meet the team</Card.Link>
                <Card.Link href="#">Contact us</Card.Link>
              </Card.Body>
            </Card>
            <Container className="p-0 pt-2">
              <iframe src="https://discord.com/widget?id=740597274807238697&theme=light" width="100%" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
