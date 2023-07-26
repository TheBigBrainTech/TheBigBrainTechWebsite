import React, { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup,faUsers,faLaptopFile } from "@fortawesome/free-solid-svg-icons";



const StatCounter = () => {
  useEffect(() => {
    // Get the DOM elements
    const happyClientsElement = document.getElementById('happyClients');
    const trainedProfessionalsElement = document.getElementById('trainedProfessionals');
    const placementsElement = document.getElementById('placements');

    // Set the initial count values
    let happyClientsCount = 0;
    let trainedProfessionalsCount = 0;
    let placementsCount = 0;

    // Set the target count values
    const happyClientsTarget = 50;
    const trainedProfessionalsTarget = 600;
    const placementsTarget = 400;

    // Function to update the count values and display them
    function updateCounts() {
      happyClientsElement.textContent = happyClientsCount + ' +';
      trainedProfessionalsElement.textContent = trainedProfessionalsCount + ' +';
      placementsElement.textContent = placementsCount + ' +';
    }

    // Increment the counts until the target values are reached
    function incrementCounts() {
      if (happyClientsCount < happyClientsTarget) {
        happyClientsCount++;
      }
      if (trainedProfessionalsCount < trainedProfessionalsTarget) {
        trainedProfessionalsCount++;
      }
      if (placementsCount < placementsTarget) {
        placementsCount++;
      }

      updateCounts();

      // Stop the interval if all targets are reached
      if (
        happyClientsCount === happyClientsTarget &&
        trainedProfessionalsCount === trainedProfessionalsTarget &&
        placementsCount === placementsTarget
      ) {
        clearInterval(intervalId);
      }
    }

    // Call incrementCounts every 10 milliseconds
    const intervalId = setInterval(incrementCounts, 10);

    // Clean up the interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array ensures the effect runs only once


  return (
    <div className="statCounter">
      <div className="container">
        <div className="row p-4">
          <div className="col-md-4">
            <div className="counter border-end border-md">
              <div className="stat text-center">
              <FontAwesomeIcon icon={faPeopleGroup} className='fa-4x p-3' style={{ color: '#ffc109' }} /> 
                <h2 className="countText text-secondary">Happy Clients</h2>
                <p className="happyClients text-primary" style={{fontSize:'40px'}}  id="happyClients">0</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="counter border-end border-md">
              <div className="stat text-center">
              <FontAwesomeIcon icon={faUsers} className='fa-4x p-3' style={{ color: '#ffc109' }} />
                <h2 className="countText text-secondary">Trained Professionals</h2>
                <p className="trainedProfessionals text-primary" style={{fontSize:'40px'}}  id="trainedProfessionals">0</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="counter">
              <div className="stat text-center">
              <FontAwesomeIcon icon={faLaptopFile} className='fa-4x p-3' style={{ color: '#ffc109' }} />
                <h2 className="countText text-secondary">Student Placements</h2>
                <p className="placements text-primary" style={{fontSize:'40px'}} id="placements">0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCounter;
