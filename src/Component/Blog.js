import React from "react";
import "./CSS/Blog.css";
import Fade from "react-reveal/Fade";
import { Container, Row, Col, Tabs, Tab, Card } from "react-bootstrap";
import Blogdata from "../Data/Blogdata/BlogData";
import BlogDetails from "./BlogDetails";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas);

const Blog = () => {
  return (
    <div className="blog" id="blog">
      <Container>
        <div className="skill-title">
          <Fade top>
            <h2 className="t-color">Blogs</h2>
            <p className="skill-text">Blog helps to clear a concept</p>
          </Fade>
          <Fade left>
            <span className="bottom-line"></span>
          </Fade>
        </div>
        <div className="blog-body">
          <Row>
            {Blogdata.map((info) => (
              <Col md={4} key={info.id}>
                <BlogDetails info={info} />
              </Col>
            ))}
            <Col md={4}>
              <div className="more-card">
                <Card bg="dark" className="card-area blog-area">
                  <Card.Body className="more-body">
                    <Card.Title>More</Card.Title>
                    <Card.Text>
                      <a href="https://github.com/alaminsahed" alt="github">
                        <FontAwesomeIcon icon={["fab", "medium"]} size="5x" className="medium-icon"/>
                      </a>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
