import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer2 = () => {
  return (
    <footer className=" text-light">
      <Container>
        <Row>
          <Col className="text-center subfooter">
            <p className="mx-2">
              &copy; Copyright Verbalyze 2023. All rights reserved.
            </p>
            <div>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="social-icon" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="social-icon" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="social-icon" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="social-icon" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer2;
