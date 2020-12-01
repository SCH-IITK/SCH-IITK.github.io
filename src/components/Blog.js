import Markdown from "./Markdown";

import React, { useState, useEffect } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import { useParams } from "react-router";
import blogs from "../content/blogs.json";
import Typography from "@material-ui/core/Typography";

function Blog(props) {
  if (localStorage.getItem("reload") == "Reload") {
    localStorage.setItem("reload", "NotReload");
    window.location.reload();
  }
  const [blog, setBlog] = useState("");
  const [address, setAddress] = useState("");
  const [blogMeta, setMeta] = useState({});

  let { id } = useParams();

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    setMeta(blogs.blogs[id - 1]);
    const readmePath = require(`../content/${id}.md`);
    setAddress("https://sch-iitk.github.io/#/blog/" + id);
    fetch(readmePath.default)
      .then((response) => response.text())
      .then((text) => {
        setBlog(text);
      });
  });

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center ">
        <Col xs={12} md={8}>
          <h1>{blogMeta.Header}</h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center ">
        <Col xs={10} md={8}>
          <Typography variant="button" display="block" gutterBottom>
            {blogMeta.Name}
          </Typography>

          <Typography variant="button"> {" " + blogMeta.time}</Typography>
        </Col>
      </Row>
      <Row className="justify-content-md-center ">
        <Col xs={12} md={8}>
          <Image src={blogMeta.image} rounded width={"100%"} height="auto" />
        </Col>
      </Row>
      <Row className="justify-content-md-center p-2">
        <Col md={8} className="justify-content-center">
          <Markdown className="blog">{blog}</Markdown>
        </Col>
      </Row>
      <Row className="justify-content-md-center   mt-5">
        <Col xs={10} md={8}>
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
        <Col xs={10} md={8}>
          <div
            class="fb-comments"
            data-href={address}
            data-numposts="5"
            data-width=""
          ></div>
        </Col>
      </Row>
    </Container>
  );
}

export default Blog;
