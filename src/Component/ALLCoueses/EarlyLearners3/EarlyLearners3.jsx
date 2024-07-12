import React, { useState } from 'react';
import Navigation from "../../Homepage/Navbar/Navbar";
import Character from "../../../Assets/images/character/EarlyLearner3Bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBugSlash, faCircleCheck, faDatabase, faInfinity } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { faAws, faGithub, faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import SecondNavigation from "../reusable/SecondNavi";
import FAQList from "../EarlyLearners1/EarlyLearnerFAQ";
import Footer from "../../Homepage/Footer/Footer";
import Modal from "../reusable/CoursePacketDownloadForm";

const EarlyLearners3 = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <>
            <div>
                <section>
                    <Navigation />
                </section>
                <section className="bg-gray-200 flex flex-col items-center py-8" style={{
                    backgroundImage: `url(${Character})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '800px',
                    height: 'auto'
                }}>
                    <div className="flex flex-col lg:flex-row justify-center items-center w-full max-w-[1600px] mx-auto p-4 lg:space-x-4 mt-16 lg:ml-[300px]">
                        <motion.div
                            className="flex flex-col items-center justify-between space-y-4 bg-gray-100/90 p-4 rounded-2xl max-w-lg w-full"
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <div className="text-secondary text-center">
                                <p className="text-2xl lg:text-3xl text-blue-800 font-bold p-3">Take Coding to the Advanced Level: Thrilling Classes for Young Coders!</p>
                                <p className="text-blue-600 text-lg p-4">Explore the fascinating world of coding with our Level 3 Kids Coding Bootcamp! Our energetic instructors blend fun and creativity into every lesson, making it easy for young learners to master advanced coding concepts.</p>
                                <p className="text-blue-600">We present a clear, engaging roadmap for young coders to develop vital skills. Through hands-on projects and individualized support, we ensure every child feels confident and eager to take on new coding challenges.</p>
                            </div>
                            <ul className="text-blue-600 text-start p-4">
                                <li><FontAwesomeIcon icon={faCircleCheck} /> Enhance your skills with <b>Advanced Coding Techniques</b></li>
                                <li><FontAwesomeIcon icon={faCircleCheck} /> Follow a <b>Challenging and Engaging Learning Path</b></li>
                                <li><FontAwesomeIcon icon={faCircleCheck} /> Develop <b>Complex Projects</b> to showcase your growing expertise</li>
                                <li><FontAwesomeIcon icon={faCircleCheck} /> Experience the thrill of coding and strengthen your <b>Skills for the Future</b></li>
                            </ul>
                        </motion.div>
                        <motion.div
                            className="flex flex-col items-center justify-between space-y-4 bg-gray-100/80 p-4 lg:p-10 rounded-2xl max-w-lg w-full shadow-lg mt-4 lg:mt-0"
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <h1 className="mb-3 font-bold text-3xl lg:text-4xl text-center text-blue-800">Early Learners III</h1>
                            <h4 className="mb-8 text-lg lg:text-xl text-start text-blue-600">
                                Enjoy mastering the creation of advanced web applications! Our expert instructors will guide you through every phase in our engaging and interactive coding camp.
                            </h4>
                            <p className="text-lg lg:text-xl text-blue-700 font-bold">Level 3: Advanced Web Development<br /> (4 Weeks)</p>
                            <div className="grid grid-cols-6 sm:grid-cols-8 gap-4 lg:gap-16 text-blue-500 p-6">
                                {[
                                    { icon: faJs, label: 'JavaScript' },
                                    { icon: faReact, label: 'React' },
                                    { icon: faDatabase, label: 'Database' },
                                    { icon: faBugSlash, label: 'Test' },
                                    { icon: faGithub, label: 'Github' },
                                    { icon: faInfinity, label: 'DevOps' },
                                    { icon: faAws, label: 'AWS' }
                                ].map(({ icon, label }, index) => (
                                    <div className="text-center p-4" key={index}>
                                        <FontAwesomeIcon icon={icon} size="2xl" className="mb-2" />
                                        <p className="text-sm">{label}</p>
                                    </div>
                                ))}
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
                </section>
                <div>
                    <section className="pb-6">
                        <SecondNavigation module="earlylearners3" />
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

export default EarlyLearners3;
