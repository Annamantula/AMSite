import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const Skillset = () => {
  return (
    <section id="skillset" 
         style={{
            backgroundImage: `url('../BGPP2.jpg')`,
            backgroundColor:"#b0a7ba",
            backgroundSize: '100%',
            height: '400px',
            opacity:"0.7"
         }}
    >
      <Container className="d-flex justify-content-center mt-5">
            <div className=" mt-4 display-6" style={{color: "b#313032"}}>Skillset: </div>
      </Container>
      <Container className="d-flex justify-content-center p-2" >
           <Card className="bg-transparent border-0 transparent px-10 mx-10 pb-5">
              <Card.Body>
                 <Card.Text className ="align-items-center justify-content-center border-0 transparent mt-2 mp-5"
                  >
                     <div className=" d-flex align-items-center justify-content-center border-0 transparent mb-2" 
                          style={{color: "#959595"}}
                      >
                          <h2> Web Developer</h2>
                     </div>
                     <div style={{color: "#313032",}}>
                         <span style={{ fontSize: '24px' }}>
                             JavaScript <i className="fa fa-check"></i>
                         </span>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         <span style={{ fontSize: '24px' }}>
                             React <i className="fa fa-check"></i>
                         </span>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         <span style={{ fontSize: '24px' }}>
                              Node.js <i className="fa fa-check"></i>
                         </span>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         <span style={{ fontSize: '24px' }}>
                              Express <i className="fa fa-check"></i>
                         </span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span style={{ fontSize: '24px' }}>
                              PostgreSQL <i className="fa fa-check"></i>
                        </span> 
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span style={{ fontSize: '24px' }}>
                              mySQL <i className="fa fa-check"></i>
                        </span> 
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span style={{ fontSize: '24px' }}>
                              AJAX <i className="fa fa-check"></i>
                        </span> 
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span style={{ fontSize: '24px' }}>
                              CSS3 <i className="fa fa-check"></i>
                        </span> 
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span style={{ fontSize: '24px' }}>
                              HTML <i className="fa fa-check"></i>
                        </span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span style={{ fontSize: '24px' }}>
                             Bootstrap <i className="fa fa-check"></i>
                        </span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span style={{ fontSize: '24px' }}>
                             JSON <i className="fa fa-check"></i>
                         </span>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         <span style={{ fontSize: '24px' }}>
                             jQuery <i className="fa fa-check"></i>
                         </span>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         <span style={{ fontSize: '24px' }}>
                              Jira <i className="fa fa-check"></i>
                         </span>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         <span style={{ fontSize: '24px' }}>
                             Docker <i className="fa fa-check"></i>
                         </span>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         <span style={{ fontSize: '24px' }}>
                             Bitbucket <i className="fa fa-check"></i>
                         </span>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         <span style={{ fontSize: '24px' }}>
                             Confluence <i className="fa fa-check"></i>
                         </span>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         <span style={{ fontSize: '24px' }}>
                             Visual Studio Code <i className="fa fa-check"></i>
                         </span>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         <span style={{ fontSize: '24px' }}>
                             IntelliJ IDEA <i className="fa fa-check"></i>
                         </span>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         <span style={{ fontSize: '24px' }}>
                            Eclipse <i className="fa fa-check"></i>
                         </span>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         <span style={{ fontSize: '24px' }}>
                             Heroku <i className="fa fa-check"></i>
                         </span>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         <span style={{ fontSize: '24px' }}>
                             Netlify <i className="fa fa-check"></i>
                         </span>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         <span style={{ fontSize: '24px' }}>
                             Figma <i className="fa fa-check"></i>
                         </span>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         <span style={{ fontSize: '24px' }}>
                              Cypress.io <i className="fa fa-check"></i>
                         </span>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         <span style={{ fontSize: '24px' }}>
                               Postman <i className="fa fa-check"></i>
                         </span>
                         &nbsp;&nbsp;&nbsp;&nbsp;
                         <span style={{ fontSize: '24px' }}>
                               TestRail <i className="fa fa-check"></i>
                         </span>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         <span style={{ fontSize: '24px' }}>
                               Chrome Developer Tools <i className="fa fa-check"></i>
                         </span>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         <span style={{ fontSize: '24px' }}>
                                Xcode <i className="fa fa-check"></i>
                         </span>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         <span style={{ fontSize: '24px' }}>
                               Android Studio <i className="fa fa-check"></i>
                         </span>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         <span style={{ fontSize: '24px' }}>
                                ADB <i className="fa fa-check"></i>
                         </span>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         <span style={{ fontSize: '24px' }}>
                                Waterfall <i className="fa fa-check"></i>
                         </span>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         <span style={{ fontSize: '24px' }}>
                                Agile/Scrum <i className="fa fa-check"></i>
                         </span>
                     </div>
                 </Card.Text>
              </Card.Body>
            </Card>
      </Container>
    </section>
)}

export default Skillset;