import React, { useState, useEffect } from "react";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import "./Team.css";
import TeamMobile from "./TeamMobile";
import {
  TiChevronLeftOutline,
  TiChevronRightOutline,
} from "https://cdn.skypack.dev/react-icons/ti";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const CARDS = 10;
const MAX_VISIBILITY = 3;

const Card = ({ url, title, role, content }) => (
  <div className="card">
    <img className="image" src={url} alt={title} />
    <div className="role">{role}</div>
    <div className="name">{title}</div>
    <div className="contacts">
      <BsFacebook className="icons" />
      <BsLinkedin className="icons" />
      <BsGithub className="icons" />
    </div>
  </div>
);

const Carousel = ({ children }) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);

  return (
    <div className="container d-flex justify-content-center" id="myteam">
      <div className="carousel">
        {active > 0 && (
          <button className="nav left" onClick={() => setActive((i) => i - 1)}>
            <TiChevronLeftOutline />
          </button>
        )}
        {React.Children.map(children, (child, i) => (
          <div
            className="card-container"
            style={{
              "--active": i === active ? 1 : 0,
              "--offset": (active - i) / 3,
              "--direction": Math.sign(active - i),
              "--abs-offset": Math.abs(active - i) / 3,
              "pointer-events": active === i ? "auto" : "none",
              opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
              display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
            }}
          >
            {child}
          </div>
        ))}
        {active < count - 1 && (
          <button className="nav right" onClick={() => setActive((i) => i + 1)}>
            <TiChevronRightOutline />
          </button>
        )}
      </div>
    </div>
  );
};

function Team() {
  const [isMobileView, setIsMobileView] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 470); // Adjust the breakpoint according to your needs
    };

    handleResize(); // Initial check on component mount

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobileView) {
    return (
      <div data-aos="zoom-in-right"
      data-aos-duration="2000">
        {/* CSS for mobile-heading is in Team.css */}
        {/* Mobile view works responsively upto width 250px. Standard mobiles have 360×640 through 414×896 */}
        <div
          className="mobile-heading"
        >
          Meet Our Team
        </div>
        <TeamMobile />
      </div>
    );
  }
  return (
    <div data-aos="zoom-in" data-aos-duration="2000" >
      <div className="heading">Meet Our Team</div>
      <div className="team">
        <Carousel>
          {[...new Array(CARDS)].map((_, i) => (
            <Card
              url={"user" + (i + 1) + ".jpeg"}
              role={"Developer" + (i + 1)}
              title={"Person" + (i + 1)}
              content="Lorem ipsum dolor sit amet"
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Team;
