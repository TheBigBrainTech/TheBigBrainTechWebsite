import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Navigation from '../Homepage/Navbar/Navbar';
import Footer from '../Homepage/Footer/Footer';

function Dashboard({ handleLogout }) {
  return (
    <div>
      <Navigation />
      <div className='bg-dark p-3' style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="warning" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <Container fluid className="p-3 my-5 h-custom">
        <Row className="justify-content-center">
          {/* Available Consultants Card */}
          <Col sm={12} md={6} lg={4} className="mb-4">
            <Card bg="primary" text="white" className="p-3">
              <Card.Title className="text-center">Available Consultants</Card.Title>
              </Card>
          </Col>

          {/* Newsletter Records Card */}
          <Col sm={12} md={6} lg={4} className="mb-4">
            <Card bg="success" text="white" className="p-3">
              <Card.Title className="text-center">Newsletter Records</Card.Title>
             </Card>
          </Col>

          {/* Training Records Card */}
          <Col sm={12} md={6} lg={4} className="mb-4">
            <Card bg="info" text="white" className="p-3">
              <Card.Title className="text-center">Training Records</Card.Title>
             </Card>
          </Col>
        </Row>
      </Container>
     
      <Footer />
    </div>
  );
}

Dashboard.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

export default Dashboard;
