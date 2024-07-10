import React, { useState } from "react";
import Navigation from "../../Homepage/Navbar/Navbar";
import Footer from "../../Homepage/Footer/Footer";
import SecondNavigation from "../reusable/SecondNavi";
import Character from '../../../Assets/images/character/ReactCharacter-bg-1.png';
import Modal from '../reusable/CoursePacketDownloadForm';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faAws, faBootstrap, faCss3Alt, faHtml5, faReact, faSquareGit } from "@fortawesome/free-brands-svg-icons";
import FAQList from "./FAQ";

const ReactCourse = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div>
            <section className="pb-5">
                <Navigation />
            </section>
            <section className="bg-gray-200 h-[800px] flex items-center pt-8 mt-16" style={{ backgroundImage: `url(${Character})`, backgroundSize:'cover', backgroundRepeat:'no-repeat' }}>
                <div className="flex-1"></div>
                <div className="flex-1 pl-8 text-center bg-gray-100/90 rounded-2xl">
                    <div className="text-secondary">
                        <p className="text-3xl text-gray-600 font-bold p-3">LEARN FROM THE INDUSTRY&apos;S TOP TALENT</p>
                        <p className="text-gray-600 text-xl p-5">Gain knowledge from front-end web developers who bring practical, real-world experience into the classroom. Each instructor is dedicated to providing personalized feedback and support, ensuring you achieve your goals every step of the way.</p>
                        <p className="text-gray-600">We provide a clear roadmap to learn the most in-demand coding skills and everything necessary to be competitive and land a high-paying coding job.</p>
                    </div>

                    <ul className="text-gray-600 text-start p-5">
                        <li><FontAwesomeIcon icon={faCircleCheck} /> Learn coding with <b>No Prior Experience</b></li>
                        <li><FontAwesomeIcon icon={faCircleCheck} /> Follow a structured roadmap for <b>Successful Learning</b></li>
                        <li><FontAwesomeIcon icon={faCircleCheck} /> Build <b>real</b> web applications with <b>Impressive Portfolio</b> to showcase</li>
                        <li><FontAwesomeIcon icon={faCircleCheck} /> Land your <b>Dream Tech Job</b></li>
                    </ul>
                </div>
                <motion.div
                    className="flex-1 pl-12"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="bg-white p-4 rounded-lg shadow-lg mr-10 min-h-max">
                        <h1 className="mb-3 font-bold text-4xl text-center text-gray-600 ">Frontend Web Development</h1>
                        <h4 className="mb-8 text-xl text-start text-gray-500">
                            Enhance your web development skills, explore advanced frameworks, and receive guidance from
                            expert mentors for a successful tech career—all through an online Live Bootcamp.
                        </h4>
                        <p className="text-2xl text-gray-600">Learn The Web Development Fundamentals</p>
                        <div className="flex-1 text-blue-500 flex justify-around items-center p-6 item-xl">
                            <div className="text-center">
                                <FontAwesomeIcon icon={faHtml5} size="2xl" className="mb-2"/>
                                <p className="text-sm">HTML5</p>
                            </div>
                            <div className="text-center">
                                <FontAwesomeIcon icon={faCss3Alt} size="2xl" className="mb-2"/>
                                <p className="text-sm">CSS3</p>
                            </div>
                            <div className="text-center">
                                <FontAwesomeIcon icon={faBootstrap} size="2xl" className="mb-2"/>
                                <p className="text-sm">Bootstrap</p>
                            </div>
                            <div className="text-center">
                                <FontAwesomeIcon icon={faReact} size="2xl" className="mb-2"/>
                                <p className="text-sm">React</p>
                            </div>
                            <div className="text-center">
                                <FontAwesomeIcon icon={faSquareGit} size="2xl" className="mb-2"/>
                                <p className="text-sm">Git</p>
                            </div>
                            <div className="text-center">
                                <FontAwesomeIcon icon={faAws} size="2xl" className="mb-2"/>
                                <p className="text-sm">AWS</p>
                            </div>
                        </div>
                        <div className="ml-16">
                            <motion.button
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                                className="bg-yellow-500 text-white py-2 px-4 rounded ml-2 hover:bg-yellow-400"
                            >
                                Enroll Now
                            </motion.button>
                            <motion.button
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
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
                    <SecondNavigation module="frontend" />
                    <FAQList/>
                </section>
            </div>
            <section>
                <Footer/>
            </section>
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}
                   downloadUrl="YOUR_S3_BUCKET_FILE_URL_FOR_REACT_COURSE"/>
        </div>
    );
};

export default ReactCourse;
