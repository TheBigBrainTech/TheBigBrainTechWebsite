import React from "react";
import { Button } from "react-bootstrap";

const BootcampTab = () => {
  return (
    <div className="CoursesTab" id="CoursesTab">
      <div className="container">
        <div className="text-center text-secondary pt-3">
          <h1>Discover Our Bootcamps</h1>
          <p>
            Our bootcamps are curated for all age groups not all bootcamps are
            equal
          </p>
        </div>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-80">
              <i
                className="fa-solid fa-laptop-code mt-4"
                style={{ color: "#007bff" }}
                id="laptopCode"
              ></i>
              <div className="card-body text-center courseText">
                <h5 className="card-title text-dark">Full Stack Development</h5>
                <p className="card-text">3-Stack coding bootcamp</p>
                <hr />
                <h4>Online</h4>
                <p>16 Weeks | Mon-Fri | 30 Hrs/Week</p>
                <hr />
                <h4>In-Class</h4>
                <p>16 Weeks | Mon-Fri | 30 Hrs/Week</p>
                <div className="text-center p-3">
                  <Button variant="warning">Explore</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-80">
              <i
                className="fa-brands fa-react mt-4"
                style={{ color: "#007bff" }}
                id="laptopCode"
              ></i>
              <div className="card-body text-center">
                <h5 className="card-title text-dark">Front End Development</h5>
                <p className="card-text">React Coding bootcamp</p>
                <hr />
                <h4>Online</h4>
                <p>14 Weeks | Mon-Fri | 30 Hrs/Week</p>
                <hr />
                <h4>In-Class</h4>
                <p>14 Weeks | Mon-Fri | 30 Hrs/Week</p>
                <div className="text-center p-3">
                  <Button variant="warning">Explore</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-80">
              <i
                className="fa-solid fa-robot mt-4"
                style={{ color: "#007bff" }}
                id="laptopCode"
              ></i>
              <div className="card-body text-center">
                <h5 className="card-title text-dark">Quality Assurance Automation</h5>
                <p className="card-text">Automation Tester in 8 Weeks</p>
                <hr />
                <h4>Online</h4>
                <p>8 Weeks | Mon-Fri | 30 Hrs/Week</p>
                <hr />
                <h4>In-Class</h4>
                <p>8 Weeks | Mon-Fri | 30 Hrs/Week</p>
                <div className="text-center p-3">
                  <Button variant="warning">Explore</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-80">
              <i
                className="fa-solid fa-chart-column mt-4"
                style={{ color: "#007bff" }}
                id="laptopCode"
              ></i>
              <div className="card-body text-center">
                <h5 className="card-title text-dark">Business Analyst</h5>
                <p className="card-text">
                  Get trained from Scrum Certified Instructor
                </p>
                <hr />
                <h4>Online</h4>
                <p>4 Weeks | Mon-Fri | 12 Hrs/Week</p>
                <div className="text-center p-3">
                  <Button variant="warning">Explore</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-80">
              <i
                className="fa-brands fa-connectdevelop mt-4"
                style={{ color: "#007bff" }}
                id="laptopCode"
              ></i>
              <div className="card-body text-center">
                <h5 className="card-title text-dark">Dev Ops</h5>
                <p className="card-text">DevOps 8 Weeks</p>
                <hr />
                <h4>Online</h4>
                <p>8 Weeks | Mon-Fri | 30 Hrs/Week</p>
                <div className="text-center p-3">
                  <Button variant="warning">Explore</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-80">
              <i
                className="fa-solid fa-database mt-4"
                style={{ color: "#007bff" }}
                id="laptopCode"
              ></i>
              <div className="card-body text-center">
                <h5 className="card-title text-dark">Data Science</h5>
                <p className="card-text">Automation Tester in 8 Weeks</p>
                <hr />
                <h4>Online</h4>
                <p>8 Weeks | Mon-Fri | 30 Hrs/Week</p>
                <div className="text-center p-3">
                  <Button variant="warning">Explore</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BootcampTab;
