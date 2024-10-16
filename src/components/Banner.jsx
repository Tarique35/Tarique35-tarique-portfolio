import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import { Typewriter } from "react-simple-typewriter";
import TrackVisibility from "react-on-screen";
import portfolio from "../assets/img/portfolio2.jpg";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 300);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;
  const screenSize = window.innerWidth;
  return (
    <>
      <section className="banner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {(
                  { isVisible } // isVisible and <TrackVisibility> belongs to react-on-screen library
                ) => (
                  //These will be used to check that element is in the viewport or not
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    } // these classnames are belongs to animate.css which is installed using npm install animate.css
                  >
                    <span className="tagline">Welcome to my Portfolio</span>
                    {/* <h1>
                      {`Hi! I'm Judy`}{" "}
                      <span
                        className="txt-rotate"
                        dataPeriod="1000"
                        data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                      >
                        <span className="wrap">{text}</span>
                      </span>
                    </h1> */}
                    <h1
                      style={
                        screenSize < 574
                          ? { height: "100%", fontSize: "40px" }
                          : { height: "100%" }
                      }
                    >
                      {`Hi! I'm Tarique Ansari`}{" "}
                      <span>
                        Full Stack Developer
                        {/* <Typewriter
                          words={[
                            "Full Stack Developer",
                            "Mobile App Developer",
                            // "UI/UX Designer",
                          ]}
                          loop={0} // Set to 0 for infinite loop
                          cursor
                          cursorStyle=""
                          typeSpeed={170}
                          deleteSpeed={150}
                          delaySpeed={10}
                        /> */}
                        <span className="wrap">{text}</span>
                      </span>
                    </h1>
                    <p>
                      Junior Developer with over 10 months of experience in full
                      stack and mobile app development. Skilled in ReactJS,
                      Spring Boot, and Bootstrap. Experienced in building
                      responsive web designs and cross-platform mobile apps with
                      React Native and Expo. Proficient in Firebase integration,
                      MySQL database management, and programming languages
                      including Java, C++, and JavaScript. Strong collaborative
                      skills and a track record of delivering high-quality
                      software solutions.
                    </p>
                    <button
                      onClick={() => console.log("connect")}
                      className="mb-2"
                    >
                      Let’s Connect <ArrowRightCircle size={25} />
                    </button>
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                  >
                    <img
                      src={portfolio}
                      alt="Header Img"
                      style={{ width: "100%" }}
                    />
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Banner;
