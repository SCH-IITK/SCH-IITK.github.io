import Markdown from "./Markdown";

import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router";

function Blog() {
  const [blog, setBlog] = useState("");
  const [address, setAddress] = useState("");
  let { id } = useParams();

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    const readmePath = require(`../content/${id}.md`);
    setAddress("http://localhost:3000/#/blog/" + id);
    fetch(readmePath.default)
      .then((response) => response.text())
      .then((text) => {
        setBlog(text);
      });
  });

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center p-2">
        <Col md={6} className="justify-content-center">
          <Markdown className="blog">{blog}</Markdown>
        </Col>
      </Row>
      <Row className="justify-content-md-center  justify-content-xs-center mt-5">
        <div
          class="fb-like"
          data-href={address}
          data-width=""
          data-layout="standard"
          data-action="like"
          data-size="small"
          data-share="true"
        ></div>
      </Row>
      <Row className="justify-content-md-center  justify-content-xs-center">
        <div
          class="fb-comments"
          data-href={address}
          data-numposts="5"
          data-width=""
        ></div>
      </Row>
    </Container>
  );
}

export default Blog;
