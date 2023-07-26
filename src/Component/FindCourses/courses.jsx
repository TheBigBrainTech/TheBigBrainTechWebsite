import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Form, Button, Col, Row } from "react-bootstrap";
import coursesData from "../../Assets/Data/CoursesData.json"; // Import the courses data
import Navigation from "../Homepage/Navbar/Navbar";
import Footer from "../Homepage/Footer/Footer";


const CardList = () => {
  const navigate = useNavigate();

  const navigateToCourse = (id) => {
    // Use a switch statement or if-else conditions to navigate to the correct course component
    switch (id) {
      case 1:
        navigate(`/course/java/${id}`);
        break;
      case 2:
        navigate(`/course/java/${id}`);
        break;
      case 3:
        navigate(`/course/react/${id}`);
        break;
      case 4:
        navigate(`/course/react/${id}`);
        break;
      case 5:
        navigate(`/course/DevOPS/${id}`);
        break;
      case 6:
        navigate(`/course/DevOPS/${id}`);
        break;
      case 7:
        navigate(`/course/BusinessAnalyst/${id}`);
        break;
      case 8:
        navigate(`/course/BusinessAnalyst/${id}`);
        break;
      case 9:
        navigate(`/course/ProjectManagement/${id}`);
        break;
      case 10:
        navigate(`/course/ProjectManagement/${id}`);
        break;
      case 11:
        navigate(`/course/DataAnalyst/${id}`);
        break;
      case 12:
        navigate(`/course/DataAnalyst/${id}`);
        break;
      case 13:
        navigate(`/course/DataETL/${id}`);
        break;
      case 14:
        navigate(`/course/QA/${id}`);
        break;
      case 15:
        navigate(`/course/QA/${id}`);
        break;
      case 16:
        navigate(`/course/QA/${id}`);
        break;
      case 17:
        navigate(`/course/QA/${id}`);
        break;
      case 18:
        navigate(`/course/QA/${id}`);
        break;
      case 19:
        navigate(`/course/QA/${id}`);
        break;
      case 20:
        navigate(`/course/UIUX/${id}`);
        break;
      default:
        break;
    }
  };

  // State to manage filter values
  const [topic, setTopic] = useState("All");
  const [location, setLocation] = useState("All");
  const [schedule, setSchedule] = useState([]);
  const [format, setFormat] = useState([]);

  // State to store filtered cards
  const [filteredCards, setFilteredCards] = useState([]);

  // Function to handle filter changes
  const handleFilterChange = () => {
    const filteredData = coursesData.filter((course) => {
      // Apply filters based on state values
      // Modify the conditions as needed
      return (
        (topic === "All" || course.topic === topic) &&
        (location === "All" || course.location === location) &&
        (schedule.length === 0 || schedule.includes(course.schedule)) &&
        (format.length === 0 || format.includes(course.format))
      );
    });

    setFilteredCards(filteredData);
  };

  // Function to handle Schedule filter changes
  const handleScheduleChange = (time) => {
    const updatedSchedule = [...schedule];
    if (updatedSchedule.includes(time)) {
      // Remove time from schedule if already selected
      const index = updatedSchedule.indexOf(time);
      updatedSchedule.splice(index, 1);
    } else {
      // Add time to schedule if not already selected
      updatedSchedule.push(time);
    }
    setSchedule(updatedSchedule);
  };

  // Function to handle Format filter changes
  const handleFormatChange = (formatType) => {
    const updatedFormat = [...format];
    if (updatedFormat.includes(formatType)) {
      // Remove format from selected formats if already selected
      const index = updatedFormat.indexOf(formatType);
      updatedFormat.splice(index, 1);
    } else {
      // Add format to selected formats if not already selected
      updatedFormat.push(formatType);
    }
    setFormat(updatedFormat);
  };

  // Function to clear all filters
  const clearFilters = () => {
    setTopic("All");
    setLocation("All");
    setSchedule([]);
    setFormat([]);
  };

  // Update filtered cards when filters change
  useEffect(() => {
    handleFilterChange();
  }, [topic, location, schedule, format]);

  // Set initial state to display all data
  useEffect(() => {
    setFilteredCards(coursesData);
  }, []);

  return (
    <div>
      <section>
        <Navigation />
      </section>
      <section className="PageHeader">
        <h1 className="text-center my-3">
          <strong style={{ fontSize: "100px" }}>Course Catalog</strong>
        </h1>
      </section>
      <section className="container">
        <h3>
          <b>Programs Found :</b>{" "}
        </h3>
        <hr></hr>
      </section>
      <section className="container text-center">
        <h4>
          <b>conjoint Courses</b>
        </h4>
        <p>A full-time commitment, designed to get you hired.</p>
      </section>
      <div className="container my-4">
        <Row>
          {/* Filters Section */}
          <Col md={4}>
            <Form className="my-3">
              {/* Topic Filter */}
              <Form.Group controlId="topicFilter">
                <Form.Label>
                  <b>Topic</b>
                </Form.Label>
                <Form.Control
                  as="select"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                >
                  <option value="All">All</option>
                  <option value="Business">Business</option>
                  <option value="Data">Data</option>
                  <option value="Developer">Developer</option>
                  <option value="Design">Design</option>
                  <option value="Quality Assurance">Quality Assurance</option>
                </Form.Control>
              </Form.Group>

              {/* Location Filter */}
              <Form.Group controlId="locationFilter">
                <Form.Label>
                  <b>Location</b>
                </Form.Label>
                <Form.Control
                  as="select"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option value="All">All</option>
                  <option value="Virginia">Virginia</option>
                  {/* Add other locations as needed */}
                </Form.Control>
              </Form.Group>

              {/* Schedule Filter */}
              <Form.Group>
                <Form.Label>Schedule</Form.Label>
                <Form.Check
                  type="checkbox"
                  label="Morning"
                  checked={schedule.includes("Morning")}
                  onChange={() => handleScheduleChange("Morning")}
                />
                <Form.Check
                  type="checkbox"
                  label="Afternoon"
                  checked={schedule.includes("Afternoon")}
                  onChange={() => handleScheduleChange("Afternoon")}
                />
                <Form.Check
                  type="checkbox"
                  label="Evening"
                  checked={schedule.includes("Evening")}
                  onChange={() => handleScheduleChange("Evening")}
                />
              </Form.Group>

              {/* Format Filter */}
              <Form.Group>
                <Form.Label>Format</Form.Label>
                <Form.Check
                  type="checkbox"
                  label="In-Class"
                  checked={format.includes("In-Class")}
                  onChange={() => handleFormatChange("In-Class")}
                />
                <Form.Check
                  type="checkbox"
                  label="Online"
                  checked={format.includes("Online")}
                  onChange={() => handleFormatChange("Online")}
                />
              </Form.Group>

              {/* Clear Filters Button */}
              <Button variant="warning" onClick={clearFilters} className="my-4">
                Clear Filters
              </Button>
            </Form>
          </Col>

          {/* Cards Section */}
          <Col md={8}>
            {filteredCards.map((course) => (
             <div
             key={course.id}
             className="card-link"
             onClick={() => navigateToCourse(course.id)} // Call the navigateToCourse function with the course id
             onKeyDown={(e) => {
               if (e.key === "Enter") {
                 navigateToCourse(course.id);
               }
             }}
             role="button"
             tabIndex={0}
             style={{ cursor: "pointer" }}
           >
                <Card className="mb-4">
                  <div className="row">
                    <div className="col-md-4">
                      <Card.Img src={course.image} alt={course.topic} />
                    </div>
                    <div className="col-md-8">
                      <Card.Body>
                        <Card.Img>{course.Img}</Card.Img>
                        <Card.Title>{course.topic}</Card.Title>
                        <Card.Title>
                          <strong style={{ fontSize: "30px" }}>
                            {course.name}
                          </strong>
                        </Card.Title>
                        <Card.Text>{course.description}</Card.Text>
                        <Card.Text>{course.schedule}</Card.Text>
                      </Card.Body>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </Col>
        </Row>
      </div>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default CardList;
