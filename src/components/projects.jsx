import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Projects = () => {
  return (
    <>
      <section id="projects">
        <Container
          className="d-flex justify-content-center mb-5"
        //   id="ProjTitleContainer"
        >
          <h1 className="title display-6">Personal Projects</h1>
        </Container>
        <Container className="d-flex justify-content-center p-2">
          <Row className="row row-cols-1 row-cols-md-12 g-3">
            <Col id = "ALSA" className="px-2">
              <div className="projectCardWrapper">
                <Card className="projectCard dark-gray-shadow">
                  <Card.Body className="text-center">
                  <a 
                className="button d-block mt-2  text-center mb-2 animated-name"
                role="button'"
                style={{color: "#918b8b",fontSize:'46px'}}
                href ="https://www.linkedin.com/feed/" 
              >ALSA</a>
                 <a href="https://www.linkedin.com/feed/">
                    <Card.Img variant="top" src="../ALSA1.jpg" alt="project photo"/>
                 </a>
                    <Card.Text className="m-2 p-2" style={{fontSize:'26px'}} >
                    Explore our eCommerce website - the ultimate convenience in grocery shopping 
                    that designed with a fresh and user-focused layout that ensures an uncluttered grocery shopping experience. 
                    Browse a wide variety of grocery categories, add items to your cart for a hassle-free shopping experience.
                    </Card.Text>
                    <Card.Footer className="m-2 p-2" style={{backgroundColor:'white', fontSize:'20px'}}>
                    Full-stack application developed from scratch.
                    PostgreSQL, NodeJS, Express, React, JavaScropt, HTML, CSS. 
                    Utilization of Bcrypt and JWT.
                    Developed three different experiences, for guests, users and admins.
                    </Card.Footer>
                  </Card.Body >
                </Card>
              </div>
            </Col>
            <Col id="PRIAN" className="px-2">
              <div className="projectCardWrapper">
                <Card className="projectCard dark-gray-shadow">
                  <Card.Body className="text-center">
                    <a 
                    className="button d-block mt-2 text-center mb-2 animated-name"
                    role="button'"
                    style={{color: "#918b8b",fontSize:'46px'}}
                    href ="https://remarkable-crumble-8cd593.netlify.app/"  
              >PRIAN</a>
                 <a href="https://remarkable-crumble-8cd593.netlify.app/">
                    <Card.Img variant="top" src="../FTNS.jpg" alt="project photo" />
                 </a>
                    <Card.Text className="m-2 p-2" style={{fontSize:'28px'}}>
                    Discover PRIAN FitConnect: Your Go-To Fitness Hub! Join our vibrant fitness community 
                    where you can share your favorite workouts and routines, create personalized fitness plans, 
                    and track your progress. Own your life today!
                    </Card.Text>
                    <Card.Footer className="m-2 p-2" style={{backgroundColor:'white', fontSize:'24px'}}>
                    A comprehensive web application built with a FullStack approach, 
                    harnessing the power of PostgreSQL, Node.js, Express, React, JavaScript, HTML, and CSS.
                    </Card.Footer>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col id = "Strangers Things" className="px-2">
              <div className="projectCardWrapper">
                <Card className="projectCard dark-gray-shadow">
                  <Card.Body className="text-center">
                    <a 
                className="button d-block mt-2  text-center mb-2 animated-name"
                role="button'"
                style={{color: "#918b8b",fontSize:'46px'}}
                href ="https://dancing-dieffenbachia-737e9f.netlify.app" 
              >Strangers Things</a>
               <a href="https://dancing-dieffenbachia-737e9f.netlify.app">
                    <Card.Img variant="top" src="../StrThng.jpg" alt="project photo" />
                 </a>
                    <Card.Text className="m-2 p-2" style={{fontSize:'28px'}}>
                    A Craigslist-Like web application offers a convenient 
                    and user-friendly online platform where users can easily buy, sell, 
                    or trade goods and services within their local communities. 
                    It provides a versatile solution for various online marketplace needs.
                    </Card.Text>
                    <Card.Footer className="m-2 p-2" style={{backgroundColor:'white', fontSize:'24px'}}>
                    The CRUD concept was implemented utilizing JavaScript, React, Redux, HTML and CSS
                    </Card.Footer >
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col id = "tic-tac-toe" className="px-2">
              <div className="projectCardWrapper">
                <Card className="projectCard dark-gray-shadow">
                  <Card.Body className="text-center">
                  <a 
                className="button d-block mt-2  text-center mb-2 animated-name"
                role="button'"
                style={{color: "#918b8b",fontSize:'46px'}}
                href ="https://gilded-strudel-432b4b.netlify.app/"  
              >Tic Tac Toe</a>
              <a href="https://gilded-strudel-432b4b.netlify.app/">
                    <Card.Img variant="top" src="../TTT.jpg" alt="project photo" />
                 </a>
                    <Card.Text className="m-2 p-2" style={{fontSize:'28px'}}>
                    Delve into an interactive and user-friendly Tic-Tac-Toe game 
                    that offers an engaging user experience
                    </Card.Text>
                    <Card.Footer className="m-2 p-2" style={{backgroundColor:'white', fontSize:'24px'}}>
                    Utilizing JavaScript, React, HTML, and CSS 
                    this project showcases a Single Page Application (SPA) for an efficient and seamless user experience.
                    </Card.Footer>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Projects;