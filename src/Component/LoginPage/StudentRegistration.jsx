import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import Navigation from "../Homepage/Navbar/Navbar";
import Footer from "../Homepage/Footer/Footer";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faTwitter, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';

function StudentRegistration() {
  return (
   <div>
    <section>
        <Navigation />
      </section>
     <Container fluid>
     <Card className='mx-5 mb-5 p-5 shadow-5' style={{ marginTop: '100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)' }}>
        <Card.Body className='p-5 text-center'>
          <h2 className="fw-bold mb-5">Sign up now</h2>
          <Row>
            <Col col='6'>
              <Form.Control className='mb-4' placeholder='First name' type='text' />
            </Col>
            <Col col='6'>
              <Form.Control className='mb-4' placeholder='Last name' type='text' />
            </Col>
          </Row>
          <Form.Control className='mb-4' placeholder='Email' type='email' />
          <Form.Control className='mb-4' placeholder='Password' type='password' />
          <div className='d-flex justify-content-center mb-4'>
            <Form.Check name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
          </div>
          <Button className='w-100 mb-4' size='md'>Sign up</Button>
          {/* <div className="text-center">
            <p>or sign up with:</p>
            <Button variant='outline-primary' className='mx-3'>
              <FontAwesomeIcon icon={faFacebookF} size="sm" />
            </Button>
            <Button variant='outline-primary' className='mx-3'>
              <FontAwesomeIcon icon={faTwitter} size="sm" />
            </Button>
            <Button variant='outline-primary' className='mx-3'>
              <FontAwesomeIcon icon={faGoogle} size="sm" />
            </Button>
            <Button variant='outline-primary' className='mx-3'>
              <FontAwesomeIcon icon={faGithub} size="sm" />
            </Button>
          </div> */}
        </Card.Body>
      </Card>
    </Container>
    <section>
        <Footer />
      </section>
   </div>
  );
}

export default StudentRegistration;
