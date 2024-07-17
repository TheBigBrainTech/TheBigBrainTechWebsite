import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Logo from '../../Assets/images/logo/BigBrainTechLogoBlack.png';

const WelcomeModal = ({ onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
            <div className="bg-white rounded-lg p-6 shadow-lg">
                <img src={Logo} alt="LogoImage" className="LogoImage" style={{ height: "50px", width: "100px" }} />
                <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact Number:</label>
                        <input
                            type="tel"
                            id="contact"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <p>By providing your email, you confirm you have read and acknowledge The Bigbrain Tech&apos;s Privacy Policy and Terms of Service.<br></br>
                            This site uses cookies and the Google Privacy Policy and Google Terms of Service apply. SMS message and data rates may apply.</p>
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className="bg-yellow-500 text-white py-2 px-4 rounded">Submit</button>
                        <button type="button" className="bg-red-500 text-white py-2 px-4 rounded ml-2" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

WelcomeModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default WelcomeModal;
