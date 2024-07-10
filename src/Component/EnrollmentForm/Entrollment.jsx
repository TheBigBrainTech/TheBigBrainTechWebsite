import React, { useState } from 'react';

const EnrollmentForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        preferredBootcamp: '',
        experienceInIT: 'None',
        proficiencyInLanguages: 'None',
        trainingPurpose: '',
        howDidYouHear: '',
        preferredSchedule: '',
        comments: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add form validation and submission logic here
        console.log(formData);
        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            phoneNumber: '',
            preferredBootcamp: '',
            experienceInIT: 'None',
            proficiencyInLanguages: 'None',
            trainingPurpose: '',
            howDidYouHear: '',
            preferredSchedule: '',
            comments: '',
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                    Contact Number
                </label>
                <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="preferredBootcamp" className="block text-sm font-medium text-gray-700">
                    Preferred Bootcamp
                </label>
                <select
                    name="preferredBootcamp"
                    id="preferredBootcamp"
                    value={formData.preferredBootcamp}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                >
                    <option value="">Select a Bootcamp</option>
                    <option value="Frontend Developer">Frontend Developer</option>
                    <option value="Fullstack Developer">Fullstack Developer</option>
                    <option value="QA Automation Engineer">QA Automation Engineer</option>
                    <option value="Early Learner 1">Early Learner 1</option>
                    <option value="Early Learner 2">Early Learner 2</option>
                    <option value="Early Learner 3">Early Learner 3</option>
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="experienceInIT" className="block text-sm font-medium text-gray-700">
                    Experience in IT
                </label>
                <select
                    name="experienceInIT"
                    id="experienceInIT"
                    value={formData.experienceInIT}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                >
                    <option value="None">None</option>
                    <option value="Basic">Basic</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="proficiencyInLanguages" className="block text-sm font-medium text-gray-700">
                    Proficiency in Programming Languages
                </label>
                <select
                    name="proficiencyInLanguages"
                    id="proficiencyInLanguages"
                    value={formData.proficiencyInLanguages}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                >
                    <option value="None">None</option>
                    <option value="Basic">Basic</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="trainingPurpose" className="block text-sm font-medium text-gray-700">
                    What do you want to achieve by taking this training?
                </label>
                <textarea
                    name="trainingPurpose"
                    id="trainingPurpose"
                    value={formData.trainingPurpose}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="howDidYouHear" className="block text-sm font-medium text-gray-700">
                    How did you hear about this training bootcamp?
                </label>
                <select
                    name="howDidYouHear"
                    id="howDidYouHear"
                    value={formData.howDidYouHear}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                >
                    <option value="">Select an option</option>
                    <option value="Online Advertisement">Online Advertisement</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Word of Mouth">Word of Mouth</option>
                    <option value="Internet Search">Word of Mouth</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="preferredSchedule" className="block text-sm font-medium text-gray-700">
                    Preferred Schedule
                </label>
                <select
                    name="preferredSchedule"
                    id="preferredSchedule"
                    value={formData.preferredSchedule}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                >
                    <option value="">Select a preferred schedule</option>
                    <option value="Morning">Morning</option>
                    <option value="Evening">Evening</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Weekend">Weekend</option>
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
                    Additional Comments
                </label>
                <textarea
                    name="comments"
                    id="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
            </div>

            <div className="p-3">
                <button type="submit" className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-400">
                    Submit
                </button>
            </div>
        </form>
    );
};

export default EnrollmentForm;
