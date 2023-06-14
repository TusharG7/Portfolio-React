import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import proshop from "../../Assets/Projects/proshop.png";
import wordle from "../../Assets/Projects/wordle.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={proshop}
              isBlog={false}
              title="PROSHOP"
              description="A full featured E-commerce store. Used MongoDB | Express JS | React JS | Node JS (MERN Stack) for the 
              development of the system."
              ghLink="https://github.com/TusharG7/Ecomm-MERN"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={wordle}
              isBlog={false}
              title="Wordle-Clone"
              description="React based web application, a game to guess a word, player gets 6 chances to 
              guess a word, also get hints each time a guess submitted."
              ghLink="https://github.com/TusharG7/Wordle-Clone"
              demoLink="https://amazing-gecko-6a71da.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
