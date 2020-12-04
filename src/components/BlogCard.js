import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Col, Row } from "react-bootstrap";
import { Link } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    maxWidth: "100%",
    flexDirection: "column",
  },
  main: {
    display: "flex",
    flexDirection: "row-reverse",
  },
  media: {
    height: "200px !important",
    width: "100%",
    maxWidth: "250px",
    flex: "1 0 150px",
  },
});
function BlogCard(props) {
  const classes = useStyles();
  return (
    <Col md={12} xs={12} className="pt-2 pb-2  ">
      <Link href={"#/blog/" + props.id} style={{ textDecoration: "none" }}>
        <Card className={classes.root} href={"#/blog/" + props.id}>
          <CardActionArea className={classes.main}>
            <CardMedia className={classes.media} image={props.imgUrl} />
            <CardContent href={"#/blog/" + props.id}>
              <Typography variant="subtitle2" color="textSecondary">
                {props.name}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                {props.date}
              </Typography>
              <br />

              <Typography gutterBottom variant="h5" component="h2">
                {props.header}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.desc.substring(0, 200) + "....."}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                Tags - {props.tags}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Col>
  );
}

export default BlogCard;