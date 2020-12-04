import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Container, Row } from "react-bootstrap";
import blogs from "../content/blogs.json";
import BlogCard from "./BlogCard";
const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: "140px !important ",
  },
});

function Blogs() {
  const classes = useStyles();
  localStorage.setItem("reload", "Reload");

  return (
    <Container>
      <Row className="justify-content-xs-center justify-content-md-center my-3">
        {blogs.blogs.map((blog) => {
          return (
            <BlogCard
              name={blog.Name}
              desc={blog.Desciption}
              date={blog.date}
              header={blog.Header}
              tags={blog.tags}
              imgUrl={blog.image}
              id={blog.id}
            />
          );
        })}
      </Row>
    </Container>
  );
}

export default Blogs;
