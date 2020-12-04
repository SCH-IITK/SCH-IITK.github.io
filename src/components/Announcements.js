import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Col, Row, Container } from "react-bootstrap";
import announcements from "../content/announcements.json";
import AnnouncementsCard from "./AnnouncementsCard";

function Announcements() {
  return (
    <Container>
      {announcements.announcements.map((announcement) => {
        return (
          <AnnouncementsCard
            title={announcement.title}
            date={announcement.date}
            content={announcement.content}
          />
        );
      })}
    </Container>
  );
}

export default Announcements;
