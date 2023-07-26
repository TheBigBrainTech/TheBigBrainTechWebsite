import React, { useState } from 'react';


const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    contact: '',
    city: '',
    state: '',
    date: '',
    time: '',
    about: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

const handleSubmit = (event) => {
    event.preventDefault();

    // Make a POST request to the backend server with form data
    fetch('http://localhost:3035/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Form submitted successfully!');
          // Optionally, you can display a success message to the user
          alert('Form submitted successfully!');
        } else {
          console.error('Failed to submit the form.');
          // Display an error message to the user if the email sending fails
          alert('Failed to submit the form. Please try again later.');
        }
      })
      .catch((error) => {
        console.error(error);
        // Display an error message to the user if there is a network error
        alert('Failed to submit the form. Please try again later.');
      });
  };

//   // Implement the sendEmail function here if required
//   const sendEmail = (formDataObject) => {
//     // Your implementation of sending the email here
//     // You can call an API or use other methods to handle email sending
//     console.log('Sending email...', formDataObject);
//   };

  return (
    <div className="container">
      <h2>Signup for a call from our recruiter</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullname">Full Name:</label>
          <input
            type="text"
            className="form-control"
            id="fullname"
            name="fullname"
            required
            value={formData.fullname}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact Number:</label>
          <input
            type="tel"
            className="form-control"
            id="contact"
            name="contact"
            required
            value={formData.contact}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            required
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <select
            className="form-control"
            id="state"
            name="state"
            required
            value={formData.state}
            onChange={handleChange}
          >
            <option value="" selected disabled>Select State</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
	<option value="AR">Arkansas</option>
	<option value="CA">California</option>
	<option value="CO">Colorado</option>
	<option value="CT">Connecticut</option>
	<option value="DE">Delaware</option>
	<option value="DC">District Of Columbia</option>
	<option value="FL">Florida</option>
	<option value="GA">Georgia</option>
	<option value="HI">Hawaii</option>
	<option value="ID">Idaho</option>
	<option value="IL">Illinois</option>
	<option value="IN">Indiana</option>
	<option value="IA">Iowa</option>
	<option value="KS">Kansas</option>
	<option value="KY">Kentucky</option>
	<option value="LA">Louisiana</option>
	<option value="ME">Maine</option>
	<option value="MD">Maryland</option>
	<option value="MA">Massachusetts</option>
	<option value="MI">Michigan</option>
	<option value="MN">Minnesota</option>
	<option value="MS">Mississippi</option>
	<option value="MO">Missouri</option>
	<option value="MT">Montana</option>
	<option value="NE">Nebraska</option>
	<option value="NV">Nevada</option>
	<option value="NH">New Hampshire</option>
	<option value="NJ">New Jersey</option>
	<option value="NM">New Mexico</option>
	<option value="NY">New York</option>
	<option value="NC">North Carolina</option>
	<option value="ND">North Dakota</option>
	<option value="OH">Ohio</option>
	<option value="OK">Oklahoma</option>
	<option value="OR">Oregon</option>
	<option value="PA">Pennsylvania</option>
	<option value="RI">Rhode Island</option>
	<option value="SC">South Carolina</option>
	<option value="SD">South Dakota</option>
	<option value="TN">Tennessee</option>
	<option value="TX">Texas</option>
	<option value="UT">Utah</option>
	<option value="VT">Vermont</option>
	<option value="VA">Virginia</option>
	<option value="WA">Washington</option>
	<option value="WV">West Virginia</option>
	<option value="WI">Wisconsin</option>
	<option value="WY">Wyoming</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="date">Preferred Date:</label>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            required
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Preferred Time:</label>
          <select
            className="form-control"
            id="time"
            name="time"
            required
            value={formData.time}
            onChange={handleChange}
          >
            <option value="" selected disabled>Select Preferred Time</option>
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
        <div className="form-group">
          <label htmlFor="about">Tell us something about yourself:</label>
          <textarea
            className="form-control"
            id="about"
            name="about"
            rows="5"
            value={formData.about}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className=' text-center '>
        <button type="submit" className="btn btn-primary my-3">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
