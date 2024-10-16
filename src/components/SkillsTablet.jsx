import React from "react";
import { Card } from "react-bootstrap";

const SkillsTablet = ({ logos }) => {
  const size = 180; // Set card size
  const gap = 20;

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", // Adjust items per row
        gap: `${gap}px`,
        margin: "0 auto",
      }}
    >
      {logos.map((logo) => (
        <Card
          key={logo.id} // Ensure each card has a unique key
          style={{
            height: "100%",
            background: "white",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Card.Body>
            <img
              src={logo.src}
              style={{
                width: "80px",
                height: "80px",
                objectFit: "contain",
              }}
              alt={logo.name}
            />
            <h5 className="mt-3">{logo.name}</h5>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default SkillsTablet;
