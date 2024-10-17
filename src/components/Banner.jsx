import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { Typewriter } from "react-simple-typewriter";
import TrackVisibility from "react-on-screen";
import portfolio from "../assets/img/portfolio2.jpg";

const Banner = () => {
  const [text, setText] = useState("");
  const screenSize = window.innerWidth;

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/TariqueAnsariResume.pdf";
    link.download = "Tarique_Ansari_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
                    <h1
                      style={
                        screenSize < 574
                          ? { height: "100%", fontSize: "40px" }
                          : { height: "100%" }
                      }
                    >
                      {`Hi! I'm Tarique Ansari`}{" "}
                      <div className="typewriter-wrapper">
                        <Typewriter
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
                        />
                        <span className="wrap">{text}</span>
                      </div>
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
                    <button onClick={handleDownloadResume} className="mb-2">
                      Download Resume <ArrowRightCircle size={25} />
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
