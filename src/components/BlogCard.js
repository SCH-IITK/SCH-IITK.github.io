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
    maxWidth: 800,
    flexDirection: "column",
  },
  main: {
    display: "flex",
    flexDirection: "row-reverse",
  },
  media: {
    height: "200px !important ",
    width: "800px",
    maxWidth: "250px",
  },
});
function BlogCard(props) {
  const classes = useStyles();
  return (
    <div>
      <Col className="pt-2 pb-2 justify-content-xs-center md={10}  justify-content-md-center ">
        <Link href={"#/blog/" + props.id}>
          <Card className={classes.root} href={"#/blog/" + props.id}>
            <CardActionArea className={classes.main}>
              <CardMedia className={classes.media} image={props.imgUrl} />
              <CardContent href={"#/blog/" + props.id}>
                <Typography variant="subtitle2" color="textSecondary">
                  {props.name}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  {props.read}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  {props.header}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {props.desc.substring(0, 200) + "....."}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </Col>
    </div>
  );
}

export default BlogCard;
