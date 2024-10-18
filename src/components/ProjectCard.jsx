import React from "react";
import { Card, Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <>
      {/* <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx">
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Col> */}
      <a href={link} target="_blank" style={{ textDecoration: "none" }}>
        <Card style={{ padding: "0" }} className="card-main">
          <Card.Img
            variant="top"
            src={imgUrl}
            style={{ width: "100%", height: "240px" }}
          />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            {/* <Card.Text>{description}</Card.Text> */}
            <h6>{description}</h6>
          </Card.Body>
        </Card>
      </a>
    </>
  );
};

export default ProjectCard;
