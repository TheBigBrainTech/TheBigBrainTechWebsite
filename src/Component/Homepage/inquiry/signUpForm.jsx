import React, { useState } from 'react';
import {
    CitySelect,
    CountrySelect,
    StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import PropTypes from "prop-types";

const SignupForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        contact: '',
        country: '',
        state: '',
        city: '',
        date: '',
        time: '',
        about: '',
    });

    const [countryid, setCountryid] = useState(0);
    const [stateid, setstateid] = useState(0);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleCountryChange = (selectedOption) => {
        setFormData((prevFormData) => ({ ...prevFormData, country: selectedOption.name }));
        setCountryid(selectedOption.id);
    };

    const handleStateChange = (selectedOption) => {
        setFormData((prevFormData) => ({ ...prevFormData, state: selectedOption.name }));
        setstateid(selectedOption.id);
    };

    const handleCityChange = (selectedOption) => {
        setFormData((prevFormData) => ({ ...prevFormData, city: selectedOption.name }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Make a POST request to the backend server with form data
        fetch('https://6hcrofrruk.execute-api.us-east-1.amazonaws.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (response.ok) {
                    console.log('Form submitted successfully!');
                    alert('Form submitted successfully!');
                    onClose(); // Close the modal on successful submit
                } else {
                    console.error('Failed to submit the form.');
                    alert('Failed to submit the form. Please try again later.');
                }
            })
            .catch((error) => {
                console.error(error);
                alert('Failed to submit the form. Please try again later.');
            });
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 overflow-auto">
            <div className="max-w-screen-lg w-full bg-white shadow-md rounded-lg p-6 mt-12 relative">
                <h2 className="text-2xl font-bold mb-6">Signup for a call from our recruiter</h2>
                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row flex-wrap">
                    <div className="mb-4 w-full md:w-1/2 px-2">
                        <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">Full Name:</label>
                        <input
                            type="text"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            id="fullname"
                            name="fullname"
                            required
                            value={formData.fullname}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4 w-full md:w-1/2 px-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                        <input
                            type="email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4 w-full md:w-1/2 px-2">
                        <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact Number:</label>
                        <input
                            type="tel"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            id="contact"
                            name="contact"
                            required
                            value={formData.contact}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4 w-full md:w-1/2 px-2">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country:</label>
                        <CountrySelect
                            onChange={(e) => handleCountryChange(e)}
                            placeHolder="Select Country"
                        />
                    </div>
                    <div className="mb-4 w-full md:w-1/2 px-2">
                        <label htmlFor="state" className="block text-sm font-medium text-gray-700">State:</label>
                        <StateSelect
                            countryid={countryid}
                            onChange={(e) => handleStateChange(e)}
                            placeHolder="Select State"
                        />
                    </div>
                    <div className="mb-4 w-full md:w-1/2 px-2">
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">City:</label>
                        <CitySelect
                            countryid={countryid}
                            stateid={stateid}
                            onChange={(e) => handleCityChange(e)}
                            placeHolder="Select City"
                        />
                    </div>
                    <div className="mb-4 w-full md:w-1/2 px-2">
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Preferred Date:</label>
                        <input
                            type="date"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            id="date"
                            name="date"
                            required
                            value={formData.date}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4 w-full md:w-1/2 px-2">
                        <label htmlFor="time" className="block text-sm font-medium text-gray-700">Preferred Time:</label>
                        <select
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            id="time"
                            name="time"
                            required
                            value={formData.time}
                            onChange={handleChange}
                        >
                            <option value="" disabled>Select Preferred Time</option>
                            <option value="11:00 AM">11:00 AM</option>
                            <option value="11:30 AM">11:30 AM</option>
                            <option value="12:00 PM">12:00 PM</option>
                            <option value="12:30 PM">12:30 PM</option>
                            <option value="1:00 PM">1:00 PM</option>
                            <option value="1:30 PM">1:30 PM</option>
                            <option value="2:00 PM">2:00 PM</option>
                            <option value="2:30 PM">2:30 PM</option>
                            <option value="3:00 PM">3:00 PM</option>
                            <option value="3:30 PM">3:30 PM</option>
                            <option value="4:00 PM">4:00 PM</option>
                        </select>
                    </div>
                    <div className="mb-4 w-full px-2">
                        <label htmlFor="about" className="block text-sm font-medium text-gray-700">Tell us something about yourself:</label>
                        <textarea
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            id="about"
                            name="about"
                            rows="5"
                            value={formData.about}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div className="text-center w-full px-2">
                        <button type="submit" className="btn btn-primary my-3 bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
                        <button type="button" className="btn btn-secondary my-3 bg-red-500 text-white py-2 px-4 rounded ml-2" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

SignupForm.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default SignupForm;
