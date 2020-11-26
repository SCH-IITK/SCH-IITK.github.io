import Markdown from "./Markdown";
import termsFrPath from "../content/sample.md";

import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
function Blog() {
  const [term, setTerm] = useState("");

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    fetch(termsFrPath)
      .then((response) => response.text())
      .then((text) => {
        setTerm(text);
      });
  });
  return (
    <Row className="justify-content-center p-2">
      <Col md={6} className="justify-content-center">
        <Markdown className="blog">{term}</Markdown>
      </Col>
    </Row>
  );
}

export default Blog;
