import React from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
import "./CSS/ProjectDetails.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas);

const PojectDetails = ({ info }) => {
  const { name, des, img, demo, git, stack } = info;

  return (
    <div className="card-info">
     
      <Card className="project-card">
        <Card.Img
          variant="top"
          src={img}
          style={{ height: "20em", overflow: "hidden" }}
        />
        <Card.Body>
        <Container>
          <Row>
            <Card.Title>
              <h4>{name}</h4>
            </Card.Title>
          </Row>
          <Row>
            <Card.Text>
              {des}
            </Card.Text>
          </Row>
          <Row className="tech-row">
            <Card.Text>
              Technology: {stack}
            </Card.Text>
          </Row>
          </Container>
        </Card.Body>
        <Card.Footer>
         <Row>
           <Col>
         <a href={git} alt="github">
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
          </Col>
          <Col>
          <a href={demo} alt="link"  className="project-icon">
            <FontAwesomeIcon
              icon={["fas", "external-link-alt"]}
             
            />
          </a>
          </Col>
         </Row>
        </Card.Footer>
      </Card>
     
    </div>
  );
};

export default PojectDetails;
