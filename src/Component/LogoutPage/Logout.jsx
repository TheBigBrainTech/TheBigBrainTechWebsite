import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Navigation from '../Homepage/Navbar/Navbar';

function Logout() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  // Redirect to the homepage after the countdown reaches 0
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/"); // Redirect to the homepage
    }, countdown * 1000); // Convert seconds to milliseconds

    return () => clearTimeout(timeoutId);
  }, [countdown, navigate]);

  useEffect(() => {
    // Update the countdown every second
    const intervalId = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
        <Navigation />
 <Container className="mt-5 text-center">
      <h2>Thank You</h2>
      <p>You have been successfully logged out.</p>
      <p>
        Redirection to the homepage in {countdown}{" "}
        {countdown === 1 ? "second" : "seconds"}...
      </p>
    </Container>
    </div>
   
  );
}

export default Logout;
