import React from "react";
import PropTypes from 'prop-types';
import { Container, Table, Button } from "react-bootstrap";

const Step6 = ({ formData, handlePrev, handleConfirm }) => {
  const references = formData.references || [];

  return (
    <Container className="d-flex justify-content-center align-items-center h-100">
      <div>
        <h5>Step 6: Review Your Application</h5>
        <Table striped bordered responsive>
          <thead>
            <tr>
              <th colSpan="2">Personal Information</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Full Name:</td>
              <td>{formData.name}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{formData.email}</td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>{formData.phone}</td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>{formData.address}</td>
            </tr>
            <tr>
              <td>City:</td>
              <td>{formData.city}</td>
            </tr>
            <tr>
              <td>State:</td>
              <td>{formData.state}</td>
            </tr>
            <tr>
              <td>ZIP:</td>
              <td>{formData.zip}</td>
            </tr>
            <tr>
              <td>LinkedIn Profile:</td>
              <td>{formData.linkedIn}</td>
            </tr>
            <tr>
              <td>Personal Website:</td>
              <td>{formData.website}</td>
            </tr>
          </tbody>

          <thead>
            <tr>
              <th colSpan="2">Education Information</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Education Level:</td>
              <td>{formData.education}</td>
            </tr>
            <tr>
              <td>University:</td>
              <td>{formData.university}</td>
            </tr>
            <tr>
              <td>Graduation Year:</td>
              <td>{formData.graduationYear}</td>
            </tr>
            <tr>
              <td>Honors:</td>
              <td>{formData.honors}</td>
            </tr>
          </tbody>

          <thead>
            <tr>
              <th colSpan="2">Work Information</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Company:</td>
              <td>{formData.company}</td>
            </tr>
            <tr>
              <td>Position:</td>
              <td>{formData.position}</td>
            </tr>
            <tr>
              <td>Years of Experience:</td>
              <td>{formData.years}</td>
            </tr>
            <tr>
              <td>Skills:</td>
              <td>{formData.skills}</td>
            </tr>
            <tr>
              <td>Certifications:</td>
              <td>{formData.certifications}</td>
            </tr>
          </tbody>

          <thead>
            <tr>
              <th colSpan="2">Professional References</th>
            </tr>
          </thead>
          <tbody>
            {references.length > 0 && (
              <tr>
                <td>References:</td>
                <td>
                  <ul>
                    {references.map((reference, index) => (
                      <li key={index}>
                        {`Company: ${reference.company}, Manager: ${reference.manager}, Email: ${reference.email}, Phone: ${reference.phone}`}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            )}
          </tbody>

          <thead>
            <tr>
              <th colSpan="2">EEO and Diversity:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Gender:</td>
              <td>{formData.gender}</td>
            </tr>
            <tr>
              <td>Ethnicity:</td>
              <td>{formData.ethnicity}</td>
            </tr>
            <tr>
              <td>Disability:</td>
              <td>{formData.disability}</td>
            </tr>
            <tr>
              <td>Military Service:</td>
              <td>{formData.military}</td>
            </tr>
            <tr>
              <td>Privacy Agreement:</td>
              <td>{formData.privacyAgreement ? "Yes" : "No"}</td>
            </tr>
          </tbody>
        </Table>

        <div style={{ marginTop: "15px" }}>
          <Button variant="warning" className="prev-step" onClick={handlePrev} type="button">
            Previous
          </Button>
          <Button variant="primary" className="next-step mx-3" onClick={handleConfirm} type="button">
            Confirm & Submit
          </Button>
        </div>
      </div>
    </Container>
  );
};

Step6.propTypes = {
  formData: PropTypes.shape({
    references: PropTypes.arrayOf(
      PropTypes.shape({
        company: PropTypes.string.isRequired,
        manager: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
      })
    ),
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zip: PropTypes.string.isRequired,
    linkedIn: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    education: PropTypes.string.isRequired,
    university: PropTypes.string.isRequired,
    graduationYear: PropTypes.string.isRequired,
    honors: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    years: PropTypes.string.isRequired,
    skills: PropTypes.string.isRequired,
    certifications: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    ethnicity: PropTypes.string.isRequired,
    disability: PropTypes.string.isRequired,
    military: PropTypes.string.isRequired,
    privacyAgreement: PropTypes.bool.isRequired,
  }).isRequired,
  handlePrev: PropTypes.func.isRequired,
  handleConfirm: PropTypes.func.isRequired,
};

export default Step6;
