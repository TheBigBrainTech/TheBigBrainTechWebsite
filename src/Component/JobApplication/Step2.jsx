  import React from 'react';
  import PropTypes from 'prop-types';
  import { Container, Form, Button } from 'react-bootstrap';

  const Step2 = ({ formData, handleChange, handlePrev, handleNext }) => {
    const { education, university, graduationYear, honors } = formData;

    const handleSubmit = (e) => {
      e.preventDefault();
      handleNext();
    };

    const handleNextStepClick = () => {
      handleNext();
    };

    const handlePreviousStepClick = () => {
      handlePrev();
    };

    return (
      <Container className='d-flex justify-content-center align-items-center h-100'>
        <Form id='step2' onSubmit={handleSubmit}>
          <h5>Step 2: Education</h5>
          <Form.Group controlId='education'>
            <Form.Label>Highest Education:</Form.Label>
            <Form.Control
              type='text'
              name='education'
              value={education}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId='university'>
            <Form.Label>School / University:</Form.Label>
            <Form.Control
              type='text'
              name='university'
              value={university}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId='graduationYear'>
            <Form.Label>Year of Graduation:</Form.Label>
            <Form.Control
              placeholder='mm/dd/yyyy'
              type='text'
              name='graduationYear'
              value={graduationYear}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId='honors'>
            <Form.Label>Honors/Awards:</Form.Label>
            <Form.Control
              as='textarea'
              name='honors'
              value={honors}
              onChange={handleChange}
            />
          </Form.Group>

          <div style={{ marginTop: '15px' }}>
            <Button
              variant='warning'
              className='prev-step'
              onClick={handlePreviousStepClick}
            >
              Previous
            </Button>
            <Button
              variant='primary'
              type='button'
              className='next-step mx-3'
              onClick={handleNextStepClick}
            >
              Next Step
            </Button>
          </div>
        </Form>
      </Container>
    );
  };


// Define prop types
Step2.propTypes = {
  formData: PropTypes.shape({
    education: PropTypes.string.isRequired,
    university: PropTypes.string.isRequired,
    graduationYear: PropTypes.string.isRequired,
    honors: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
};

  export default Step2;
