import React from "react";
import project from "../content/projects.json";
import ProjectsCards from "./ProjectsCard";
import { Container, Row, Col } from "react-bootstrap";
import "./projects.css";
function Projects() {
  localStorage.setItem("reload", "Reload");
  return (
    <div>
      <div className="background-image-projects">
        <h1>Projects</h1>
      </div>
      <Container>
        <Row className="justify-content-xs-center justify-content-md-center my-3">
          <Col
            md={12}
            xs={12}
            className="justify-content-xs-center justify-content-md-center"
          >
            {project.projects.map((project) => {
              return (
                <ProjectsCards
                  mentor={project.mentor}
                  desc={project.desc}
                  start={project.start}
                  title={project.title}
                  id={project.id}
                  end={project.end}
                  image={project.image}
                />
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Projects;
