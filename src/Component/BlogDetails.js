import React from "react";
import { Card, Col, Row, Container, Button } from "react-bootstrap";
import "./CSS/BlogDetails.css";

const BlogDetails = ({ info }) => {
  const { name, des, img, link } = info;

  console.log(info);
  return (
    <div className="blog-section">
      <Card bg="dark" className="blog-card">
        <Card.Img variant="top" src={info.img} className="blog-img" />
        <Card.Body>
          <Card.Title className="card-title">{name}</Card.Title>
          <Card.Text>{des}</Card.Text>
        </Card.Body>
        <Card.Footer className="blog-footer">
          <a href={link} target="blank"><Button className="blog-button">Details</Button></a>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default BlogDetails;
