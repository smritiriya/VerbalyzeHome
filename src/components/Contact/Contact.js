import "./Contact.css";
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Contact = () => {
  const [value, setValue] = useState("");
  const [isMobileView, setIsMobileView] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [designation, setDesignation] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    // Add your form submission logic here

    const data = {
      firstName,
      lastName,
      email,
      phone,
      company,
      designation
    };

    axios
      .post("https://formspree.io/f/xleyrpvy", data)
      .then((response) => {
        console.log("Form submission successful");
      })
      .catch((error) => {
        console.error("Form submission error:", error);
      });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 800); // Adjust the breakpoint according to your needs
    };

    handleResize(); // Initial check on component mount

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="contact-container container"
      style={{ display: isMobileView ? "block" : "flex", padding: "20px" }}
      data-aos="zoom-in-right"
      data-aos-duration="1500"
      id="demo"
    >
      {!isMobileView && (
        <div style={{ width: "50%" }}>
          <img
            src="call-center.gif"
            alt="contact us"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      )}
      <div style={{ width: isMobileView ? "100%" : "50%" }}>
        <div className="contact-heading">Get Demo and Early Access!</div>
        {isMobileView && (
          <div style={{ width: "100%" }}>
            <img
              src="call-center.gif"
              alt="contact us"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        )}
        <div className="contact-form">
          <div
            className="contact-name"
            style={{ display: "flex", padding: "10px" }}
          >
            <TextField
              required
              label="First Name"
              sx={{ width: "48%",marginRight:"10px",marginLeft:"7px"}}
              className="contact-first-name"
              onChange={(e) => setFirstName(e.target.value)}
              size="small"
            />
            <TextField
              required
              label="Last Name"
              sx={{ width: "48%"}}
              className="contact-last-name"
              onChange={(e) => setLastName(e.target.value)}
              size="small"
            />
          </div>
          <div style={{ padding: "10px" }}>
            <TextField
              required
              label="Email"
              sx={{ width: "98.1%"}}
              className="contact-email"
              onChange={(e) => setEmail(e.target.value)}
              size="small"
            />
          </div>
          <div style={{ padding: "10px" }}>
            <TextField
              label="Phone"
              sx={{ width: "98.1%"}}
              onChange={(e) => setPhone(e.target.value)}
              size="small"
            />
          </div>
          <div style={{ padding: "10px" }}>
            <TextField
              label="Company"
              sx={{ width: "98.1%" }}
              onChange={(e) => setCompany(e.target.value)}
              size="small"
            />
          </div>
          <div style={{ padding: "10px" }}>
            <TextField
              label="Designation"
              sx={{ width: "98.1%"}}
              onChange={(e) => setDesignation(e.target.value)}
              size="small"
            />
          </div>
          <div style={{ padding: "10px" }}>
            <Button
              variant="outlined"
              style={{ width: "98.1%", margin: "5px" }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
