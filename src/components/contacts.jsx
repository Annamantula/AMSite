import React, { useState } from "react";
import { Container, Row, Col, Form, Button} from "react-bootstrap";
const Contacts = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [error, setError] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const handleGuestEmailChange = (e) => {
    setGuestEmail(e.target.value);
  };

  const handleSubmit = () => {
      //Object with the form data
    const formData = {
        name: name,
        email: guestEmail,
        message: message,
      };

    const subject = `${name} with ${guestEmail}reached out to you from your personal site`;
    const body = message;
    const email = "mailto:anya.mantula@hotmail.com";

    
    //HTTP request to the server
    fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (response.ok) {
            // Reset form fields after successful submission
            window.location.href = `${email}?subject=${encodeURIComponent(
                subject
              )}&body=${encodeURIComponent(body)}`;
              setName("");
              setMessage("");
              setGuestEmail("");
          } else {
           
          }
        })
        .catch((error) => {
          
        });
    };
    






  return (
    <section id="contacts"  style={{
        backgroundImage: `url('../BGPP2.jpg')`,
        backgroundColor:"#b0a7ba",
        backgroundSize: '100%',
        height: '600px',
        opacity:"0.7"
      }}>
      <Container>
        <div className="justify-content-center text-center mt-2 pt-2 ">
        <h2 className="mt-2 display-5">Get in touch</h2>
        </div>
          <Row className=" justify-content-center my-2 xs-12 sm-10 md-8">
            <Col className="contact-form col-lg-6">
              <Form>
              <Form.Group controlId="guestEmailInput">
                  <Form.Label className="form-label">Email Address:</Form.Label>
                  <div type="email" className=" input-group mb-4" id="email">
                  <span className="input-group-text">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className ="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
</svg>
                </span>
                  <Form.Control
                    type="email"
                    value={guestEmail}
                    onChange={handleGuestEmailChange}
                    placeholder = "e.g. example@example.com"
                  />
                  </div>
                </Form.Group>
                <Form.Group controlId="nameInput" >
                  <Form.Label>Name:</Form.Label>
                  <div type="email" className=" input-group mb-4" id="email">
                  <span className="input-group-text">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
</svg>
                </span>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    placeholder = "e.g. John Doe"
                  />
                  </div>
                </Form.Group>
                <Form.Group controlId="messageInput">
                    <div className ="form-floating mt-5 mb-4">
                  <Form.Control
                   style ={{height: "140px"}}
                    as="textarea"
                    rows={8}
                    value={message}
                    onChange={handleMessageChange}
                  />
                  <Form.Label>Your Message:</Form.Label>
                  </div>
                </Form.Group>
                <Button
                  className="contactButton"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "black",
                    color: "black",
                  }}
                  variant="primary"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contacts;