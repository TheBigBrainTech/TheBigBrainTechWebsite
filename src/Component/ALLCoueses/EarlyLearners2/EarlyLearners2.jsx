import React, { useState } from 'react';
import Navigation from "../../Homepage/Navbar/Navbar";
import Character from "../../../Assets/images/character/EarlyLearner2Bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { faBootstrap, faCss3Alt, faHtml5, faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import SecondNavigation from "../reusable/SecondNavi";
import FAQList from "../EarlyLearners1/EarlyLearnerFAQ";
import Footer from "../../Homepage/Footer/Footer";
import Modal from "../reusable/CoursePacketDownloadForm";

const EarlyLearners2 = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <>
            <div>
                <section className="pb-5">
                    <Navigation />
                </section>
                <section className="bg-gray-200 h-[800px] flex items-center pt-8 mt-16" style={{
                    backgroundImage: `url(${Character})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>
                    <div className="flex justify-end w-full max-w-[1600px] mx-auto" style={{ paddingLeft: '300px' }}>
                        <div className="flex space-x-4">
                            <motion.div
                                className="flex flex-col items-center justify-between space-y-4 bg-gray-100/90 p-4 rounded-2xl max-w-lg w-full"
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <div className="text-secondary text-center">
                                    <p className="text-3xl text-blue-800 font-bold p-3">Take Coding to the Next Level:
                                        Thrilling Classes for Young Coders!</p>
                                    <p className="text-blue-600 text-lg p-4">Explore the fascinating world of coding with
                                        our Level 2 Kids Coding Bootcamp!
                                        Our energetic instructors blend fun and creativity into every lesson, making it easy
                                        for young learners to master more advanced
                                        coding concepts.</p>
                                    <p className="text-blue-600">We present a clear, engaging roadmap for young coders to
                                        develop vital skills. Through hands-on projects
                                        and individualized support, we ensure every child feels confident and eager to take
                                        on new coding challenges.</p>
                                </div>
                                <ul className="text-blue-600 text-start p-4">
                                    <li><FontAwesomeIcon icon={faCircleCheck} /> Enhance your skills with <b>Advanced Coding
                                        Techniques</b></li>
                                    <li><FontAwesomeIcon icon={faCircleCheck} /> Follow a <b>Challenging and Engaging
                                        Learning Path</b></li>
                                    <li><FontAwesomeIcon icon={faCircleCheck} /> Develop <b>Complex Projects</b> to showcase
                                        your growing expertise
                                    </li>
                                    <li><FontAwesomeIcon icon={faCircleCheck} /> Experience the thrill of coding and
                                        strengthen your <b>Skills for the Future</b></li>
                                </ul>
                            </motion.div>
                            <motion.div
                                className="flex flex-col items-center justify-between space-y-4 bg-gray-100/80 p-10 rounded-2xl max-w-lg w-full shadow-lg"
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <h1 className="mb-3 font-bold text-4xl text-center text-blue-800 ">Early Learners II</h1>
                                <h4 className="mb-8 text-xl text-start text-blue-600 pb-4">
                                    Have fun learning how to build cool websites! Our awesome teachers will help you every
                                    step
                                    of the way in our interactive coding camp.
                                </h4>
                                <p className="text-xl text-blue-700 font-bold">Level 2: Intermediate Web Development<br></br> (4 Weeks)</p>
                                <div className="flex-1 text-blue-500 flex justify-around items-center p-3 item-xl">
                                    <div className="text-center p-4">
                                        <FontAwesomeIcon icon={faHtml5} size="2xl" className="mb-2" />
                                        <p className="text-sm">HTML5</p>
                                    </div>
                                    <div className="text-center p-4">
                                        <FontAwesomeIcon icon={faCss3Alt} size="2xl" className="mb-2" />
                                        <p className="text-sm">CSS3</p>
                                    </div>
                                    <div className="text-center p-4">
                                        <FontAwesomeIcon icon={faBootstrap} size="2xl" className="mb-2" />
                                        <p className="text-sm">Bootstrap</p>
                                    </div>
                                    <div className="text-center p-4">
                                        <FontAwesomeIcon icon={faJs} size="2xl" className="mb-2" />
                                        <p className="text-sm">JavaScript</p>
                                    </div>
                                    <div className="text-center p-4">
                                        <FontAwesomeIcon icon={faReact} size="2xl" className="mb-2" />
                                        <p className="text-sm">React</p>
                                    </div>
                                </div>
                                <div className="flex justify-center space-x-4">
                                    <Link to="/Programs/EarlyLearners/Basic/enroll">
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-400"
                                        >
                                            Enroll Now
                                        </motion.button>
                                    </Link>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => setModalOpen(true)}
                                        className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-400"
                                    >
                                        Download Course Packet
                                    </motion.button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
                <div>
                    <section className="pb-6">
                        <SecondNavigation module="earlylearners2" />
                        <FAQList />
                    </section>
                </div>
                <section>
                    <Footer />
                </section>
                <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}
                       downloadUrl="YOUR_S3_BUCKET_FILE_URL_FOR_REACT_COURSE" />
            </div>
        </>
    )
}

export default EarlyLearners2;
