import React, { useState, useEffect } from "react";
import Markdown from "./Markdown";
import intro from "../SCH_professional_iitk.jpg";
import { Row, Col, Container, Alert, Card } from "react-bootstrap";
import "./home.css";
import blogs from "../content/blogs.json";
import BlogCard from "./BlogCard";
function Home() {

  const [body, setBody] = useState("");
  const [news, setNews] = useState("");

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    const readmePathBody = require(`../content/home.md`);
    fetch(readmePathBody.default)
      .then((response) => response.text())
      .then((text) => {
        setBody(text);
      });
    const readmePathNews = require(`../content/news.md`);
    fetch(readmePathNews.default)
      .then((response) => response.text())
      .then((text) => {
        setNews(text);
      });
  });


  return (
    <div>
      <Row className="intro">
        <Col md={4} sm={6} xs={12}>
          <img src={intro} className="intro-image" />
        </Col>
      </Row>
      <Container className="pb-2 pt-2">
        <Alert variant='danger'>
          Website is under construction!
        </Alert>
        <Row>
          <Col xs={12} md={8}>
            <Markdown>{body}</Markdown>
            <div>
              <hr></hr>
              <h2>Featured Articles</h2>
              <Container>
                <Row className="justify-content-xs-center justify-content-md-center my-3">
                  {blogs.feat.map((blog) => {
                    return (
                      <BlogCard
                        name={blog.Name}
                        desc={blog.Desciption}
                        read={blog.time}
                        header={blog.Header}
                        imgUrl={blog.image}
                        id={blog.id}
                      />
                    );
                  })}
                </Row>
              </Container>
              <hr></hr>
              <h2>Featured Talks</h2>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <Card bg='white' className="mt-2 sidebar">
              <Card.Body>
                <Card.Title><h5>About Us</h5></Card.Title>
                <Card.Text>
                  About us contentgoes here
                </Card.Text>
                <Card.Link href="#">Contact us</Card.Link>
              </Card.Body>
            </Card>
            <Card bg='white' className="mt-2 sidebar">
              <Card.Body>
                <Card.Title><h5>News</h5></Card.Title>
                <Card.Text>
                  <Markdown>{news}</Markdown>
                </Card.Text>
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
