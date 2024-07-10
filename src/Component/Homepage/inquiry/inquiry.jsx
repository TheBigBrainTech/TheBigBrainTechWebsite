import React, { useState } from 'react';
import SignupForm from './signUpForm'

const ContactSection = () => {
  const [showForm, setShowForm] = useState(false);

  const handleJoinWebinarClick = (e) => {
    e.preventDefault(); // Prevent the default action
    setShowForm(true); // Show the form
  };

  const handleCloseForm = () => {
    setShowForm(false); // Hide the form
  };

  return (
      <div className="container-flex mx-auto p-4 bg-gray-200">
        <div className="text-center text-secondary p-4">
          <h1>Have Questions?</h1>
        </div>
        <div className="flex justify-center">
          <div className="w-full md:w-1/2 mb-4  hover:scale-105">
            <div className="bg-white shadow-2xl rounded-lg p-4 ">
              <div className="text-center mb-3">
                            <span className="info-box">
                                <i className="fa-solid fa-circle-question fa-3x" style={{ color: '#007bff' }}></i>
                            </span>
              </div>
              <h4 className="info-title text-center pt-3">Schedule an appointment</h4>
              <div className="info-icon-text flex items-center justify-center my-2">
                <i className="fa-solid fa-check text-green-500 mr-2"></i>
                <p>Chat With Our Advisor</p>
              </div>
              <div className="info-icon-text flex items-center justify-center my-2">
                <i className="fa-solid fa-check text-green-500 mr-2"></i>
                <p>Know how bootcamps and placements Assistance work</p>
              </div>
              <div className="info-icon-text flex items-center justify-center my-2">
                <i className="fa-solid fa-check text-green-500 mr-2"></i>
                <p>Chat with Instructor</p>
              </div>
              <div className="info-icon-text flex items-center justify-center my-2">
                <i className="fa-solid fa-check text-green-500 mr-2"></i>
                <p>Talk about Financial options</p>
              </div>
              <div className="text-center pb-4">
                <a href="/" className="btn btn-md btn-warning bg-yellow-500 text-white py-2 px-4 rounded hover:bg-amber-300" onClick={handleJoinWebinarClick}>Schedule a call</a>
              </div>
            </div>
          </div>
        </div>
        {showForm && <SignupForm onClose={handleCloseForm} />}
      </div>
  );
};

export default ContactSection;
