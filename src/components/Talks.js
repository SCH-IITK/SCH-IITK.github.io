import React from "react";
import "./talks.css";
import { Container, Row, Col } from "react-bootstrap";
import TalksCard from "./TalksCard";
import talks from "../content/talks.json";

function Talks() {
  localStorage.setItem("reload", "Reload");
  return (
    <div>
      <div className="background-image-talks">
        <h1>Coming Soon ..</h1>
      </div>
      <Container>
        <Row className="justify-content-xs-center justify-content-md-center my-3">
          <Col
            md={12}
            xs={12}
            className="justify-content-xs-center justify-content-md-center"
          >
            {talks.talks.map((talk) => {
              return (
                <TalksCard
                  name={talk.Name}
                  desc={talk.Desciption}
                  date={talk.date}
                  header={talk.Header}
                  imgUrl={talk.image}
                  id={talk.id}
                  tags={talk.tags}
                />
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Talks;
