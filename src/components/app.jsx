import React from "react";
import { NavBar, Projects, Skillset, Footer, About } from ".";
import Container from "react-bootstrap/Container";
import Contacts from "./contacts";

const App = () => {
  return (
    <>
      <NavBar />
         <Container>
            <About />
         </Container>
         <Container className="custom-margin-top.">
            <Skillset />
         </Container>
         <Container className="custom-margin-top">
            <Projects />
         </Container>
        <Container className="custom-margin-top">
            <Contacts />
        </Container>
        <Container className="mt-5">
            <Footer />
        </Container> 
    </>
  );
};

export default App;