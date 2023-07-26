import React from "react";
import PropTypes from "prop-types";
import { Container, Form, Button } from "react-bootstrap";

const Step3 = ({ formData, handleChange, handleNext, handlePrev }) => {
  const { company, position, years, skills, certifications } = formData;

  const handleTextChange = (e) => {
    handleChange(e); // Pass the event object to the handleChange function
  };

  const handleResumeChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      handleChange(e); // Pass the event object to the handleChange function
    }
  };

  const handleCoverLetterChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      handleChange(e); // Pass the event object to the handleChange function
    }
  };

  const handlePreviousStepClick = () => {
    handlePrev();
  };

  const handleNextStepClick = (e) => {
    e.preventDefault();  // Prevent default form submission
  handleNext();
  };

  return (
    <Container className="d-flex justify-content-center align-items-center h-100">
      <Form id="step3">
        <h5>Step 3: Work Experience</h5>
        {/* The fields below are editable */}
        <Form.Group controlId="company">
          <Form.Label>Company:</Form.Label>
          <Form.Control
            type="text"
            value={company}
            name="company"
            onChange={handleTextChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="position">
          <Form.Label>Position:</Form.Label>
          <Form.Control
            type="text"
            value={position}
            name="position"
            onChange={handleTextChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="years">
          <Form.Label>Years of Experience:</Form.Label>
          <Form.Control
            type="text"
            value={years}
            name="years"
            onChange={handleTextChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="skills">
          <Form.Label>Skills:</Form.Label>
          <Form.Control
            as="textarea"
            value={skills}
            name="skills"
            onChange={handleTextChange}
          />
        </Form.Group>

        <Form.Group controlId="certifications">
          <Form.Label>Certifications:</Form.Label>
          <Form.Control
            as="textarea"
            value={certifications}
            name="certifications"
            onChange={handleTextChange}
          />
        </Form.Group>

        <Form.Group controlId="resume">
          <Form.Label>Upload Resume:</Form.Label>
          <Form.Control
            type="file"
            name="resume"
            onChange={handleResumeChange}
          />
        </Form.Group>

        <Form.Group controlId="coverLetter">
          <Form.Label>Upload Cover Letter:</Form.Label>
          <Form.Control
            type="file"
            name="coverLetter"
            onChange={handleCoverLetterChange}
          />
        </Form.Group>

        <div style={{ marginTop: "15px" }}>
          <Button
            variant="warning"
            className="prev-step"
            onClick={handlePreviousStepClick}
          >
            Previous
          </Button>
          <Button
            variant="primary"
            type="submit"
            className="next-step mx-3"
            onClick={handleNextStepClick}
          >
            Next
          </Button>
        </div>
      </Form>
    </Container>
  );
};

// Define prop types
Step3.propTypes = {
  formData: PropTypes.shape({
    resume: PropTypes.string,
    coverLetter: PropTypes.string,
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    years: PropTypes.string.isRequired,
    skills: PropTypes.string.isRequired,
    certifications: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
};

export default Step3;
