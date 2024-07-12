import React, { useState } from "react";
import Navigation from "../../Homepage/Navbar/Navbar";
import Footer from "../../Homepage/Footer/Footer";
import SecondNavigation from "../reusable/SecondNavi";
import Character from '../../../Assets/images/character/MernStackBG.png';
import Modal from '../reusable/CoursePacketDownloadForm';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircleNodes, faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faAws, faBootstrap, faCss3Alt, faHtml5, faNode, faReact, faSquareGit } from "@fortawesome/free-brands-svg-icons";
import FAQList from "./FAQ";
import { Link } from "react-router-dom";

const FullstackCourse = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div>
            <section>
                <Navigation />
            </section>
            <section className="bg-gray-200 flex flex-col lg:flex-row items-center" style={{
                backgroundImage: `url(${Character})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                minHeight: '800px',
                height: 'auto'
            }}>
                <div className="lg:flex-1"></div>
                <motion.div
                    className="lg:flex-1 p-4 lg:pl-12 mt-20 lg:mt-20"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="lg:flex-1 p-4 lg:pl-8 text-center bg-gray-100/90 rounded-2xl m-4 lg:m-0 ">
                        <div className="text-secondary">
                            <p className="text-2xl lg:text-3xl text-gray-600 font-bold p-4">Master Fullstack Development with Industry Experts</p>
                            <p className="text-gray-600 text-md lg:text-lg p-2">Learn from experienced Fullstack Engineers who bring real-world knowledge to the classroom. Our instructors provide personalized feedback and support to help you reach your goals. Each instructor is dedicated to providing personalized feedback and support, ensuring you achieve your goals every step of the way.</p>
                        </div>
                        <ul className="text-gray-600 text-start p-2 text-sm">
                            {[
                                "Learn coding with No Prior Experience",
                                "Interactive Live Coding Classes on Zoom",
                                "Follow a structured roadmap for Successful Learning",
                                "Build real web applications with Impressive Portfolio to showcase",
                                "Land your Dream Tech Job",
                                "Master Front-End Technologies like HTML, CSS,JavaScript and React",
                                "Develop Back-End Skills with Node.js, Express, and Databases",
                                "Implement RESTful APIs and GraphQL for efficient data handling",
                                "Learn Version Control with GitHub",
                                "Deploy applications using Cloud Platforms like AWS",
                                "Understand Agile Development and DevOps Practices",
                                "Collaborate using Team Tools like Slack and Jira"
                            ].map((text, index) => (
                                <li className="flex items-center mt-2" key={index}>
                                    <FontAwesomeIcon icon={faCircleCheck} className="mr-2" />
                                    <p>{text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
                <motion.div
                    className="lg:flex-1 p-4 lg:pl-12 mt-20 lg:mt-14 mb-10 lg:mb-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="bg-gray-100/90 p-4 rounded-lg shadow-lg m-2 lg:m-10 min-h-max">
                        <h1 className="mb-3 font-bold text-2xl lg:text-4xl text-center text-gray-600">Fullstack Engineer</h1>
                        <h4 className="mb-8 text-sm lg:text-md text-start text-gray-500">
                            Enhance your app development skills, explore advanced frameworks, libraries, and receive guidance from expert mentors for a successful tech career—all through an online Live Bootcamp.
                        </h4>
                        <p className="text-gray-600">Our structured curriculum covers the most in-demand coding skills, preparing you for a competitive job market and high-paying roles. Join us to transform your future and achieve your dreams in full-stack development.</p>
                        <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 lg:gap-4 text-blue-500 p-6">
                            {[
                                { icon: faHtml5, label: 'HTML5' },
                                { icon: faCss3Alt, label: 'CSS3' },
                                { icon: faBootstrap, label: 'Bootstrap' },
                                { icon: faReact, label: 'React' },
                                { icon: faSquareGit, label: 'Git' },
                                { icon: faAws, label: 'AWS' },
                                { icon: faNode, label: 'NodeJS' },
                                { icon: faDatabase, label: 'Database' },
                                { icon: faCircleNodes, label: 'API' }
                            ].map(({ icon, label }, index) => (
                                <div className="text-center mt-2" key={index}>
                                    <FontAwesomeIcon icon={icon} size="2xl" className="mb-2" />
                                    <p className="text-sm">{label}</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-center lg:text-left mt-4">
                            <Link to="/Programs/Individuals/Fullstack/enroll">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="bg-yellow-500 text-white py-2 px-4 rounded ml-2 hover:bg-yellow-400"
                                >
                                    Enroll Now
                                </motion.button>
                            </Link>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setModalOpen(true)}
                                className="bg-yellow-500 text-white py-2 px-4 rounded ml-2 hover:bg-yellow-400"
                            >
                                Download Course Packet
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </section>
            <div>
                <section className="pb-6">
                    <SecondNavigation module="fullstack" />
                    <FAQList />
                </section>
            </div>
            <section>
                <Footer />
            </section>
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}
                   downloadUrl="YOUR_S3_BUCKET_FILE_URL_FOR_REACT_COURSE" />
        </div>
    );
};

export default FullstackCourse;
