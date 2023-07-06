import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { IoLogoLinkedin, IoIosMail } from "react-icons/io";


const TeamSection = () => {
  const teamMembers = [
    {
      id: 3,
      name: "Durgansh Dixit",
      position: "ML engineer",
      image: "p5.jpg",
      email: "saniket919@gmail.com",

      socialLinks: {
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
      },
    },

    {
      id: 4,
      name: "Sudhanshu Koundal",
      position: "SWE",
      image: "p4.jpg",
      email: "mscientist12@gmail.com",

      socialLinks: {
        // twitter: "https://twitter.com/johndoe",
        linkedin: "https://www.linkedin.com/in/sudhanshuk12/e",
      },
    },

    {
      id: 1,
      name: "Shivam bajpai",
      position: "Developer",
      image: "p10.jpg",
      email: "Shivambajpai1641@gmail.com",
      socialLinks: {
        // twitter: "https://twitter.com/johndoe",
        linkedin: "https://www.linkedin.com/in/shivam-bajpai-622b47199",
      },
    },
    {
      id: 9,
      name: "Ayaz Sarwar",
      position: "Full Stack Developer",
      image: "p2.jpg",
      email: "ayaz.sarwar39@gmail.com",

      socialLinks: {
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://www.linkedin.com/in/ayaz-sarwar/",
      },
    },

    {
      id: 5,
      name: "Arindom Bhattacharjeee",
      position: "Data Scientist",
      image: "p7.jpg",
      email: "analytics1data@gmail.com",

      socialLinks: {
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://www.linkedin.com/in/arindomisi/",
      },
    },

    {
      id: 7,
      name: "Riddhi Agrahari",
      position: "Social Media Manager",
      image: "p1.jpeg",
      email: "johndoe@example.com",

      socialLinks: {
        // twitter: "https://twitter.com/johndoe",
        linkedin: "https://www.linkedin.com/in/riddhiagrahari2002/",
      },
    },

    {
      id: 8,
      name: "Akshita S",
      position: "SDE",
      image: "p3.jpg",
      email: "aksh1311ita@gmail.com",

      socialLinks: {
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://www.linkedin.com/in/akshita-srinivasan-600562213/",
      },
    },
    {
      id: 6,
      name: "Riya Smriti",
      position: "Frontend Developer",
      image: "p8.jpg",
      email: "smritiriya7@example.com",

      socialLinks: {
        // twitter: "https://twitter.com/johndoe",
        linkedin: "https://www.linkedin.com/in/riya-smriti-060b96202",
      },
    },

    {
      id: 10,
      name: "Ayan Kr. Sinha",
      position: "AI/ML Developer",
      image: "p11.jpg",
      email: "johndoe@example.com",

      socialLinks: {
        twitter: "https://twitter.com/johndoe",
        linkedin: "www.linkedin.com/in/ayan-kumar-sinha-885806171",
      },
    },
    {
      id: 2,
      name: "Shashank Singh ",
      position: "CEO, CTO",
      image: "p6.jpg",
      email: "shashank@verbalyze.in",

      socialLinks: {
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://www.linkedin.com/in/shashank-singh-088426204",
      },
    },
    {
      id: 1,
      name: "Jai Thakur",
      position: "CMO",
      image: "p9.jpg",
      email: "jai.thakur@verbalyze.in",
      socialLinks: {
        // twitter: "https://twitter.com/johndoe",
        linkedin: "https://www.linkedin.com/in/jaithakur/",
      },
    },
    // Add more team members here...
  ];

  return (
    <Container className="py-5 " id="myteam">
      <h2 className="py-3">Our Team</h2>
      <Row className="justify-content-center">
        {teamMembers.map((member) => (
          <Col
            key={member.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
            className="mb-4"
          >
            <Card
              className="text-center"
              style={{ border: "none" }}
              data-aos="flip-right"
              data-aos-duration="1000"
            >
              <Image
                src={member.image}
                alt={member.name}
                roundedCircle
                style={{ width: "100px", height: "100px", margin: "auto" }}
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "15px" }}>
                  {member.name}
                </Card.Title>
                <Card.Subtitle
                  className="mb-2 text-muted"
                  style={{ fontSize: "13px" }}
                >
                  {member.position}
                </Card.Subtitle>
                <div>
                  <a
                    href={member.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: "20px" }}
                  >
                    <IoLogoLinkedin />
                  </a>{" "}
                  |{" "}
                  <a
                    href={`mailto:${member.email}`}
                    style={{ fontSize: "20px", color: "rgb(178, 3, 3)" }}
                  >
                    <IoIosMail />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TeamSection;
