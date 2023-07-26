import React from "react";
import { Container, Card } from "react-bootstrap";
import EnrollmentForm from "./Entrollment";
import Navigation from "../Homepage/Navbar/Navbar";
import Footer from "../Homepage/Footer/Footer";
import Logo from "../../Assets/images/logo/FullLogo_black.png";

const EnrollmentCard = () => {
  return (
    <div>
      <section>
        <Navigation />
      </section>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Card style={{ width: "800px" }}>
          <Card.Body>
            <h3>
              Enroll for
              <img
                className="mb-4"
                style={{ height: "55px", width: "auto", marginTop: "22px" }}
                src={Logo}
                alt="Teksyntax Inc."
              ></img>
              Bootcamp
            </h3>
            <EnrollmentForm />
          </Card.Body>
        </Card>
      </Container>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default EnrollmentCard;
