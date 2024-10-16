import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import contactImg from "../assets/img/contact-img.svg";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [buttonText, setButtonText] = useState("Send");

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.user_name.trim()) {
      formErrors.user_name = "Name is required!";
    }
    if (!formData.user_email.trim()) {
      formErrors.user_email = "Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      formErrors.user_email = "Email address is invalid";
    }
    if (!formData.message.trim()) {
      formErrors.message = "Message is required!";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setButtonText("Sending...");
      emailjs
        .sendForm("service_jss7fyf", "template_61flv6s", form.current, {
          publicKey: "DRM3-ZDqKgmTM_TrP",
        })
        .then(
          () => {
            setButtonText("Send");
            console.log("SUCCESS!");
          },
          (error) => {
            setButtonText("Send");
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <>
      <section className="contact" id="connect">
        <Container>
          <Row className="align-items-center">
            <Col size={12} md={6}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <img
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                    src={contactImg}
                    alt="Contact Us"
                  />
                )}
              </TrackVisibility>
            </Col>
            <Col size={12} md={6}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <h2>Get In Touch</h2>

                    <form ref={form} onSubmit={sendEmail}>
                      <div style={{ display: "flex", justifyContent: "" }}>
                        <label style={{ marginRight: "30%" }}>Name</label>
                        {errors.user_name && (
                          <span className="error">{errors.user_name}</span>
                        )}
                      </div>
                      <input
                        type="text"
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleChange}
                      />
                      <div style={{ display: "flex", justifyContent: "" }}>
                        <label style={{ marginRight: "30%" }}>Email</label>
                        {errors.user_email && (
                          <span className="error">{errors.user_email}</span>
                        )}
                      </div>
                      <input
                        type="email"
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleChange}
                      />
                      <label>Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                      />
                      {/* <input type="submit" value="Send" /> */}
                      <button type="submit">
                        <span>{buttonText}</span>
                      </button>
                    </form>
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

export default Contact;
