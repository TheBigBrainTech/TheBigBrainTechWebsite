import React, {useState} from "react";
import Navigation from "../../Homepage/Navbar/Navbar";
import Footer from "../../Homepage/Footer/Footer";
import SecondNavigation from "../reusable/SecondNavi";
import Character from '../../../Assets/images/character/MernStackBG.png';
import Modal from '../reusable/CoursePacketDownloadForm';
import {motion} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck, faCircleNodes, faDatabase} from "@fortawesome/free-solid-svg-icons";
import {faAws, faBootstrap, faCss3Alt, faHtml5, faNode, faReact, faSquareGit} from "@fortawesome/free-brands-svg-icons";
import FAQList from "./FAQ";
import {Link} from "react-router-dom";




const EarlyLearnersCourse = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div>
            <section className="pb-5">
                <Navigation />
            </section>
            <section className="bg-gray-200 h-[800px] flex items-center pt-8 mt-16" style={{ backgroundImage: `url(${Character})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div className="flex-1"></div>
                <div className="lg:flex-1 pl-8 text-center bg-gray-100/90 rounded-2xl">
                    <div className="text-secondary">
                        <p className="text-3xl text-gray-600 font-bold p-8">Master Fullstack Development with Industry
                            Experts</p>
                        <p className="text-gray-600 text-xl p-5">Learn from experienced Fullstack Engineers who bring
                            real-world knowledge to the classroom. Our instructors provide personalized feedback and
                            support to help you reach your goals. Each instructor is dedicated to providing personalized
                            feedback and support, ensuring you achieve your goals every step of the way.</p>

                    </div>

                    <ul className="text-gray-600 text-start p-5">
                        <li className="flex items-center">
                            <FontAwesomeIcon icon={faCircleCheck} className="mr-2"/>
                            <p>Learn coding with <b>No Prior Experience</b></p>
                        </li>
                        <li className="flex items-center">
                            <FontAwesomeIcon icon={faCircleCheck} className="mr-2"/>
                            <p>Follow a structured roadmap for <b>Successful Learning</b></p>
                        </li>
                        <li className="flex items-center">
                            <FontAwesomeIcon icon={faCircleCheck} className="mr-2"/>
                            <p> Build <b>real</b> web applications with <b>Impressive Portfolio</b> to showcase</p>
                        </li>
                        <li className="flex items-center">
                            <FontAwesomeIcon icon={faCircleCheck} className="mr-2"/>
                            <p> Land your <b>Dream Tech Job</b></p>
                        </li>
                        <li className="flex items-center">
                            <FontAwesomeIcon icon={faCircleCheck} className="mr-2"/>
                            <p>Master <b>Front-End Technologies</b> like HTML, CSS, and JavaScript</p>
                        </li>
                        <li className="flex items-center">
                            <FontAwesomeIcon icon={faCircleCheck} className="mr-2"/>
                            <p>Develop <b>Back-End Skills</b> with Node.js, Express, and Databases</p>
                        </li>
                        <li className="flex items-center">
                            <FontAwesomeIcon icon={faCircleCheck} className="mr-2"/>
                            <p>Work with <b>Popular Frameworks</b> like React</p>
                        </li>
                        <li className="flex items-center">
                            <FontAwesomeIcon icon={faCircleCheck} className="mr-2"/>
                            <p>Implement <b>RESTful APIs</b> and GraphQL for efficient data handling</p>
                        </li>
                        <li className="flex items-center">
                            <FontAwesomeIcon icon={faCircleCheck} className="mr-2"/>
                            <p>Learn <b>Version Control</b> with GitHub</p>
                        </li>
                        <li className="flex items-center">
                            <FontAwesomeIcon icon={faCircleCheck} className="mr-2"/>
                            <p>Deploy applications using <b>Cloud Platforms</b> like AWS</p>
                        </li>
                        <li className="flex items-center">
                            <FontAwesomeIcon icon={faCircleCheck} className="mr-2"/>
                            <p> Understand <b>Agile Development</b> and <b>DevOps Practices</b></p>
                        </li>
                        <li className="flex items-center">
                            <FontAwesomeIcon icon={faCircleCheck} className="mr-2"/>
                            <p>Collaborate using <b>Team Tools</b> like Slack and Jira</p>
                        </li>
                    </ul>


                </div>
                <motion.div
                    className="flex-1 pl-12"
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                >
                    <div className="bg-white p-4 rounded-lg shadow-lg mr-10 min-h-max">
                        <h1 className="mb-3 font-bold text-4xl text-center text-gray-600">Early Learners I</h1>
                        <h4 className="mb-8 text-xl text-start text-gray-500">
                            Enhance your app development skills, explore advanced frameworks, libraries, and receive
                            guidance from expert mentors for a successful tech career—all through an online Live
                            Bootcamp.
                        </h4>
                        <p className="text-gray-600">Our structured curriculum covers the most in-demand coding skills,
                            preparing you for a competitive job market and high-paying roles. Join us to transform your
                            future and achieve your dreams in full-stack
                            development.</p>
                        <div className="flex-1 text-blue-500 p-6">
                            <div className="grid grid-cols-3 gap-6">
                                {[
                                    {icon: faHtml5, label: 'HTML5'},
                                    {icon: faCss3Alt, label: 'CSS3'},
                                    {icon: faBootstrap, label: 'Bootstrap'},
                                    {icon: faReact, label: 'React'},
                                    {icon: faSquareGit, label: 'Git'},
                                    {icon: faAws, label: 'AWS'},
                                    {icon: faNode, label: 'NodeJS'},
                                    {icon: faDatabase, label: 'Database'},
                                    {icon: faCircleNodes, label: 'API'}
                                ].map(({icon, label}, index) => (
                                    <div className="text-center" key={index}>
                                        <FontAwesomeIcon icon={icon} size="2xl" className="mb-2"/>
                                        <p className="text-sm">{label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="ml-16">
                            <Link to="/Programs/Individuals/Fullstack/enroll">
                                <motion.button
                                    whileHover={{scale: 1.1}}
                                    whileTap={{scale: 0.9}}
                                    className="bg-yellow-500 text-white py-2 px-4 rounded ml-2 hover:bg-yellow-400"
                                >
                                    Enroll Now
                                </motion.button>
                            </Link>
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
                    <SecondNavigation module="fullstack"/>
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

export default EarlyLearnersCourse;