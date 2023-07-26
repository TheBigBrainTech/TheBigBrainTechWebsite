import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../Assets/images/logo/FullLogo.png";

function Navigation() {
  return (
    <div>
        <h2 className="text-center bg-warning p-2">
          Newly Launched QA Automation Bootcamp
        </h2>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="p-3"
      >
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="150px"
            height="auto"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link
              as={Link}
              to="/find-courses"
              target="_blank"
              rel="noopener noreferrer"
            >
              Find Courses
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/job-application-form"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply For Jobs
            </Nav.Link>

            <NavDropdown title="For Student" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/login/StudentLogin">
                Login
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Student Resources
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Chat with an advisor
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="For Business" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Find Solution
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Hire Tallent
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Collaborate
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Get in touch
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="For Employee" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/login/EmployeeLogin">
                Employee Login
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="About" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/About/AboutUs">
                About Us
              </NavDropdown.Item>
              <NavDropdown.Item href="/About/Team">
                Join Our Team
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
