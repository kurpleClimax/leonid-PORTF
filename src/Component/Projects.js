import React from "react";
import "./CSS/Projects.css";
import { Container, Row, Col, Tabs, Tab, Card } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import data from "../Data/projectData";
import ProjectDetails from "./PojectDetails";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas);

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <Container>
        <div className="skill-title">
          <Fade top>
            <h2 className="t-color">My Portfolio</h2>
            <p className="skill-text">Working on a Project is a great fun</p>
          </Fade>
          <Fade left>
            <span className="bottom-line"></span>
          </Fade>
        </div>
        <div className="project-body">
          <div className="project-tab ">
            <Tabs
              defaultActiveKey="all"
              variant="pills"
              className="justify-content-center"
            >
              <Tab eventKey="all" title="All">
              <Fade left>
                <Row>
                  {data.map((info) => (
                    <Col xs sm={12} md={4} key={info.id}>
                      <ProjectDetails info={info} />
                    </Col>
                  ))}
                </Row>
                </Fade>
              </Tab>
              <Tab eventKey="frontend" title="Front-end">
              <Fade bottom>
                <Row>
             
                  {data
                    .filter((info) => info.topic === "frontend")
                    .map((project) => (
                      <Col xs sm={12} md={4} key={project.id}>
                        <ProjectDetails key={project.id} info={project} />
                      </Col>
                    ))}
                  
                  <Col md={4}>
                    <div className="more-card">
                      <Card className="card-area">
                        <Card.Body className="more-body">
                          <Card.Title>More</Card.Title>
                          <Card.Text>
                            <a
                              href="https://github.com/alaminsahed"
                              alt="github"
                            >
                              <FontAwesomeIcon
                                icon={["fab", "github"]}
                                size="5x"
                              />
                            </a>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </Col>
                </Row>
                </Fade>
              </Tab>
              <Tab eventKey="fullstack" title="Full-Stack">
              <Fade right>
                <Row>
                  {data
                    .filter((info) => info.topic === "fullstack")
                    .map((project) => (
                      <Col xs sm={12} md={4} key={project.id}>
                        <ProjectDetails key={project.id} info={project} />
                      </Col>
                    ))}
                 <Col  md={4}>
                    <div className="more-card">
                      <Card className="card-area">
                        <Card.Body className="more-body">
                          <Card.Title>More</Card.Title>
                          <Card.Text>
                            <a
                              href="https://github.com/alaminsahed"
                              alt="github"
                            >
                              <FontAwesomeIcon
                                icon={["fab", "github"]}
                                size="5x"
                              />
                            </a>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </Col>
                </Row>
                </Fade>
              </Tab>
            </Tabs>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
