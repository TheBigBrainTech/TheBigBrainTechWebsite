import React from "react";
import PropTypes from "prop-types";
import { Container, Form, Button, Card } from "react-bootstrap";

const Step5 = ({ formData, handleChange, handlePrev, handleNext }) => {
  const { gender, ethnicity, disability, military, privacyAgreement } =
    formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNext();
  };

  const handlePreviousStepClick = () => {
    handlePrev();
  };

  return (
    <Container className="d-flex justify-content-center align-items-center h-100">
      <Card style={{ maxWidth: "600px", width: "100%", padding: "20px" }}>
        <Form id="step5" onSubmit={handleSubmit}>
          <h5>Step 5: EEO and Diversity</h5>
          <Form.Group controlId="gender">
            <Form.Label>Gender:</Form.Label>
            <Form.Control
              as="select"
              name="gender"
              value={gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="ethnicity">
            <Form.Label>Ethnicity:</Form.Label>
            <Form.Control
              as="select"
              name="ethnicity"
              value={ethnicity}
              onChange={handleChange}
              required
            >
              <option value="">Select Ethnicity</option>
              <option value="white">White</option>
              <option value="black">Black</option>
              <option value="asian">Asian</option>
              <option value="hispanic">Hispanic</option>
              <option value="other">Other</option>
              <option value="PrefferNottoSay">Prefer not to say</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="disability">
            <Form.Label>Do you have a disability?</Form.Label>
            <div className="d-flex align-items-center">
              <Form.Check
                className="form-check-input mx-2"
                type="radio"
                name="disability"
                id="disabilityYes"
                value="yes"
                label="Yes"
                required
                checked={disability === "yes"}
                onChange={handleChange}
                style={{ border: "none" }}
              />
              <Form.Check
                className="form-check-input mx-4"
                type="radio"
                name="disability"
                id="disabilityNo"
                value="no"
                label="No"
                required
                checked={disability === "no"}
                onChange={handleChange}
                style={{ border: "none" }}
              />
            </div>
          </Form.Group>

          <Form.Group controlId="military">
            <Form.Label className="d-flex align-items-center">
              Military Veteran?
            </Form.Label>
            <div className="d-flex align-items-center">
              <Form.Check
                className="form-check-input mx-2"
                type="radio"
                name="military"
                id="militaryYes"
                value="yes"
                label="Yes"
                required
                checked={military === "yes"}
                onChange={handleChange}
                style={{ border: "none" }}
              />
              <Form.Check
                className="form-check-input mx-4"
                type="radio"
                name="military"
                id="militaryNo"
                value="no"
                label="No"
                required
                checked={military === "no"}
                onChange={handleChange}
                style={{ border: "none" }}
              />
            </div>
          </Form.Group>

          <Form.Group controlId="privacyAgreement">
            <Form.Label className="my-4">
              Please read and accept the privacy agreement:
            </Form.Label>
            {/* Privacy Agreement Card */}
            <Card>
              <Card.Body>
                {/* Your Privacy Agreement Text Goes Here */}
              </Card.Body>
            </Card>
            <Form.Check
              type="checkbox"
              id="privacyAgreement"
              name="privacyAgreement"
              label="I agree to the privacy terms and conditions."
              checked={privacyAgreement}
              onChange={handleChange}
              className="my-4"
            />
          </Form.Group>

          <div style={{ marginTop: "15px" }} className="my-4 p-3">
            <Button
              variant="warning"
              className="prev-step"
              onClick={handlePreviousStepClick}
            >
              Previous
            </Button>
            <Button
              variant="warning"
              type="submit"
              className="next-step mx-3"
            >
              Next Step
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

Step5.propTypes = {
  formData: PropTypes.shape({
    gender: PropTypes.string.isRequired,
    ethnicity: PropTypes.string.isRequired,
    disability: PropTypes.string.isRequired,
    military: PropTypes.string.isRequired,
    privacyAgreement: PropTypes.bool.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
};

export default Step5;
