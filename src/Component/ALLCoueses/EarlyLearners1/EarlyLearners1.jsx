import React, { useState } from "react";
import Navigation from "../../Homepage/Navbar/Navbar";
import Footer from "../../Homepage/Footer/Footer";
import SecondNavigation from "../reusable/SecondNavi";
import Character from '../../../Assets/images/character/EarlyLearner1Bg.png';
import Modal from '../reusable/CoursePacketDownloadForm';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faBootstrap, faCss3Alt, faFigma, faHtml5, faJs } from "@fortawesome/free-brands-svg-icons";
import FAQList from "./EarlyLearnerFAQ";
import { Link } from "react-router-dom";

const EarlyLearners1 = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const cardAnimation = {
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.5 }
    };

    return (
        <div>
            <section>
                <Navigation />
            </section>
            <section className="bg-gray-200 flex flex-col items-center mb-2" style={{
                backgroundImage: `url(${Character})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                minHeight: '800px',
                height: 'auto'
            }}>
                <div className="flex flex-col lg:flex-row justify-center items-center w-full max-w-[1600px] mx-auto p-4 lg:space-x-4 mt-24 lg:ml-[250px]">
                    <motion.div
                        className="flex flex-col items-center justify-between space-y-4 bg-gray-100/90 p-4 rounded-2xl max-w-lg w-full"
                        initial="initial"
                        animate="animate"
                        transition="transition"
                        variants={cardAnimation}
                    >
                        <div className="text-secondary text-center">
                            <p className="text-2xl lg:text-3xl text-blue-800 font-bold p-3">Meet Your New Coding Hero: Fun and Friendly Coding Classes for Kids!</p>
                            <p className="text-blue-600 text-lg p-4">Dive into the exciting world of coding with our Level 1 Kids Coding Bootcamp! Our enthusiastic instructors bring fun and creativity to every lesson, making it easy for young learners to grasp the basics of coding.</p>
                            <p className="text-blue-600">We offer a clear, kid-friendly roadmap to help budding coders develop essential skills. Our hands-on projects and personalized support ensure every child feels confident and ready to take on new coding challenges.</p>
                        </div>
                        <ul className="text-blue-600 text-start p-4">
                            <li><FontAwesomeIcon icon={faCircleCheck} /> Start coding with <b>Absolutely No Experience Needed</b></li>
                            <li><FontAwesomeIcon icon={faCircleCheck} /> Enjoy a fun and <b>Structured Learning Path</b></li>
                            <li><FontAwesomeIcon icon={faCircleCheck} /> Create <b>Exciting Projects</b> to impress your friends and family</li>
                            <li><FontAwesomeIcon icon={faCircleCheck} /> Discover the joy of coding and build a <b>Foundation for the Future</b></li>
                        </ul>
                    </motion.div>
                    <motion.div
                        className="flex flex-col items-center justify-between space-y-4 bg-gray-100/80 p-4 lg:p-10 rounded-2xl max-w-lg w-full shadow-lg mt-4 lg:mt-0"
                        initial="initial"
                        animate="animate"
                        transition="transition"
                        variants={cardAnimation}
                    >
                        <h1 className="mb-3 font-bold text-3xl lg:text-4xl text-center text-blue-800 ">Early Learners I</h1>
                        <h4 className="mb-8 text-lg lg:text-xl text-start text-blue-600">
                            Have fun learning how to build cool websites! Our awesome teachers will help you every step of the way in our interactive coding camp.
                        </h4>
                        <p className="text-lg lg:text-xl text-blue-700 font-bold">Level 1: Introduction to Web Development<br /> (4 Weeks)</p>
                        <div className="flex-1 text-blue-500 flex justify-around items-center p-3 item-xl">
                            {[
                                { icon: faFigma, label: 'Figma' },
                                { icon: faHtml5, label: 'HTML5' },
                                { icon: faCss3Alt, label: 'CSS3' },
                                { icon: faBootstrap, label: 'Bootstrap' },
                                { icon: faJs, label: 'JavaScript' }
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
                    <SecondNavigation module="earlylearners1" />
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

export default EarlyLearners1;
