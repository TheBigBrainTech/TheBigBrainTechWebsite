import React, { useState } from "react";
import Navigation from "../../Homepage/Navbar/Navbar";
import Footer from "../../Homepage/Footer/Footer";
import SecondNavigation from "../reusable/SecondNavi";
import Character from '../../../Assets/images/character//QAAutomationBG.png';
import Modal from '../reusable/CoursePacketDownloadForm';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faJava, faJenkins, faSquareGit } from "@fortawesome/free-brands-svg-icons";
import FAQList from "./FAQ";
import Icon from './Icon';
import { Link } from "react-router-dom";

const QACourse = () => {
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
                <div className="lg:flex-1 p-4 lg:pl-8 text-center bg-gray-100/90 rounded-2xl m-4 lg:m-0 mt-24">
                    <div className="text-secondary">
                        <p className="text-2xl lg:text-3xl text-gray-600 font-bold p-3">MASTER QA AUTOMATION FROM INDUSTRY LEADERS</p>
                        <p className="text-gray-600 text-lg lg:text-xl p-5">Learn from experienced QA automation engineers who apply real-world expertise in the classroom. Each mentor is committed to offering tailored feedback and support, helping you reach your professional objectives.</p>
                        <p className="text-gray-600">We offer a structured path to acquire essential QA automation skills, making you competitive and ready to secure a high-paying job in the tech sector.</p>
                    </div>
                    <ul className="text-gray-600 text-start p-5">
                        <li><FontAwesomeIcon icon={faCircleCheck} /> Master automation tools like <b>Selenium, TestNG, and Cucumber</b></li>
                        <li><FontAwesomeIcon icon={faCircleCheck} /> Gain proficiency in <b>writing and maintaining automated test scripts</b></li>
                        <li><FontAwesomeIcon icon={faCircleCheck} /> Learn to integrate testing frameworks with <b>CI/CD pipelines</b></li>
                        <li><FontAwesomeIcon icon={faCircleCheck} /> Understand the best practices for <b>test case design and execution</b></li>
                        <li><FontAwesomeIcon icon={faCircleCheck} /> Develop skills to <b>identify, report, and track defects</b> effectively</li>
                        <li><FontAwesomeIcon icon={faCircleCheck} /> Build a <b>strong portfolio</b> with real-world QA automation projects</li>
                        <li><FontAwesomeIcon icon={faCircleCheck} /> Get prepared to <b>ace QA automation job interviews</b> with confidence</li>
                        <li><FontAwesomeIcon icon={faCircleCheck} /> Learn coding with <b>No Prior Experience</b></li>
                        <li><FontAwesomeIcon icon={faCircleCheck} /> Follow a structured roadmap for <b>Successful Learning</b></li>
                        <li><FontAwesomeIcon icon={faCircleCheck} /> Build <b>Real Test</b> applications with <b>Impressive Portfolio</b> to showcase</li>
                        <li><FontAwesomeIcon icon={faCircleCheck} /> Land your <b>Dream Tech Job</b></li>
                    </ul>
                </div>
                <motion.div
                    className="lg:flex-1 p-4 lg:pl-12"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="bg-white p-4 rounded-lg shadow-lg mr-0 lg:mr-10 min-h-max">
                        <h1 className="mb-3 font-bold text-2xl lg:text-4xl text-center text-gray-600">QA Automation Engineer</h1>
                        <h4 className="mb-8 text-lg lg:text-xl text-start text-gray-500">
                            Enhance your Quality Assurance skills, explore advanced frameworks, and receive guidance from expert mentors for a successful tech career—all through an online Live Bootcamp.
                        </h4>
                        <p className="text-xl text-gray-600">Learn The Quality Assurance Automation Essentials</p>
                        <div className="grid grid-cols-5 gap-4 lg:gap-6 text-blue-500 p-6">
                            <div className="text-center">
                                <FontAwesomeIcon icon={faJava} size="2xl" className="mb-2" />
                                <p className="text-sm">Java</p>
                            </div>
                            <div className="text-center">
                                <Icon name="maven" size="44px" color="currentColor" className="ml-2" />
                                <p className="text-sm">Maven</p>
                            </div>
                            <div className="text-center">
                                <Icon name="selenium" size="24px" color="currentColor" className="mb-2 ml-5" />
                                <p className="text-sm">Selenium</p>
                            </div>
                            <div className="text-center">
                                <Icon name="cucumber" size="24px" color="currentColor" className="mb-2 ml-5" />
                                <p className="text-sm">Cucumber</p>
                            </div>
                            <div className="text-center">
                                <Icon name="testng" size="34px" color="currentColor" className="ml-5" />
                                <p className="text-sm">TestNG</p>
                            </div>
                            <div className="text-center">
                                <Icon name="postman" size="44px" color="currentColor" className="ml-2" />
                                <p className="text-sm">Postman</p>
                            </div>
                            <div className="text-center">
                                <Icon name="restassured" size="24px" color="currentColor" className="mb-2 ml-5 mt-3" />
                                <p className="text-sm">RestAssured</p>
                            </div>
                            <div className="text-center">
                                <FontAwesomeIcon icon={faSquareGit} size="2xl" className="mb-2" />
                                <p className="text-sm">Git</p>
                            </div>
                            <div className="text-center">
                                <FontAwesomeIcon icon={faJenkins} size="2xl" className="mb-2" />
                                <p className="text-sm">Jenkins</p>
                            </div>
                        </div>
                        <div className="text-center lg:text-left">
                            <Link to="/Programs/Individuals/QAAutomation/enroll">
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
                    <SecondNavigation module="qa" />
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

export default QACourse;
