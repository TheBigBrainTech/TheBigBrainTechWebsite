import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const EnrollmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    preferredBootcamp: '',
    experienceInIT: 'None',
    proficiencyInLanguages: 'None',
    trainingPurpose: '',
    howDidYouHear: '',
    preferredSchedule: '',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form validation and submission logic here
    console.log(formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      preferredBootcamp: '',
      experienceInIT: 'None',
      proficiencyInLanguages: 'None',
      trainingPurpose: '',
      howDidYouHear: '',
      preferredSchedule: '',
      comments: '',
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="phoneNumber">
        <Form.Label>Contact Number</Form.Label>
        <Form.Control
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="preferredBootcamp">
        <Form.Label>Preferred Bootcamp</Form.Label>
        <Form.Control
          as="select"
          name="preferredBootcamp"
          value={formData.preferredBootcamp}
          onChange={handleChange}
          required
        >
          <option value="">Select a Bootcamp</option>
          <option value="Business Analyst">Business Analyst</option>
          <option value="Project Manager">Project Manager</option>
          <option value="Java Developer">Java Developer</option>
          <option value="React Developer">React Developer</option>
          <option value="DevOps">DevOps</option>
          <option value="Quality Assurance Automation">Quality Assurance Automation</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="experienceInIT">
        <Form.Label>Experience in IT</Form.Label>
        <Form.Control
          as="select"
          name="experienceInIT"
          value={formData.experienceInIT}
          onChange={handleChange}
          required
        >
          <option value="None">None</option>
          <option value="Basic">Basic</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="proficiencyInLanguages">
        <Form.Label>Proficiency in Programming Languages</Form.Label>
        <Form.Control
          as="select"
          name="proficiencyInLanguages"
          value={formData.proficiencyInLanguages}
          onChange={handleChange}
          required
        >
          <option value="None">None</option>
          <option value="Basic">Basic</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="trainingPurpose">
        <Form.Label>What do you want to achieve by taking this training?</Form.Label>
        <Form.Control
          as="textarea"
          name="trainingPurpose"
          value={formData.trainingPurpose}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="howDidYouHear">
        <Form.Label>How did you hear about this training bootcamp?</Form.Label>
        <Form.Control
          as="select"
          name="howDidYouHear"
          value={formData.howDidYouHear}
          onChange={handleChange}
        >
          <option value="">Select an option</option>
          <option value="Online Advertisement">Online Advertisement</option>
          <option value="Social Media">Social Media</option>
          <option value="Word of Mouth">Word of Mouth</option>
          <option value="Other">Other</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="preferredSchedule">
        <Form.Label>Preferred Schedule</Form.Label>
        <Form.Control
          as="select"
          name="preferredSchedule"
          value={formData.preferredSchedule}
          onChange={handleChange}
        >
          <option value="">Select a preferred schedule</option>
          <option value="Morning">Morning</option>
          <option value="Evening">Evening</option>
          <option value="Afternoon">Afternoon</option>
          <option value="Weekend">Weekend</option>
        </Form.Control>
      </Form.Group>


      <Form.Group controlId="comments">
        <Form.Label>Additional Comments</Form.Label>
        <Form.Control
          as="textarea"
          name="comments"
          value={formData.comments}
          onChange={handleChange}
        />
      </Form.Group>

      {/* The rest of the form fields */}
      <div className='p-3'>
      <Button variant="warning" type="submit" >
        Submit
      </Button>
      </div>
    </Form>
  );
};

export default EnrollmentForm;
