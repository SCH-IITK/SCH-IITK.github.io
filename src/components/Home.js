import React, { useState, useEffect } from "react";
import Markdown from "./Markdown";
import intro from "../SCH_professional_iitk.jpg";
import { Row, Col, Container, Alert, Card } from "react-bootstrap";
import "./home.css";
import blogs from "../content/blogs.json";
import BlogCard from "./BlogCard";
import project from "../content/projects.json";
import ProjectsCards from "./ProjectsCard";

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
      <div className="background-image-home">.</div>
      <Container className="pb-2 pt-2">
        {/* <Alert variant="danger">Website is under construction!</Alert> */}
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
                        date={blog.date}
                        header={blog.Header}
                        imgUrl={blog.image}
                        id={blog.id}
                        tags={blog.tags}
                      />
                    );
                  })}
                </Row>
              </Container>
            </div>
            <div>
              <hr></hr>
              <h2>Featured Projects</h2>
              <Container>
                <Row className="justify-content-xs-center justify-content-md-center my-3">
                  {project.feat.map((project) => {
                    return (
                      <ProjectsCards
                        mentor={project.mentor}
                        desc={project.desc}
                        start={project.start}
                        title={project.title}
                        id={project.id}
                        end={project.end}
                        image={project.image}
                      />
                    );
                  })}
                </Row>
              </Container>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <Card bg="white" className="mt-2 sidebar">
              <Card.Body>
                <Card.Title>
                  <h5>Enagage with us</h5>
                </Card.Title>
                <Card.Text>
                  If you would like to engage with us, please follow us on <a href="https://www.facebook.com/SCHIITK/">Facebook</a> and join our <a href="https://discord.gg/XyUuAh6PGZ">Discord server</a> for the latest updates. We also have a messanger group, and if you would like to be added please DM the page.
                </Card.Text>
                <Card.Text>
                  If you would like to contribute please drop a message to any
                  one of the secretaries or the leaders and we will get back to
                  you ASAP. We would love to read and share your articles,
                  videos and would love to help you host your talk!
                </Card.Text>
              </Card.Body>
            </Card>
            <Card bg="white" className="mt-2 sidebar">
              <Card.Body>
                <Card.Title>
                  <h5>News</h5>
                </Card.Title>
                <Card.Text>
                  <Markdown>{news}</Markdown>
                </Card.Text>
              </Card.Body>
            </Card>

            <Container className="p-0 pt-2">
              <iframe
                src="https://discord.com/widget?id=740597274807238697&theme=light"
                width="100%"
                height="500"
                allowtransparency="true"
                frameborder="0"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              ></iframe>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
