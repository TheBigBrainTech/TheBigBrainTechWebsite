import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure to import Bootstrap CSS

const FullWidthCard = () => {
  return (
    <div className="container">
        <div className="card h-100 p-4">
      <div className="d-flex flex-column justify-content-center align-items-center">
      <h3 className="card-title">
                How to apply to our Web Development bootcamp
              </h3>
              <h5 className="card-subtitle mb-3">
                Our admission process is beginner-friendly and will give you a
                taste of our course. Start now!
              </h5>
        <div className="row">
          <div className="col-md-3 d-flex flex-column align-items-center">
            <div
              style={{
                backgroundColor: "#FDB120",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
            >
              <h3 className="number my-1">1</h3>
            </div>
            <h4>No prerequisites</h4>
            <p>
              The Web Development course is beginner-friendly, with no
              prerequisites required. What counts for us is that you&apos;re
              motivated to start your new tech journey.
            </p>
          </div>
          <div className="col-md-3 d-flex flex-column align-items-center">
            <div
              style={{
                backgroundColor: "#FDB120",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
            >
              <h3 className="number my-1">2</h3>
            </div>
            <h4>Book an interview with our enrolment advisor</h4>

            <p>
              When you apply, we&apos;ll get back to you to schedule a 30
              minute video interview. We&apos;ll talk about your professional
              background and your motivation.
            </p>
          </div>
          <div className="col-md-3 d-flex flex-column align-items-center">
            <div
              style={{
                backgroundColor: "#FDB120",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
            >
              <h3 className="number my-1">3</h3>
            </div>
            <h4>Pass our technical quiz</h4>

            <p>
              You will take a technical quiz to assess your coding knowledge
              and your ability to learn.
            </p>
          </div>
          <div className="col-md-3 d-flex flex-column align-items-center">
            <div
              style={{
                backgroundColor: "#FDB120",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
            >
              <h3 className="number my-1">4</h3>
            </div>
            <h4>Payment options & prepwork</h4>

            <p>
              The last step will consist of finding the most suitable
              financing option for you. Then, you&apos;ll jump into the
              prepwork which consists of 40h training.
            </p>
          </div>
        </div>
        <button className="btn btn-warning mt-3">Apply</button>
      </div>
      </div>
    </div>
  );
};

export default FullWidthCard;
