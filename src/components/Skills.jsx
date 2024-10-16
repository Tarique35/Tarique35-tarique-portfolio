import React, { useState } from "react";
import java from "../assets/Skills img/java.png";
import cpp from "../assets/Skills img/c-logo (1).png";
import springboot from "../assets/Skills img/spring-boot.png";
import react from "../assets/Skills img/react.png";
import bootstrap from "../assets/Skills img/bootstrap5.png";
import native from "../assets/Skills img/native.png";
import expo from "../assets/Skills img/expo2.png";
import javascript from "../assets/Skills img/javascript (1).png";
import css from "../assets/Skills img/css-logo (1).png";
import html from "../assets/Skills img/html.png";
import mysql from "../assets/Skills img/mysql (1).png";
import { Card } from "react-bootstrap";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { distance } from "@popmotion/popcorn";
import SkillsTablet from "./SkillsTablet";

const logos = [
  { id: 1, src: java, name: "Java" },
  { id: 2, src: cpp, name: "C++" },
  { id: 3, src: springboot, name: "Spring Boot" },
  { id: 4, src: react, name: "React" },
  { id: 5, src: expo, name: "Expo" },
  { id: 6, src: react, name: "React Native" },
  { id: 7, src: html, name: "HTML" },
  { id: 8, src: css, name: "CSS" },
  { id: 9, src: javascript, name: "JavaScript" },
  { id: 10, src: bootstrap, name: "Bootstrap" },
  { id: 11, src: mysql, name: "MySQL" },
];

const Skills = () => {
  const screenSize = window.innerWidth;
  const size = 180; // Set card size
  const gap = 20;
  const [active, setActive] = useState({ row: 0, col: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const Square = ({ active, setActive, colIndex, rowIndex, x, y, logo }) => {
    const isDragging = colIndex === active.col && rowIndex === active.row;
    const d = distance(
      { x: active.col, y: active.row },
      { x: colIndex, y: rowIndex }
    );
    const springConfig = {
      stiffness: Math.max(700 - d * 120, 0),
      damping: 20 + d * 5,
    };
    const dx = useSpring(x, springConfig);
    const dy = useSpring(y, springConfig);

    return (
      <motion.div
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={1}
        onDragStart={() => setActive({ row: rowIndex, col: colIndex })}
        style={{
          width: size,
          height: size,
          top: rowIndex * (size + gap),
          left: colIndex * (size + gap),
          position: "absolute",
          borderRadius: "10px",
          x: isDragging ? x : dx,
          y: isDragging ? y : dy,
          zIndex: isDragging ? 1 : 0,
        }}
      >
        <Card style={{ height: "100%", background: "white", padding: "10px" }}>
          <Card.Body className="d-flex flex-column align-items-center">
            <img
              src={logo.src}
              style={{
                width: "80px",
                height: "80px",
                objectFit: "contain",
                // borderRadius: "50%",
              }}
              alt={logo.name}
            />
            <h5 className="mt-3">{logo.name}</h5>
          </Card.Body>
        </Card>
      </motion.div>
    );
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                I build dynamic web and mobile applications using Java, Spring
                Boot, JavaScript, React, HTML, CSS, and MySQL, with a focus on
                creating responsive designs and efficient back-end systems. I'm
                passionate about learning new technologies to enhance my skills.
              </p>
              {screenSize > 1100 ? (
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "600px",
                  }}
                >
                  <div
                    className=""
                    style={{
                      position: "relative",
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fill, minmax(250px, 1fr))", // Set to this items per row
                      gap: "16px",
                      width: (size + gap) * 4, // Adjust width for items
                      height: (size + gap) * 3, // Adjust height based on number of rows
                      margin: "0 auto",
                    }}
                  >
                    {logos.map((logo, index) => (
                      <Square
                        key={logo.id}
                        x={x}
                        y={y}
                        active={active}
                        setActive={setActive}
                        rowIndex={Math.floor(index / 4)} // Adjust row index calculation for the items per row
                        colIndex={index % 4} // Adjust column index calculation for the items per row
                        logo={logo}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <SkillsTablet logos={logos} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
