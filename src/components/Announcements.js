import React from "react";
import Markdown from "./Markdown";
import { Row, Col } from "react-bootstrap";
import blog from "../content/sample.md";
function Announcements() {
  const source = "# hello ";
  return (
    <div>
      <Row className="justify-content-center">
        <Col className="justify-content-center" md={6}>
          <Markdown>{blog}</Markdown>
        </Col>
      </Row>
    </div>
  );
}

export default Announcements;
