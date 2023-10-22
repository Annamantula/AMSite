import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <footer className="footer mt-0">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={4} className="text-end mb-5">
            <a
              id="Linkedn"
              className="firstLink"
              target="_blank"
              href="https://www.linkedin.com/in/anna-m-53736a3b/"
            >
              <Image
                id="linkedinImg"
                src="../Linkedin.png"
                alt="Lnkd Image"
                className="outerPageLinks"
              />
            </a>
          </Col>

          <Col xs={12} md={4} className="text-center mb-5">
            <a
              id="gitHub"
              className="middleLink"
              target="_blank"
              href="https://github.com/Annamantula?tab=repositories"
            >
              <Image
                id="linkedinImg"
                src="../github.png"
                alt="Lnkd Image"
                className="outerPageLinks"
              />
            </a>
          </Col>
          <Col xs={12} md={4} className="text-start mb-5">
            <a
              id="Instagram"
              className="lasttLink"
              target="_blank"
              href="https://www.instagram.com/annamantula/"
            >
              <Image
                id="InstagramImg"
                src="../Instagram.png"
                alt="Inst Image"
                className="outerPageLinks"
              />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;