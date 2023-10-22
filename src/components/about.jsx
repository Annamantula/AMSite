import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <section  id="about">
      <Container className="container-fluid"  style={{marginTop: "20px",paddingTop:"10%",backgroundColor:"white"}}>
        <Row className="g-0"> 
          <Col className= "col-md-5 text-center text-md-center ">
            <h1>
              <section className=" display-6 fly-in animated-name">About</section>
            </h1>
              <p className = "fly-in1 animated-name display-7 lead my-4 text-muted" style={{fontSize:'24px'}}> 
                &nbsp;&nbsp; Hello, I am Anna, and I'm thrilled to introduce myself as a web development enthusiast. 
                 My passion lies in crafting web applications with efficient and visually pleasing responsive UI. 
                 With over 20 years of diverse experience in the production industry, I've spent the last 8 years specializing in IT. 
                 Proficient in JavaScript, React, CSS, and HTML, my technical skills encompass various tools, technologies, and methodologies. 
                 I excel in team collaborations as well as working individually, and I possess a strong analytical mindset with meticulous attention to detail. 
                 With multilingual abilities and a commitment to top-tier customer service, I'm excited to explore how I can contribute to your projects!
              </p>
          </Col>
          <Col className="justify-content-center md-6 d-none d-md-block">
             <section className="mr-5 fly-in2"  style={{marginLeft: "5px",paddingLeft:"40%"}}>
                <a className="d-block mt-3 "
                  data-bs-toggle ="offcanvas"
                  role="button" 
                  aria-controls="sidebar"
                  style={{color: "#918b8b",fontSize:'35px'}}
                  href ="#sidebar">
                     <img className = "img-fluid" src="../ANNAMMM3.jpg" alt ="personal photo"></img> 
                </a>
                <a className="d-block mt-0 justify-content-center"
                  data-bs-toggle ="offcanvas"
                  role="button" 
                  aria-controls="sidebar"
                  style={{color: "#918b8b",fontSize:'34px', marginLeft: "5px",paddingLeft:"20%"}}
                  href ="#sidebar">
                    My Resume 
                </a>
            
                <div className="offcanvas offcanvas-start" 
                   tabIndex="-1" 
                   id="sidebar" 
                   aria-labelledby="sidebar-label"
                   style={{opacity:'0.7'}}
                   >
                    <div className="offcanvas-body" 
                       style={{ 
                       marginTop: "50%", 
                       marginRight:'25px', 
                       display: 'flex', 
                       flexDirection: 'column', 
                       alignItems: 'end', 
                       justifyContent: 'start'}}>
                            <Button style={{fontSize:"22px"}}
                                type="button" 
                                className="btn-close text-end justify-content-end m-10 p-10" 
                                data-bs-dismiss="offcanvas" 
                                aria-label="Close">
                            </Button>
                                  <a className="btn mb-3 p-3" 
                                       style={{marginTop: "30px",
                                       fontSize:"28px", 
                                       color:"#413f3f", 
                                       backgroundColor: "#dbfdb0", 
                                       boxShadow: "6px 6px 8px 2px #999999"}}
                                           href ="https://drive.google.com/file/d/18gJuov63NQqs0Jbjjg4WFvb2GKZvsrp8/view?usp=sharing"
                                           target="_blank"
                                           >Print My Resume
                                  </a>
                    </div>
                </div>
              </section>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;