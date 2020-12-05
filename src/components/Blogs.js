import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import blogs from "../content/blogs.json";
import BlogCard from "./BlogCard";
import Markdown from "./Markdown";

function Blogs() {
  localStorage.setItem("reload", "Reload");

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
    <div >
      <Container>
        <Row className="pt-2 justify-content-xs-center justify-content-md-center">
          <Col md={8} xs={12} className="justify-content-xs-center justify-content-md-center">
            <div >
              <Markdown>{body}</Markdown>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-xs-center justify-content-md-center my-3">
          <Col md={12} xs={12} className="justify-content-xs-center justify-content-md-center">
            {blogs.blogs.map((blog) => {
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
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Blogs;
