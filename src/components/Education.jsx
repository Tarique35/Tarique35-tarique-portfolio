import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  const screenSize = window.innerWidth;

  return (
    <>
      <section id="education" className="mb-5">
        <Container>
          <Row>
            <Col size={12}>
              <h1
                className="text-center my-5"
                style={{ fontSize: "45px", fontWeight: "700" }}
              >
                Education
              </h1>
              <VerticalTimeline>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(33, 150, 243)",
                  }}
                  date="2019 - 2023"
                  iconStyle={{ background: "rgb(27 99 157)", color: "black" }}
                >
                  <div className="d-flex">
                    <div>
                      <h3
                        className="vertical-timeline-element-title"
                        style={{
                          color: "black",
                          fontWeight: "400",
                          fontSize: "30px",
                        }}
                      >
                        B.E Computer Engineering (8.93 CGPA)
                      </h3>
                    </div>
                  </div>
                  <h4
                    className="vertical-timeline-element-subtitle"
                    style={{
                      color: "#555555",
                      fontWeight: "400",
                    }}
                  >
                    SKN Sinhgad Institute of Techonology
                  </h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(33, 150, 243)",
                  }}
                  date="2018 - 2019"
                  iconStyle={{ background: "rgb(27 99 157)", color: "black" }}
                >
                  <div className="d-flex">
                    <div>
                      <h3
                        className="vertical-timeline-element-title"
                        style={{
                          color: "black",
                          fontWeight: "400",
                          fontSize: "30px",
                        }}
                      >
                        Higher Secondary Certificate (65.85%)
                      </h3>
                    </div>
                  </div>
                  <h4
                    className="vertical-timeline-element-subtitle"
                    style={{
                      color: "#555555",
                      fontWeight: "400",
                    }}
                  >
                    Bhiwandi
                  </h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(33, 150, 243)",
                  }}
                  date="2017 - 2018"
                  iconStyle={{ background: "rgb(27 99 157)", color: "black" }}
                >
                  <div className="d-flex">
                    <div>
                      <h3
                        className="vertical-timeline-element-title"
                        style={{
                          color: "black",
                          fontWeight: "400",
                          fontSize: "30px",
                        }}
                      >
                        Secondary School Certificate (85.40%)
                      </h3>
                    </div>
                  </div>
                  <h4
                    className="vertical-timeline-element-subtitle"
                    style={{
                      color: "#555555",
                      fontWeight: "400",
                    }}
                  >
                    Bhiwandi
                  </h4>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Education;
