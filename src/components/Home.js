import React from "react";
import intro from "../SCH_professional_iitk.jpg";
import { Row, Col, Container, Alert, Card } from "react-bootstrap";
import "./home.css";
function Home() {
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
            <h1>Welcome to SCH</h1>
            <p>More text here that can be added, adjusted etc.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel sodales dolor. Etiam finibus euismod massa nec facilisis. Aliquam ac tincidunt lorem. Ut et lectus et ante cursus commodo. Vivamus varius orci non egestas convallis. Duis sit amet rutrum libero. Praesent tempor, sem in venenatis mollis, massa nisl aliquet sem, sit amet finibus justo quam sed orci. Curabitur ut vehicula magna. Nulla in sapien dignissim, iaculis massa nec, finibus nibh. Nunc vitae placerat ante, eget imperdiet eros.</p>  
          </Col>
          <Col xs={12} md={4}>
            <Card bg='white'>
              <Card.Body>
                <Card.Title>About Us</Card.Title>
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
