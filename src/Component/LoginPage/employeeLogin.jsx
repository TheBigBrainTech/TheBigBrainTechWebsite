import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import Logo from "../../Assets/images/logo/FullLogo.png";
import loginImg from "../../Assets/images/OtherImages/signIn copy.jpg";
import Navigation from "../Homepage/Navbar/Navbar";
import Footer from "../Homepage/Footer/Footer";
import Dashboard from "../EmployeeDashboard/Dashboard";

function EmployeeLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  // Check if the user is already logged in (by checking localStorage token)
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3030/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // If login is successful, store the token and set isLoggedIn to true
        localStorage.setItem("accessToken", data.token);
        setIsLoggedIn(true);
        navigate("/login/EmployeeLogin/dashboard");
      } else {
        setError(data.error || "Invalid email or password");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false); // Set isLoggedIn to false on logout
    navigate("/"); // Redirect to the homepage or login page
  };

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
                    <Form.Control
                      type="email"
                      size="lg"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      size="lg"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  {error && <div className="text-danger mb-2">{error}</div>}
                  <div className="d-flex justify-content-between mb-4">
                    <a href="!#">Forgot password?</a>
                  </div>
                  <div className="text-center text-md-start mt-4 pt-2">
                    {isLoggedIn ? (
                      <Button className="mb-0 px-5" size="lg" onClick={handleLogout}>
                        Logout
                      </Button>
                    ) : (
                      <Button className="mb-0 px-5" size="lg" onClick={handleLogin}>
                        Login
                      </Button>
                    )}
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
      <Dashboard handleLogout={handleLogout} isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default EmployeeLogin;
