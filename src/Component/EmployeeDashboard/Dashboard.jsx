import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Navigation from '../Homepage/Navbar/Navbar';
import Footer from '../Homepage/Footer/Footer';

function Dashboard({ handleLogout, isLoggedIn }) {
  const handleLogoutClick = () => {
    // Call the handleLogout function passed from EmployeeLogin
    handleLogout();
  };

  return (
    <div>
      <Navigation />
      <div className='bg-dark p-3' style={{ display: 'flex', justifyContent: 'flex-end' }}>
        {isLoggedIn && ( // Display the Logout button only if the user is logged in
          <Button variant="warning" onClick={handleLogoutClick}>
            Logout
          </Button>
        )}
      </div>
      <Container fluid className="p-3 my-5 h-custom">
        <Row className="justify-content-center">
          {/* Available Consultants Card */}
          <Col sm={12} md={6} lg={4} className="mb-4">
            <Card bg="warning" text="white" className="p-3">
              <Card.Title className="text-center">Employees Data</Card.Title>
            </Card>
          </Col>

          {/* Add other Card components here */}
        </Row>
      </Container>
     
      <Footer />
    </div>
  );
}

Dashboard.propTypes = {
  handleLogout: PropTypes.func.isRequired, // Make sure handleLogout is a required prop
  isLoggedIn: PropTypes.bool.isRequired, // Make sure isLoggedIn is a required prop
};

export default Dashboard;
