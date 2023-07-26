import React from 'react';
import PropTypes from 'prop-types';
import { Container, Form, Button } from 'react-bootstrap';

const Step1 = ({ formData, handleChange, handleNext }) => {
  const { name, email, phone, address, city, state, zip, linkedIn, website } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNext();
  };

  return (
    <Container className='d-flex justify-content-center align-items-center h-100'>
      <Form onSubmit={handleSubmit}>
        <h2>Step 1: Personal Information</h2>
        <Form.Group controlId='name'>
          <Form.Label>Name:</Form.Label>
          <Form.Control type='text' name='name' value={name} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId='email'>
          <Form.Label>Email:</Form.Label>
          <Form.Control type='email' name='email' value={email} onChange={handleChange} required  />
        </Form.Group>
        <Form.Group controlId='phone'>
          <Form.Label>Phone:</Form.Label>
          <Form.Control type='tel' name='phone' value={phone} onChange={handleChange} required  />
        </Form.Group>
        <Form.Group controlId='address'>
          <Form.Label>Address:</Form.Label>
          <Form.Control type='text' name='address' value={address} onChange={handleChange} required  />
        </Form.Group>
        <Form.Group controlId='city'>
          <Form.Label>City:</Form.Label>
          <Form.Control type='text' name='city' value={city} onChange={handleChange} required  />
        </Form.Group>
        <Form.Group controlId='state'>
          <Form.Label>State:</Form.Label>
          <Form.Control type='text' name='state' value={state} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId='zip'>
          <Form.Label>Zip:</Form.Label>
          <Form.Control type='text' name='zip' value={zip} onChange={handleChange} required  />
        </Form.Group>
        <Form.Group controlId='linkedIn'>
          <Form.Label>LinkedIn URL:</Form.Label>
          <Form.Control type='text' name='linkedIn' value={linkedIn} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId='website'>
          <Form.Label>Personal Website / GitHub:</Form.Label>
          <Form.Control type='text' name='website' value={website} onChange={handleChange} />
        </Form.Group>
        <Button className='mx-3 my-3' variant='primary' type='submit'>
          Next
        </Button>
      </Form>
    </Container>
  );
};

// Define prop types
Step1.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zip: PropTypes.string.isRequired,
    linkedIn: PropTypes.string,
    website: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
};

export default Step1;
