import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const EarlyLearnersEnrollment = () => {
    const [formData, setFormData] = useState({
        studentName: '',
        studentEmail: '',
        studentPhone: '',
        dateOfBirth: '',
        gender: '',
        typeOfSchool: '',
        schoolName: '',
        preferredBootcamp: '',
        experienceInIT: 'None',
        proficiencyInLanguages: 'None',
        trainingPurpose: '',
        howDidYouHear: '',
        preferredSchedule: '',
        comments: '',
        parentFirstName: '',
        parentLastName: '',
        parentEmail: '',
        parentPhone: '',
        consent: false,
    });

    const [showDialog, setShowDialog] = useState(false);

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        setFormData({...formData, [name]: type === 'checkbox' ? checked : value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            studentName: '',
            studentEmail: '',
            studentPhone: '',
            dateOfBirth: '',
            gender: '',
            typeOfSchool: '',
            schoolName: '',
            preferredBootcamp: '',
            experienceInIT: 'None',
            proficiencyInLanguages: 'None',
            trainingPurpose: '',
            howDidYouHear: '',
            preferredSchedule: '',
            comments: '',
            parentFirstName: '',
            parentLastName: '',
            parentEmail: '',
            parentPhone: '',
            consent: false,
        });
    };

    const handleCancel = () => {
        setShowDialog(true);
    };

    const handleDialogClose = () => {
        setShowDialog(false);
    };

    const navigate = useNavigate();

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-xl font-bold mb-4">Student Information</h2>
            <div className="mb-4">
                <label htmlFor="studentName" className="block text-sm font-medium text-gray-700">
                    Student Name
                </label>
                <input
                    type="text"
                    name="studentName"
                    id="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="studentEmail" className="block text-sm font-medium text-gray-700">
                    Student Email
                </label>
                <input
                    type="email"
                    name="studentEmail"
                    id="studentEmail"
                    value={formData.studentEmail}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="studentPhone" className="block text-sm font-medium text-gray-700">
                    Student Phone Number
                </label>
                <input
                    type="tel"
                    name="studentPhone"
                    id="studentPhone"
                    value={formData.studentPhone}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
                    Date of Birth
                </label>
                <input
                    type="date"
                    name="dateOfBirth"
                    id="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                    Gender
                </label>
                <select
                    name="gender"
                    id="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="typeOfSchool" className="block text-sm font-medium text-gray-700">
                    Type of School
                </label>
                <select
                    name="typeOfSchool"
                    id="typeOfSchool"
                    value={formData.typeOfSchool}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                >
                    <option value="">Select School Type</option>
                    <option value="Public">Public</option>
                    <option value="Private">Private</option>
                    <option value="Homeschool">Homeschool</option>
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="schoolName" className="block text-sm font-medium text-gray-700">
                    Name of the School
                </label>
                <input
                    type="text"
                    name="schoolName"
                    id="schoolName"
                    value={formData.schoolName}
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
                    <option value="Early Learners 1">Early Learners 1</option>
                    <option value="Early Learners 2">Early Learners 2</option>
                    <option value="Early Learners 3">Early Learners 3</option>
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="trainingPurpose" className="block text-sm font-medium text-gray-700">
                    Purpose of Taking Bootcamp
                </label>
                <textarea
                    name="trainingPurpose"
                    id="trainingPurpose"
                    value={formData.trainingPurpose}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="howDidYouHear" className="block text-sm font-medium text-gray-700">
                    How Did You Hear About Us?
                </label>
                <select
                    name="howDidYouHear"
                    id="howDidYouHear"
                    value={formData.howDidYouHear}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                >
                    <option value="">Select an option</option>
                    <option value="Online Advertisement">Online Advertisement</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Word of Mouth">Word of Mouth</option>
                    <option value="Internet Search">Internet Search</option>
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
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                >
                    <option value="">Select a preferred schedule</option>
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
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

            <h2 className="text-xl font-bold mb-4">Parent/Guardian Information</h2>
            <div className="mb-4">
                <label htmlFor="parentFirstName" className="block text-sm font-medium text-gray-700">
                    Parent/Guardian First Name
                </label>
                <input
                    type="text"
                    name="parentFirstName"
                    id="parentFirstName"
                    value={formData.parentFirstName}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="parentLastName" className="block text-sm font-medium text-gray-700">
                    Parent/Guardian Last Name
                </label>
                <input
                    type="text"
                    name="parentLastName"
                    id="parentLastName"
                    value={formData.parentLastName}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="parentEmail" className="block text-sm font-medium text-gray-700">
                    Parent/Guardian Email
                </label>
                <input
                    type="email"
                    name="parentEmail"
                    id="parentEmail"
                    value={formData.parentEmail}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="parentPhone" className="block text-sm font-medium text-gray-700">
                    Parent/Guardian Phone
                </label>
                <input
                    type="tel"
                    name="parentPhone"
                    id="parentPhone"
                    value={formData.parentPhone}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="consent" className="block text-sm font-medium text-gray-700">
                    Consent
                </label>
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        name="consent"
                        id="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        required
                        className="h-4 w-4 text-yellow-600 border-gray-300 rounded"
                    />
                    <label htmlFor="consent" className="ml-2 block text-sm text-gray-900">
                        I consent to my child enrolling in this bootcamp.
                    </label>
                </div>
            </div>

            <div className="p-3">
                <button type="button" onClick={handleCancel}
                        className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-400">
                    Cancel
                </button>
                <button type="button" className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-400 ml-4">
                    Make Payment
                </button>
            </div>

            {showDialog && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-md">
                        <h3 className="text-lg font-medium">Are you sure you want to cancel the application?</h3>
                        <div className="mt-4 flex justify-end">
                            <button onClick={handleDialogClose}
                                    className="bg-gray-300 text-gray-700 py-2 px-4 rounded mr-2">
                                No
                            </button>
                            <button onClick={() => navigate(-1)} className="bg-red-500 text-white py-2 px-4 rounded">
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </form>
    );
};

export default EarlyLearnersEnrollment;
