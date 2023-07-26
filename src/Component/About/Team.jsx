import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import jobListingsData from '../../Assets/Data/JobPostings.json';
import Footer from '../Homepage/Footer/Footer';
import Navigation from '../Homepage/Navbar/Navbar';

const JobCard = ({ job }) => {
  const cardStyle = {
    marginBottom: '20px', // Add desired spacing (e.g., 20px) between the cards
  };

  return (
    <Card style={cardStyle}>
      <Card.Body>
        <Card.Title>{job.jobTitle}</Card.Title>
        <Card.Text>{job.jobDescription}</Card.Text>
        <p>Location: {job.location}</p>
        <p>Job Type: {job.jobType}</p>
        <p>Type: {job.type}</p>
        <button className="btn btn-primary">Apply</button>
      </Card.Body>
    </Card>
  );
};

JobCard.propTypes = {
  job: PropTypes.shape({
    jobTitle: PropTypes.string.isRequired,
    jobDescription: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    jobType: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

const JoinOurTeam = () => {
  const jobListings = jobListingsData;
  const [locationFilter, setLocationFilter] = useState('');
  const [jobTypeFilter, setJobTypeFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  // Filter the job listings based on the selected filters
  const filteredJobListings = jobListings.filter((job) => {
    // Filter by location
    if (locationFilter && job.location !== locationFilter) {
      return false;
    }
    // Filter by job type
    if (jobTypeFilter && job.jobType !== jobTypeFilter) {
      return false;
    }
    // Filter by type
    if (typeFilter && job.type !== typeFilter) {
      return false;
    }
    return true;
  });

  const clearFilters = () => {
    setLocationFilter('');
    setJobTypeFilter('');
    setTypeFilter('');
  };

  return (
    <div>
      <section>
        <Navigation />
      </section>
      <Container>
        <h1 className="my-4">Join Teksyntax Inc. Team</h1>
        <Row>
          <Col md={3}>
            <h2>Filters</h2>
            <Form>
              <Form.Group>
                <Form.Label>Location:</Form.Label>
                <Form.Control
                  as="select"
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                >
                  <option value="">All Locations</option>
                  <option value="Virginia, USA">Virginia, USA</option>
                  <option value="Kolkata, India">Kolkata, India</option>
                  {/* Add more location options here */}
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Job Type:</Form.Label>
                <Form.Control
                  as="select"
                  value={jobTypeFilter}
                  onChange={(e) => setJobTypeFilter(e.target.value)}
                >
                  <option value="">All Job Types</option>
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  {/* Add more job type options here */}
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Type:</Form.Label>
                <Form.Control
                  as="select"
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                >
                  <option value="">All Types</option>
                  <option value="Online">Online</option>
                  <option value="On-site">On-site</option>
                  <option value="Hybrid">Hybrid</option>
                </Form.Control>
              </Form.Group>
              <Button variant="warning my-4" onClick={clearFilters}>
                Clear Filters
              </Button>
            </Form>
          </Col>
          <Col md={9}>
            <h2>Job Listings</h2>
            {filteredJobListings.map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
          </Col>
        </Row>
      </Container>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default JoinOurTeam;
