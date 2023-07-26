import React, { useState } from "react";
import manImage from "../../../Assets/images/Hero/HeroOverlay.png";
import backGround from "../../../Assets/images/Hero/Hero_Image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";


function HeroImage() {
  const [isOpen, setIsOpen] = useState(false);  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");

  const handleSubmit = () => {
// Make a POST request to the backend server to save 
// the user data
    
fetch('http://localhost:3030/api/PostCourseBrochureDownload', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name, email, telephone }),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error('Failed to download. Please try again later.');
    }
    alert('Successfully download!');
    setEmail('');
    setTelephone('');
    setName('');
  })
  .catch((error) => {
    console.error(error);
    alert('Enter all information. Please try again.');
  });

    // After submission, close the window
    setIsOpen(false);

    // Simulate file download
    const fileUrl = "https://example.com/brochure.pdf";
    window.open(fileUrl, "_blank");
  };

  return (
    <div
      className="Hero"
      style={{
        backgroundImage: `url(${backGround})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "800px",
      }}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <img
              className="HeroOverlay"
              src={manImage}
              alt="ManImage"
              style={{ height: "550px", marginLeft: "200px", marginTop: "100px" }}
            />
          </div>
          <div className="col-md-6" style={{ marginTop: "300px" }}>
            <span className="text-center hero_text text-light">
              <h1>Launch Your Career in Tech</h1>
              <h3>Master digital skills to enhance your career</h3>
            </span>

            <div className="text-center mx-2">
              <button
                type="button"
                className="btn btn-md btn-warning mx-2"
                onClick={() => setIsOpen(true)}
              >
                <FontAwesomeIcon icon={faDownload} />
                Free Course Brochure
              </button>
              <button
                type="button"
                className="btn btn-md btn-warning"
                onClick={() => setIsOpen(true)}
              >
                <FontAwesomeIcon icon={faDownload} />
                Free Placement Brochure
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="modal" style={{ display: "block", background: "rgba(0, 0, 0, 0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Enter Your Information</h5>
                <button type="button" className="close" onClick={() => setIsOpen(false)}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="tel">Telephone</label>
                    <input
                      type="tel"
                      className="form-control"
                      value={telephone}
                      onChange={(e) => setTelephone(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <input type="checkbox" required className="my-3" />
                    <p><sup>*</sup>Agree to the Terms & conditons</p>
                  </div>
                  <button type="submit" className="btn btn-primary my-4">
                    Download Now 
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HeroImage;
