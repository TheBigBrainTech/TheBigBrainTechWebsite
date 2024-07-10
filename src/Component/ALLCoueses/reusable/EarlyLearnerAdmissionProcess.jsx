import React from 'react';
import { motion } from 'framer-motion';
import { faChild, faClipboardCheck, faLaptop, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from "react-router-dom";

const EarlyLearnersAdmissionProcess = () => {
    return (
        <> <div className="container mx-auto py-8">
            <motion.div
                className="bg-white p-6 rounded-lg shadow-lg h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex flex-col justify-center items-center text-center">
                    <h3 className="text-2xl font-bold mb-3">
                        How to apply to our Kids Coding Bootcamp
                    </h3>
                    <h5 className="text-lg font-medium mb-6">
                        Our admission process is easy and fun! Start your coding journey now!
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="flex flex-col items-center">
                            <div
                                className="bg-yellow-500 rounded-full w-12 h-12 flex justify-center items-center text-white">
                                <FontAwesomeIcon icon={faChild} size="lg"/>
                            </div>
                            <h4 className="text-lg font-bold mt-4">No prerequisites</h4>
                            <p className="text-gray-700 mt-2 text-center">
                                Our course is perfect for beginners. All you need is enthusiasm and a love for learning!
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div
                                className="bg-yellow-500 rounded-full w-12 h-12 flex justify-center items-center text-white">
                                <FontAwesomeIcon icon={faClipboardCheck} size="lg"/>
                            </div>
                            <h4 className="text-lg font-bold mt-4">
                                Simple application form
                            </h4>
                            <p className="text-gray-700 mt-2 text-center">
                                Fill out our easy online application form to get started.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div
                                className="bg-yellow-500 rounded-full w-12 h-12 flex justify-center items-center text-white">
                                <FontAwesomeIcon icon={faUserFriends} size="lg"/>
                            </div>
                            <h4 className="text-lg font-bold mt-4">
                                Meet our team
                            </h4>
                            <p className="text-gray-700 mt-2 text-center">
                                Join a fun video call with our team to learn more about the bootcamp.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div
                                className="bg-yellow-500 rounded-full w-12 h-12 flex justify-center items-center text-white">
                                <FontAwesomeIcon icon={faLaptop} size="lg"/>
                            </div>
                            <h4 className="text-lg font-bold mt-4">
                                Start learning
                            </h4>
                            <p className="text-gray-700 mt-2 text-center">
                                Once enrolled, jump right into our exciting and engaging coding lessons!
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-500 pt-4"><sup>*</sup>prerequisite for Early Learner 2 is Early learner 1 and for Early Learner 3 is Early learner 2
                        </p>
                        <p className="text-gray-500">Early Learners must be between age of 13 and 18.
                        </p>
                    </div>
                    <Link to="/Programs/EarlyLearners/Basic/enroll">
                    <motion.button
                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded mt-6"
                        whileHover={{scale: 1.1}}
                    >
                        Apply Now
                    </motion.button>
                    </Link>
                </div>
            </motion.div>
        </div>
        </>
    )
};
export default EarlyLearnersAdmissionProcess;
