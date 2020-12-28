import Markdown from "./Markdown";
import React, { useState, useEffect } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import { useParams } from "react-router";
import projects from "../content/projects.json";
import "./blog.css";

function Blog(props) {
  if (localStorage.getItem("reload") == "Reload") {
    localStorage.setItem("reload", "NotReload");
    window.location.reload();
  }
  const [project, setProject] = useState("");
  const [address, setAddress] = useState("");
  const [blogMeta, setMeta] = useState({});

  let { id } = useParams();

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    setMeta(projects.projects.find((project) => project.id == id));
    const readmePath = require(`../content/projects/${id}.md`);
    setAddress("https://sch-iitk.github.io/#/projects/" + id);
    fetch(readmePath.default)
      .then((response) => response.text())
      .then((text) => {
        setProject(text);
        // var metaData = text.match(/'([^']+)'/)[1];
        // setMeta(JSON.parse(metaData));
      });
  });
  // var metaData = blog.match(/'([^']+)'/)[1];
  // setMeta(JSON.parse(metaData));
  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center ">
        <Col xs={12} md={8}>
          <h1 style={{ fontSize: "5vh" }}>{blogMeta.title}</h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center pb-2">
        <Col xs={10} md={8}>
          <div style={({ fontWeight: "bold" }, { fontSize: "2vh" })}>
            <p style={{ float: "left" }}>Mentor: {blogMeta.mentor}</p>{" "}
            <p style={{ float: "right" }}>
              {blogMeta.start} - {blogMeta.end}
            </p>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-md-center ">
        <Col xs={12} md={8}>
          <Image src={blogMeta.image} rounded width={"100%"} height="auto" />
        </Col>
      </Row>
      <Row className="justify-content-md-center pt-1 pb-1">
        <Col md={8} className="justify-content-center">
          <Markdown className="blog">{project}</Markdown>
        </Col>
      </Row>

      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={8}>
          <div
            class="fb-like"
            data-href={address}
            layout="button_count"
            data-action="like"
            data-size="small"
            data-share="true"
          ></div>
        </Col>
      </Row>
      <Row className="justify-content-md-center  ">
        <Col xs={12} md={8}>
          <div
            class="fb-comments"
            data-href={address}
            data-numposts="5"
            data-width="100%"
          ></div>
        </Col>
      </Row>
    </Container>
  );
}

export default Blog;
