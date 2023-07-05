import React, { useState } from "react";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import Button from "@mui/material/Button";
import "./TeamMobile.css";


const CARDS = 11;

const Card = ({ url, title, role, content }) => (
  <div
    className="mobile-card text-center"
  >
    <img className="mobile-image" src={url} alt={title} />
    <div className="mobile-role">{role}</div>
    <div className="mobile-name">{title}</div>
    <div className="mobile-contacts">
      <BsFacebook className="mobile-icons" />
      <BsLinkedin className="mobile-icons" />
      <BsGithub className="mobile-icons" />
    </div>
  </div>
);

const Carousel = ({ children }) => {
  const [active, setActive] = useState(0);
  const count = React.Children.count(children);

  return (
    <div className="mobile-carousel">
      {React.Children.map(children, (child, i) => (
        <div className="mobile-card-container">
          {active === i && child}
          {active > 0 && (
            <Button
              variant="outlined"
              className="mobile-nav-btn"
              onClick={() => setActive((i) => i - 1)}
              sx={{borderColor:"#4e54c8",borderRadius:"0",color:"#4e54c8",borderBottom:"0"}}
            >
              Prev
            </Button>
          )}
          {active < CARDS-2 && (
            <Button
              variant="outlined"
              className="mobile-nav-btn"
              onClick={() => setActive((i) => i + 1)}
              sx={{borderColor:"#4e54c8",borderRadius:"0",color:"#4e54c8",borderBottom:"0"}}
            >
              Next
            </Button>
          )}
        </div>
      ))}
    </div>
  );
};

export default function TeamMobile() {
  return (
    <div className="mobile-team">
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
  );
}
