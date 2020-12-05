import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Col, Row, Container } from "react-bootstrap";
import announcements from "../content/announcements.json";
import "./announcements.css";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: "100%",
    backgroundColor: "#F8F9FA",
    boxShadow:
      "0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0) !important",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
function AnnouncementsCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Row className="justify-content-md-center my-4">
      <Col md={12} xs={12}>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {props.date}
            </Typography>
            <hr />
            <Typography variant="body2" component="p">
              {props.content}
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Col>
    </Row>
  );
}

export default AnnouncementsCard;
