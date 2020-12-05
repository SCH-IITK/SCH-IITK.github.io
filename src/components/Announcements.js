import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Col, Row, Container } from "react-bootstrap";
import announcements from "../content/announcements.json";
import AnnouncementsCard from "./AnnouncementsCard";

function Announcements() {
  return (
    <Container>
      <Row className="justify-content-xs-center justify-content-md-center my-3">
        <Col md={12} xs={12} className="justify-content-xs-center justify-content-md-center">
      {announcements.announcements.map((announcement) => {
        return (
          <AnnouncementsCard
            title={announcement.title}
            date={announcement.date}
            content={announcement.content}
          />
        );
      })}
      </Col>
      </Row>
    </Container>
  );
}

export default Announcements;
