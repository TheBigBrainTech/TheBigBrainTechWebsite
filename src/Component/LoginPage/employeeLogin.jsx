import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import Logo from "../../Assets/images/logo/FullLogo.png";
import loginImg from "../../Assets/images/OtherImages/signIn copy.jpg";
import Navigation from "../Homepage/Navbar/Navbar";
import Footer from "../Homepage/Footer/Footer";

function EmployeeLogin() {
  return (
    <div>
      <section>
        <Navigation />
      </section>
      <Container fluid className="p-3 my-5 h-custom">
        <Row>
          <Col col="10" md="6">
            <img src={loginImg} className="img-fluid" alt="" />
          </Col>
          <Col col="4" md="6">
          <Container fluid className="p-3 my-5 h-custom">
      <Card className="p-3">
        <Card.Body>
          <div className="d-flex flex-row align-items-center justify-content-center">
            <img
              className="p-0 m-0"
              src={Logo}
              alt="Company Logo"
              style={{ filter: "invert(1)", height: "auto", width: "200px" }}
            />
          </div>
          <Form.Group className="mb-4">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" size="lg" />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" size="lg" />
          </Form.Group>
          <div className="d-flex justify-content-between mb-4">
            <Form.Check type="checkbox" label="Remember me" />
            <a href="!#">Forgot password?</a>
          </div>
          <div className="text-center text-md-start mt-4 pt-2">
            <Button className="mb-0 px-5" size="lg">
              Login
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
          </Col>
        </Row>
      </Container>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default EmployeeLogin;
