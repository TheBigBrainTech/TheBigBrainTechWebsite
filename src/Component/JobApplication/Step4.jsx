import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Form, Button } from 'react-bootstrap';

const Step4 = ({ formData, handleChange, handleNext, handlePrev }) => {
  const [company1, setCompany1] = useState(formData.references[0]?.company || '');
  const [manager1, setManager1] = useState(formData.references[0]?.manager || '');
  const [email1, setEmail1] = useState(formData.references[0]?.email || '');
  const [phone1, setPhone1] = useState(formData.references[0]?.phone || '');

  const [company2, setCompany2] = useState(formData.references[1]?.company || '');
  const [manager2, setManager2] = useState(formData.references[1]?.manager || '');
  const [email2, setEmail2] = useState(formData.references[1]?.email || '');
  const [phone2, setPhone2] = useState(formData.references[1]?.phone || '');

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedReferences = [
      { company: company1, manager: manager1, email: email1, phone: phone1 },
      { company: company2, manager: manager2, email: email2, phone: phone2 },
    ];

    // Call the handleChange function from the parent component to update the references in the form data
    handleChange({ target: { name: 'references', value: updatedReferences } });

    // Now call handleNext() to move to the next step
    handleNext();
  };

  
  

  return (
    <Container className='d-flex justify-content-center align-items-center h-100'>
      <Form onSubmit={handleSubmit}>
        <h2>Step 4: References</h2>

        <div style={{ marginBottom: '15px' }}>
          <h5>
            <b>Reference 1:</b>
          </h5>
          <Form.Group controlId='reference-company-1'>
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              type='text'
              value={company1}
              onChange={(e) => setCompany1(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId='reference-manager-1'>
            <Form.Label>Name of Manager</Form.Label>
            <Form.Control
              type='text'
              value={manager1}
              onChange={(e) => setManager1(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId='reference-email-1'>
            <Form.Label>Official Email</Form.Label>
            <Form.Control
              type='email'
              value={email1}
              onChange={(e) => setEmail1(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId='reference-phone-1'>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type='tel'
              value={phone1}
              onChange={(e) => setPhone1(e.target.value)}
              required
            />
          </Form.Group>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <h5>
            <b>Reference 2:</b>
          </h5>
          <Form.Group controlId='reference-company-2'>
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              type='text'
              value={company2}
              onChange={(e) => setCompany2(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId='reference-manager-2'>
            <Form.Label>Name of Manager</Form.Label>
            <Form.Control
              type='text'
              value={manager2}
              onChange={(e) => setManager2(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId='reference-email-2'>
            <Form.Label>Official Email</Form.Label>
            <Form.Control
              type='email'
              value={email2}
              onChange={(e) => setEmail2(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId='reference-phone-2'>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type='tel'
              value={phone2}
              onChange={(e) => setPhone2(e.target.value)}
              required
            />
          </Form.Group>
        </div>

        <div style={{ marginTop: '15px' }}>
          <Button variant='warning' className='prev-step' onClick={handlePrev}>
            Previous
          </Button>
          <Button variant='primary' type='submit' className='next-step mx-3'>
            Next
          </Button>
        </div>
      </Form>
    </Container>
  );
};


// Define prop types
Step4.propTypes = {
  formData: PropTypes.shape({
    references: PropTypes.arrayOf(
      PropTypes.shape({
        company: PropTypes.string.isRequired,
        manager: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
};


export default Step4;
