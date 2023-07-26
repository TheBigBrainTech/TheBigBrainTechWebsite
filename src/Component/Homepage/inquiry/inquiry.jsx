import React, { useState } from 'react';
import SignupForm from './signUpForm'; // Assuming the SignupForm component is in a separate file

const ContactSection = () => {
  const [showForm, setShowForm] = useState(false);

  const handleJoinWebinarClick = () => {
    setShowForm(true); // Set the showForm state to true to render the SignupForm
  };

  return (
    <div className="container">
      <span className="text-center text-dark p-4">
        <h1>Have Questions?</h1>
        <h6>
          Give us a call at <b><u>(703)-734-6021</u></b>
        </h6>
      </span>
      <div className="row align-items-center">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body text-center">
              <div className="d-flex justify-content-center mb-3">
                <span className="info-box">
                  <i className="fa-solid fa-circle-info fa-3x" style={{ color: '#007bff' }}></i>
                </span>
              </div>
              <h4 className="info-title pt-3">Online Info Session</h4>
              <div className="info-icon-text">
                <i className="fa-solid fa-check"></i>
                <p>Get Recommendations</p>
              </div>
              <div className="info-icon-text">
                <i className="fa-solid fa-check"></i>
                <p>See What You Can Get</p>
              </div>
              <div className="info-icon-text">
                <i className="fa-solid fa-check"></i>
                <p>Chat with Instructor</p>
              </div>
              <div className="text-center align-items-center pb-4">
                <button className="btn btn-md btn-warning" onClick={handleJoinWebinarClick}>Join for webinar</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body text-center">
              <div className="d-flex justify-content-center mb-3">
                <span className="info-box">
                  <i className="fa-solid fa-circle-question fa-3x" style={{ color: '#007bff' }}></i>
                </span>
              </div>
              <h4 className="info-title pt-3">Schedule an appointment</h4>
              <div className="info-icon-text">
                <i className="fa-solid fa-check"></i>
                <p>Chat with our recruiter</p>
              </div>
              <div className="info-icon-text">
                <i className="fa-solid fa-check"></i>
                <p>See how bootcamps and placements work</p>
              </div>
              <div className="info-icon-text">
                <i className="fa-solid fa-check"></i>
                <p>Talk about Financial options</p>
              </div>
              <div className="text-center align-items-center pb-4">
                <a href='/' className="btn btn-md btn-warning">Schedule a call</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showForm && (
        <div className="popup">
          <div className="popup-content">
            <SignupForm />
            <button className="close-btn" onClick={() => setShowForm(false)}><i className="fa-solid fa-xmark" style={{color:"#ff0000"}}></i></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactSection;
