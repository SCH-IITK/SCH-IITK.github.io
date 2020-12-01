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
  var content = blogs.blogs.map((blog) => {
    return `<Row
    md={12}
    className="p-5 justify-content-xs-center  justify-content-md-center "
  >
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.sciencenews.org/wp-content/uploads/2020/06/060320_dr_dragon-lizard_feat-800x450.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           ${blog.Name}
          </Typography>x
          <Typography variant="body2" color="textSecondary" component="p">
           ${blog.Desciption}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  </Row>`;
  });
  content = content.join();

  return (
    <Container>
      <Row className="justify-content-xs-center justify-content-md-center">
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
    </Container>
  );
}

export default Blogs;
