import "./About.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
function About() {
  return (
    <div
      className="about-container"
      id="myabout"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
    >
      <div className="about-row">
        <h1 className="about-heading py-3">
          Voice AI Assistants Deliver Value From Day One.
        </h1>
        <p className="about-para">
          We understand that every business faces unique challenges. That’s why
          we’ve built voice AI assistants that can deliver value to your
          business from day one.
        </p>
        <p className="about-para">
          We offer ready-to-deploy voice AI that enhance efficiency and drive
          immediate results, and also work with clients to deliver bespoke voice
          AI assistants to meet their specific business requirements.
        </p>
      </div>
    </div>
  );
}

export default About;
