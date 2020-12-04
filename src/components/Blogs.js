import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import blogs from "../content/blogs.json";
import BlogCard from "./BlogCard";
import Markdown from "./Markdown";

function Blogs() {

  const [body, setBody] = useState("");

  useEffect(() => {
    const readmePathBody = require(`../content/blogs.md`);
    fetch(readmePathBody.default)
      .then((response) => response.text())
      .then((text) => {
        setBody(text);
      });
    });
  return (
    <Container>
      <Col md={12} xs={12} >
        <Row className="pt-2">
          <div>
          <Markdown>{body}</Markdown>
          </div>
          
        </Row>
        <Row  className="justify-content-xs-center justify-content-md-center my-3">
          {blogs.blogs.map((blog) => {
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
      </Col>
    </Container>
  );
}

export default Blogs;
