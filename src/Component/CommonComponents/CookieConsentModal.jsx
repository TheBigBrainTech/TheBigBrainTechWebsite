import React from 'react';
import PropTypes from 'prop-types';

const CookieConsentModal = ({ onAccept, onAcceptRequired, onClose }) => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg z-50">
            <div>
                <p className="text-sm">This site uses cookies and other technologies to analyze traffic, personalize content and ads, provide social media features, record consents and interactions, and enhance user experience.</p>
                <p> By using this site, you consent to these terms as further described in our Privacy Policy.</p>
            </div>
            <div className="flex space-x-2">
                <button onClick={onAccept} className="bg-yellow-500 text-white py-1 px-3 rounded">Accept All Cookies</button>
                <button onClick={onAcceptRequired} className="bg-yellow-500 text-white py-1 px-3 rounded">Accept Required Cookies</button>
                <button onClick={onClose} className="bg-gray-500 text-white py-1 px-3 rounded">Close</button>
            </div>
        </div>
    );
};

CookieConsentModal.propTypes = {
    onAccept: PropTypes.func.isRequired,
    onAcceptRequired: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default CookieConsentModal;
