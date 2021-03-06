import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import {  Row } from "react-bootstrap";
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
function ProjectsCard(props) {
  const classes = useStyles();
  return (
    <Row className="pt-2 pb-2">
      <Link href={"#/projects/" + props.id} style={{ textDecoration: "none" }}>
        <Card className={classes.root} href={"#/projects/" + props.id}>
          <CardActionArea className={classes.main}>
            <CardMedia className={classes.media} image={props.image} />
            <CardContent href={"#/projects/" + props.id}>
              <Typography gutterBottom variant="h5" component="h2">
                {props.title}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                {props.mentor}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                {props.start} - {props.end}
              </Typography>
              <br/>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.desc.substring(0, 400) + "..."}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Row>
  );
}

export default ProjectsCard;
