import React, { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers,faLaptopFile,faChildReaching,faUserPlus } from "@fortawesome/free-solid-svg-icons";



const StatCounter = () => {
  useEffect(() => {
    // Get the DOM elements
    const happyClientsElement = document.getElementById('happyClients');
    const trainedProfessionalsElement = document.getElementById('trainedProfessionals');
    const placementsElement = document.getElementById('placements');
    const recommendElement = document.getElementById('recommend');

    // Set the initial count values
     let happyClientsCount = 0;
    let trainedProfessionalsCount = 1400;
    let placementsCount = 0;
    let recommendCount = 0;

    // Set the target count values
    const happyClientsTarget = 250;
    const trainedProfessionalsTarget = 1600;
    const placementsTarget = 80;
    const recommendTarget = 95;

    // Function to update the count values and display them
    function updateCounts() {
      happyClientsElement.textContent = happyClientsCount + ' +';
      trainedProfessionalsElement.textContent = trainedProfessionalsCount + ' +';
      placementsElement.textContent = placementsCount + ' %';
      recommendElement.textContent = recommendCount + ' %';
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
      if (recommendCount < recommendTarget) {
        recommendCount++;
      }

      updateCounts();

      // Stop the interval if all targets are reached
      if (happyClientsCount === happyClientsTarget &&
        trainedProfessionalsCount === trainedProfessionalsTarget &&
        placementsCount === placementsTarget &&
          recommendCount === recommendTarget
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
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <div className="flex flex-wrap p-4">
            <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
              <div className="bg-white border-r border-gray-200 p-2 rounded shadow-md h-full flex flex-col">
                <div className="text-center flex-grow">
                  <FontAwesomeIcon icon={faUsers} className="text-yellow-500 text-5xl mb-3 pt-4"/>
                  <p className="text-blue-900 text-5xl font-bold p-2" id="trainedProfessionals">0</p>
                  <h2 className="text-gray-600 text-2xl">learners</h2>
                  <p className="text-neutral-500 pb-4">Successfully Completed Bootcamp</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
              <div className="bg-white p-4 rounded shadow-md h-full flex flex-col">
                <div className="text-center flex-grow">
                  <FontAwesomeIcon icon={faLaptopFile} className="text-yellow-500 text-5xl mb-3 pt-4"/>
                  <p className="text-blue-900 text-5xl font-bold p-2" id="placements">0</p>
                  <h2 className="text-gray-600 text-2xl">Students</h2>
                  <p className="text-neutral-500 pb-4">Got Hired In First Six Months of Completion At Fortune 500</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
              <div className="bg-white border-l border-gray-200 p-4 rounded shadow-md h-full flex flex-col">
                <div className="text-center flex-grow">
                  <FontAwesomeIcon icon={faChildReaching} className="text-yellow-500 text-5xl mb-3 pt-4"/>
                  <p className="text-blue-900 text-5xl font-bold p-2" id="happyClients">0</p>
                  <h2 className="text-gray-600 text-2xl">Early Learners</h2>
                  <p className="text-neutral-500 pb-4">Successfully Completed Our Early Learners Program</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/4 px-4">
              <div className="bg-white border-l border-gray-200 p-4 rounded shadow-md h-full flex flex-col">
                <div className="text-center flex-grow">
                  <FontAwesomeIcon icon={faUserPlus} className="text-yellow-500 text-5xl mb-3 pt-4"/>
                  <p className="text-blue-900 text-5xl font-bold p-2" id="recommend">0</p>
                  <h2 className="text-gray-600 text-2xl">Student Recommend</h2>
                  <p className="text-neutral-500 pb-4">Our QA Automation And Fullstack Bootcamps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default StatCounter;
