import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutUs = () => {
  return (
    <div>
      <main>
        <section className="about-section">
          <Container>
            <Row>
              <Col lg={8} className="offset-lg-2 text-center">
                <h2 style={{ color: "#ff0000", fontFamily: "Arial" }}>
                  About Us
                </h2>
                <p style={{ color: "#000000", fontFamily: "Verdana" }}>
                  "Coming together is a beginning, staying together is progress,
                  and working together is success."
                </p>
                <p style={{ color: "#000000", fontFamily: "Verdana" }}>
                  "Individual commitment to a group effort -- that is what makes
                  a team work, a company work, a society work, a civilization
                  work."
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        <section
          className="team-section"
          style={{ color: "#000000", fontFamily: "Verdana" }}
        >
          <h2
            className="text-center mb-5 mt-3"
            style={{ color: "#ff0000", fontFamily: "Arial" }}
          >
            Our Team Members
          </h2>
          <Container>
            <Row>
              <Col md={6} lg={3}>
                <div className="team-member">
                  <img
                    src="https://s.abcnews.com/images/US/Gty_Hacker_Group_Anonymous_er_160318_16x9_1600.jpg"
                    alt="Team Member 1"
                    className="img-fluid rounded-circle"
                  />
                  <h4>Amit Poudyal</h4>
                  <p>Web Developer</p>
                </div>
              </Col>
              <Col md={6} lg={3}>
                <div className="team-member">
                  <img
                    src="https://s.abcnews.com/images/US/Gty_Hacker_Group_Anonymous_er_160318_16x9_1600.jpg"
                    alt="Team Member 2"
                    className="img-fluid rounded-circle"
                  />
                  <h4>Phiroj Shah</h4>
                  <p>Web Developer</p>
                </div>
              </Col>
              <Col md={6} lg={3}>
                <div className="team-member">
                  <img
                    src="https://s.abcnews.com/images/US/Gty_Hacker_Group_Anonymous_er_160318_16x9_1600.jpg"
                    alt="Team Member 3"
                    className="img-fluid rounded-circle"
                  />
                  <h4>Ankit Nepal</h4>
                  <p>Graphic Designer</p>
                </div>
              </Col>
              <Col md={6} lg={3}>
                <div className="team-member">
                  <img
                    src="https://s.abcnews.com/images/US/Gty_Hacker_Group_Anonymous_er_160318_16x9_1600.jpg"
                    alt="Team Member 4"
                    className="img-fluid rounded-circle"
                  />
                  <h4>Swochhanda Jangam</h4>
                  <p>Content Writer</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
