import React, { useState } from "react";
import PropTypes from 'prop-types';
import { motion } from "framer-motion";
import axios from 'axios';

const CoursePacketDownloadForm = ({ isOpen, onClose, downloadUrl }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: ''
    });

    const [formErrors, setFormErrors] = useState({});

    const validate = () => {
        const errors = {};
        if (!formData.fullName) errors.fullName = "Full Name is required";
        if (!formData.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email address is invalid";
        }
        if (!formData.phoneNumber) errors.phoneNumber = "Phone number is required";
        return errors;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length === 0) {
            try {
                // Send data to the backend API (which will handle saving to DynamoDB and sending email)
                await axios.post('https://rt056eege6.execute-api.us-east-1.amazonaws.com/Prod/CoursePacketDownload', formData);

                // Trigger file download
                window.location.href = downloadUrl;

                // Reset form
                setFormData({ fullName: '', email: '', phoneNumber: '' });
                onClose();
            } catch (error) {
                console.error('Form submission error:', error);
                setFormErrors({ apiError: 'Failed to submit the form. Please try again.' });
            }
        } else {
            setFormErrors(errors);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <motion.div
                className="bg-white p-8 rounded-md"
                initial={{scale: 0}}
                animate={{scale: 1}}
                exit={{scale: 0}}
            >
                <h2 className="text-2xl mb-4 text-gray-600">Download Course Brochure</h2>
                <p className="text-gray-500 pb-5">Tell us a little about you — and we’ll get in touch with more
                    info.</p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="fullName" className="block text-gray-700">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="mt-1 p-2 border w-full"
                            placeholder="Full Name"
                        />
                        {formErrors.fullName && <p className="text-red-500 text-sm">{formErrors.fullName}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 p-2 border w-full"
                            placeholder="Email Address"
                        />
                        {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phoneNumber" className="block text-gray-700">Phone Number</label>
                        <input
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="mt-1 p-2 border w-full"
                            placeholder="+1"
                        />
                        {formErrors.phoneNumber && <p className="text-red-500 text-sm">{formErrors.phoneNumber}</p>}
                    </div>
                    <div className="flex justify-center">
                        <button type="submit"
                                className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-400 mr-4">Download
                        </button>
                        <button type="button" className="bg-red-500 text-white py-2 px-4 rounded mr-4 hover:bg-red-700"
                                onClick={onClose}>Cancel
                        </button>
                    </div>
                    {formErrors.apiError && <p className="text-red-500 text-sm mt-4">{formErrors.apiError}</p>}
                    <p className="text-gray-400 pt-3">
                        <sup>*</sup>By submitting this form, you agree to receive communications related to courses at
                        The BigBrain Tech.<br/>
                        I have read and acknowledge The BigBrain Tech&apos;s <a href="/Privacy"
                                                                                className="text-blue-400 text-decoration-line: underline">Privacy
                        Policy</a> and <a href="/Terms" className="text-blue-400 text-decoration-line: underline">Terms
                        of Service</a>.<br/>
                        Communication frequency varies. Unsubscribe to opt-out from marketing E-mails.
                    </p>
                </form>
            </motion.div>
        </div>
    );
};

CoursePacketDownloadForm.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    downloadUrl: PropTypes.string.isRequired,
};

export default CoursePacketDownloadForm;
