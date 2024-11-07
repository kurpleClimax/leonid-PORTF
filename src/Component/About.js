import React from "react";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import "./CSS/About.css";
import Fade from "react-reveal/Fade";
// import Reveal from "react-reveal/Reveal";
import me from "../image/me.jpg";
import Slide from 'react-reveal/Slide';


const About = () => {
  return (
    <div className="about" id="about">
      <Container>
        <Row>
          <Col xs sm={12} lg md={7}>
            <div className="about-header">
              <Fade bottom>
                <h2 className="t-color">About Me</h2>
              </Fade>
              <Fade bottom>
                <h6 className="text-job">Front-end Developer</h6>
              </Fade>
            </div>
            <div className="about-text">
              <Tabs
                defaultActiveKey="about"
                id="uncontrolled-tab-example"
                className="mb-3 about-tab"
              >
                <Tab eventKey="about" title="About" className="about-link">
                <Slide bottom>
                  <p className="mt-10">
                    I am Md.Al-amin Sahed. I am a front-end web developer. I
                    love to develop frontend using React.js. I also like to work
                    with REST APIs and learn new technologies.
                    <br />
                    <br />
                    I completed my graduation in Computer Science and
                    Engineering from Southeast University. I successfully passed
                    in 65+ courses including data structure, algorithm, advance
                    algorithm and many more.
                    <br /> <br />I am also interested in writing blogs,
                    marketing, and human phycology.
                  </p>
                  </Slide>
                </Tab>
                <Tab
                  eventKey="education"
                  title="Education"
                  className="about-link"
                >
                <Slide bottom>
                  <div>
                    <h2>B.Sc. in Computer Science and Engineering.</h2>
                    <h4>Southeast University, Bangladesh</h4>
                    <p>CGPA: 3.64</p>
                    <small>Passing Year: 2021</small>
                  </div>
                  </Slide>
                </Tab>
                <Tab
                  eventKey="certification"
                  title="Certification"
                  className="about-link"
                >
                <Slide bottom>
                  <div>
                    <a href="https://www.sololearn.com/certificates/course/en/18915388/1024/landscape/png">
                      <h4>Javascript</h4>
                    </a>
                    <small>SoloLearn</small>
                  </div>
                  <br />
                  <div>
                    <a href="https://www.sololearn.com/Certificate/1060-18915388/jpg/">
                      <h4>SQL Fundamentals course</h4>
                    </a>
                    <small>SoloLearn</small>
                  </div>
                  </Slide>
                </Tab>
              </Tabs>
            </div>
            <div className="hire-cv-button">
            <Fade left>
              <button className="theme-fill-btn">Hire Me</button>

              <a href="https://drive.google.com/file/d/1KxGDHZ802k48IswG6SxuZQUILLN_Qoun/view?usp=sharing">
                <button className="theme-fill-btn"> Download CV </button>
              </a>
              </Fade>
            </div>
          </Col>
          <Col xs sm={12} lg md={5} className="my-photo">
          <Fade right>
          <img src={me} alt="my" />
          </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
