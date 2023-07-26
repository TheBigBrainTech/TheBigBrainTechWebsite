import React from "react";
import PropTypes from 'prop-types';


const ThankYouPopup = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <p>Thank you for your application. Our recruiting team will contact you shortly.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

ThankYouPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ThankYouPopup;
