import React from "react";
import "./about-us.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Card, CardDeck } from "react-bootstrap";
function AboutUs() {
  return (
    <div className="people">
      <Row className=" p-3 justify-content-center">
        <h1>MEET THE TEAM</h1>
      </Row>
      <Row className=" p-3 justify-content-center">
        <h3>Leaders</h3>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={4}>
          <Card style={{ width: "18rem" }} text="white" className="card">
            <Card.Img
              variant="top"
              src="https://static.wixstatic.com/media/00dcd9d1bed24e07b074ced045369915.jpg/v1/fill/w_425,h_400,fp_0.47_0.36,q_80,usm_0.66_1.00_0.01/00dcd9d1bed24e07b074ced045369915.webp"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://static.wixstatic.com/media/245c33c1d1294a78a84cbe2084bbef58.jpg/v1/fill/w_425,h_400,fp_0.50_0.38,q_80,usm_0.66_1.00_0.01/245c33c1d1294a78a84cbe2084bbef58.webp"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className=" p-3 justify-content-center">
        <h3>Secretaries</h3>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={4}>
          <Card style={{ width: "18rem" }} text="white" className="card">
            <Card.Img
              variant="top"
              src="https://static.wixstatic.com/media/00dcd9d1bed24e07b074ced045369915.jpg/v1/fill/w_425,h_400,fp_0.47_0.36,q_80,usm_0.66_1.00_0.01/00dcd9d1bed24e07b074ced045369915.webp"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://static.wixstatic.com/media/245c33c1d1294a78a84cbe2084bbef58.jpg/v1/fill/w_425,h_400,fp_0.50_0.38,q_80,usm_0.66_1.00_0.01/245c33c1d1294a78a84cbe2084bbef58.webp"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={4}>
          <Card style={{ width: "18rem" }} text="white" className="card">
            <Card.Img
              variant="top"
              src="https://static.wixstatic.com/media/00dcd9d1bed24e07b074ced045369915.jpg/v1/fill/w_425,h_400,fp_0.47_0.36,q_80,usm_0.66_1.00_0.01/00dcd9d1bed24e07b074ced045369915.webp"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://static.wixstatic.com/media/245c33c1d1294a78a84cbe2084bbef58.jpg/v1/fill/w_425,h_400,fp_0.50_0.38,q_80,usm_0.66_1.00_0.01/245c33c1d1294a78a84cbe2084bbef58.webp"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default AboutUs;
