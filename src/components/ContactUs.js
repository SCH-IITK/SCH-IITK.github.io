import React from "react";
import "./contactUs.css";
import "bootstrap/dist/css/bootstrap.min.css";
import contacts from "../content/contactus.json"
import { Row, Col, Card, Container } from "react-bootstrap";

function ContactUs() {
  return (
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
                  <Card style={{ width: "18rem" }} text="black" className="card my-2">
                    <Card.Img
                      variant="top"
                      src="https://static.wixstatic.com/media/00dcd9d1bed24e07b074ced045369915.jpg/v1/fill/w_425,h_400,fp_0.47_0.36,q_80,usm_0.66_1.00_0.01/00dcd9d1bed24e07b074ced045369915.webp"
                    />
                    <Card.Body>
                      <Card.Title><center>Leader</center></Card.Title>
                      <Card.Text>
                        <center>{person.name}</center>
                      <hr></hr>
                        <h5>Interests:</h5>{person.interests}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              )

            })}
          </Row>
          <Row className="justify-content-md-center  justify-content-xs-center p-1 my-3">
            {contacts.secys.map((person) => {

              return (
                <Col md={3}>
                  <Card style={{ width: "17rem" }} text="black" className="card my-2">
                    <Card.Img
                      variant="top"
                      src="https://static.wixstatic.com/media/00dcd9d1bed24e07b074ced045369915.jpg/v1/fill/w_425,h_400,fp_0.47_0.36,q_80,usm_0.66_1.00_0.01/00dcd9d1bed24e07b074ced045369915.webp"
                    />
                    <Card.Body>
                      <Card.Title><center>Secretary</center></Card.Title>
                      <Card.Text>
                        <center>{person.name}</center>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              )

            })}
          </Row>
          <Row className="justify-content-md-center  justify-content-xs-center p-1 my-3">
            {contacts.webdev.map((person) => {

              return (
                <Col md={6}>
                  <Card style={{ width: "18rem" }} text="black" className="card my-2">
                    <Card.Img
                      variant="top"
                      src="https://static.wixstatic.com/media/00dcd9d1bed24e07b074ced045369915.jpg/v1/fill/w_425,h_400,fp_0.47_0.36,q_80,usm_0.66_1.00_0.01/00dcd9d1bed24e07b074ced045369915.webp"
                    />
                    <Card.Body>
                      <Card.Title><center>Web Development Team</center></Card.Title>
                      <Card.Text>
                        <center>{person.name}</center>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              )

            })}
          </Row>
        </Container>
      </div>

      <Container fluid className="people">
        <div className="people">
          <Row className=" p-3 justify-content-center">
            <h3>LEADERS</h3>
          </Row>
          <Row className="justify-content-md-center  justify-content-xs-center p-2  ">
            <Col md={4} className="my-4">
              <Card style={{ width: "18rem" }} text="black" className="card">
                <Card.Img
                  variant="top"
                  src="https://static.wixstatic.com/media/00dcd9d1bed24e07b074ced045369915.jpg/v1/fill/w_425,h_400,fp_0.47_0.36,q_80,usm_0.66_1.00_0.01/00dcd9d1bed24e07b074ced045369915.webp"
                />
                <Card.Body>
                  <Card.Title>Aayush Parmar</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="my-4">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://static.wixstatic.com/media/245c33c1d1294a78a84cbe2084bbef58.jpg/v1/fill/w_425,h_400,fp_0.50_0.38,q_80,usm_0.66_1.00_0.01/245c33c1d1294a78a84cbe2084bbef58.webp"
                />
                <Card.Body>
                  <Card.Title>Gurmeet Singh</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className=" p-3 justify-content-center ">
            <h3>SECRETARIES</h3>
          </Row>
          <Row className="justify-content-md-center p-2 ">
            <Col md={4} className="my-4">
              <Card style={{ width: "18rem" }} text="black" className="card">
                <Card.Img
                  variant="top"
                  src="https://static.wixstatic.com/media/00dcd9d1bed24e07b074ced045369915.jpg/v1/fill/w_425,h_400,fp_0.47_0.36,q_80,usm_0.66_1.00_0.01/00dcd9d1bed24e07b074ced045369915.webp"
                />
                <Card.Body>
                  <Card.Title>Debaditya Bhattacharya</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="my-4">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://static.wixstatic.com/media/245c33c1d1294a78a84cbe2084bbef58.jpg/v1/fill/w_425,h_400,fp_0.50_0.38,q_80,usm_0.66_1.00_0.01/245c33c1d1294a78a84cbe2084bbef58.webp"
                />
                <Card.Body>
                  <Card.Title>Mohammad Saad</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="justify-content-md-center p-2 ">
            <Col md={4} className="my-4">
              <Card style={{ width: "18rem" }} text="black" className="card">
                <Card.Img
                  variant="top"
                  src="https://static.wixstatic.com/media/00dcd9d1bed24e07b074ced045369915.jpg/v1/fill/w_425,h_400,fp_0.47_0.36,q_80,usm_0.66_1.00_0.01/00dcd9d1bed24e07b074ced045369915.webp"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="my-4">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://static.wixstatic.com/media/245c33c1d1294a78a84cbe2084bbef58.jpg/v1/fill/w_425,h_400,fp_0.50_0.38,q_80,usm_0.66_1.00_0.01/245c33c1d1294a78a84cbe2084bbef58.webp"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className=" p-3 justify-content-center">
            <h3>WEB DEVELOPMENT</h3>
          </Row>
          <Row className="justify-content-md-center p-2 ">
            <Col md={4} className="my-4">
              <Card style={{ width: "18rem" }} text="black" className="card">
                <Card.Img
                  variant="top"
                  src="https://static.wixstatic.com/media/00dcd9d1bed24e07b074ced045369915.jpg/v1/fill/w_425,h_400,fp_0.47_0.36,q_80,usm_0.66_1.00_0.01/00dcd9d1bed24e07b074ced045369915.webp"
                />
                <Card.Body>
                  <Card.Title>Abhinav Tiwari</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="my-4">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://static.wixstatic.com/media/245c33c1d1294a78a84cbe2084bbef58.jpg/v1/fill/w_425,h_400,fp_0.50_0.38,q_80,usm_0.66_1.00_0.01/245c33c1d1294a78a84cbe2084bbef58.webp"
                />
                <Card.Body>
                  <Card.Title>Debaditya Bhattacharya</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default ContactUs;
