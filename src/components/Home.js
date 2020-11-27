import React from "react";
import intro from "../SCH_professional_iitk.jpg";
import { Container, Row, Col } from "react-bootstrap";
import "./home.css";
function Home() {
  return (
    <div>
      <Row className="intro">
        <Col md={6} sm={6} xs={12} className="intro-image">
          <img src={intro} className="intro-image" />
        </Col>
      </Row>
      <div class="container-sm">
        <Row className="justify-content-md-center">
          <Col sm={8}>
          <h1 class="display-1">Welcome to SCH!</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor id aliquet lectus proin. Hendrerit gravida rutrum quisque non tellus. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Ut placerat orci nulla pellentesque dignissim. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat. Quam vulputate dignissim suspendisse in est. In vitae turpis massa sed. Ut venenatis tellus in metus vulputate eu. Eu turpis egestas pretium aenean. Ac felis donec et odio pellentesque diam volutpat commodo. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Augue interdum velit euismod in pellentesque massa placerat duis. Euismod in pellentesque massa placerat duis ultricies lacus sed. Ultrices dui sapien eget mi proin. Augue ut lectus arcu bibendum.
          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor id aliquet lectus proin. Hendrerit gravida rutrum quisque non tellus. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Ut placerat orci nulla pellentesque dignissim. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat. Quam vulputate dignissim suspendisse in est. In vitae turpis massa sed. Ut venenatis tellus in metus vulputate eu. Eu turpis egestas pretium aenean. Ac felis donec et odio pellentesque diam volutpat commodo. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Augue interdum velit euismod in pellentesque massa placerat duis. Euismod in pellentesque massa placerat duis ultricies lacus sed. Ultrices dui sapien eget mi proin. Augue ut lectus arcu bibendum.
          </p>
          </Col>
          <Col sm={4}>
            <iframe src="https://discord.com/widget?id=740597274807238697&theme=light" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
