import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  const screenSize = window.innerWidth;
  return (
    <>
      <section id="experience" className="mb-5">
        <Container>
          <Row>
            <Col size={12}>
              <h1
                className="text-center my-5"
                style={{ fontSize: "45px", fontWeight: "700" }}
              >
                Work Experience
              </h1>
              <VerticalTimeline>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    // background: "rgb(33, 150, 243)",
                    // background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 42%, rgba(0,212,255,1) 100%)",
                    // background: "rgb(0 35 63)",
                    background: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(33, 150, 243)",
                  }}
                  date="Decemeber 2023- January 2024"
                  iconStyle={{ background: "rgb(27 99 157)", color: "black" }}
                >
                  <div className="d-flex">
                    <h3
                      className="vertical-timeline-element-title"
                      style={{
                        color: "#d1a114",
                        fontWeight: "900",
                        fontSize: "30px",
                      }}
                    >
                      React Native Intern
                    </h3>
                    {screenSize > 578 ? (
                      <span
                        style={{
                          color: "#555555",
                          fontWeight: "400",
                          fontSize: "18px",
                          marginTop: "6px",
                        }}
                        className="ms-2"
                      >
                        (1 month)
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <h4
                    className="vertical-timeline-element-subtitle"
                    style={{
                      color: "#555555",
                      fontWeight: "400",
                    }}
                  >
                    Cloudsmaya Services Private Limited
                  </h4>
                  {screenSize < 578 ? (
                    <span
                      style={{
                        color: "#555555",
                        fontWeight: "400",
                        fontSize: "18px",
                      }}
                      className=""
                    >
                      (1 month)
                    </span>
                  ) : (
                    ""
                  )}
                  <p style={{ fontSize: "15px", color: "#212529" }}>
                    During my one-month internship at Cloudsmaya Services
                    Private Limited as a React Native intern, I gained hands-on
                    experience with Expo and React Native, utilizing JavaScript
                    extensively. I actively contributed to the development of
                    mobile applications, where I learned to create dynamic user
                    interfaces and implement cross-platform
                    functionality.Working with Expo allowed me to streamline the
                    development process, enabling quick iteration and deployment
                    of mobile applications.
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    // background: "rgb(33, 150, 243)",
                    background: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(33, 150, 243)",
                  }}
                  date="January 2024 - Present"
                  iconStyle={{ background: "rgb(27 99 157)", color: "#fff" }}
                >
                  <div className="d-flex">
                    <h3
                      className="vertical-timeline-element-title"
                      style={{
                        color: "#d1a114",
                        fontWeight: "900",
                        fontSize: "30px",
                      }}
                    >
                      Junior Developer
                    </h3>
                    {screenSize > 578 ? (
                      <span
                        style={{
                          color: "#555555",
                          fontWeight: "400",
                          fontSize: "18px",
                          marginTop: "6px",
                        }}
                        className="ms-2"
                      >
                        (10 month+)
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <h4
                    className="vertical-timeline-element-subtitle"
                    style={{
                      color: "#555555",
                      fontWeight: "400",
                    }}
                  >
                    Cloudsmaya Services Private Limited
                  </h4>
                  {screenSize < 578 ? (
                    <span
                      style={{
                        color: "#555555",
                        fontWeight: "400",
                        fontSize: "18px",
                      }}
                      className=""
                    >
                      (10 month+)
                    </span>
                  ) : (
                    ""
                  )}
                  <p style={{ fontSize: "15px", color: "#212529" }}>
                    In my role as a Junior Developer, I utilized ReactJS with
                    hooks and Axios to build dynamic user interfaces, ensuring
                    responsive design with CSS and Bootstrap for an optimal user
                    experience. I developed backend systems using Spring Boot,
                    creating APIs, controllers, services, and managing database
                    operations with MySQL for efficient data handling.
                    Additionally, I contributed to the development and
                    maintenance of the Mufama app for iOS and Android using Expo
                    Native, integrating Firebase for backend services, including
                    push notifications.
                  </p>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Experience;
