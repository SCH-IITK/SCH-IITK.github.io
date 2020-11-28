import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Row } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    height: "430px",
  },
  media: {
    height: "140px !important ",
  },
});
function BlogCard(props) {
  const classes = useStyles();
  return (
    <div>
      <Row
        md={12}
        className="p-5 justify-content-xs-center  justify-content-md-center "
      >
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media} image={props.imgUrl} />
            <CardContent>
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
                {props.desc}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button href={"/blog/" + props.id} size="small" color="primary">
              Read full article
            </Button>
          </CardActions>
        </Card>
      </Row>
    </div>
  );
}

export default BlogCard;
