import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import blogs from "../content/blogs.json";
import BlogCard from "./BlogCard";
import "./blogs.css";

function Blogs() {
  localStorage.setItem("reload", "Reload");
  return (

    <div>
      {/* Cover */}
      <div className="background-image-blog">
        <h1>Blogs</h1>
      </div>
      <Container>
        <Row className="justify-content-xs-center justify-content-md-center my-3">
          <Col
            md={12}
            xs={12}
            className="justify-content-xs-center justify-content-md-center"
          >
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
