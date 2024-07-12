import React from "react";
import {motion} from "framer-motion";
import Navigation from "../Homepage/Navbar/Navbar";
import Footer from "../Homepage/Footer/Footer";
import AboutText from "../../Assets/Data/AboutData.json";
import {faMedal, faPeopleRoof, faRankingStar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import AboutCharacter from '../../Assets/images/character/About_character_1.png'
import ContactUs from "../ContactForm/ContactUs";

const iconMap = {
    faMedal: faMedal,
    faPeopleRoof: faPeopleRoof,
    faRankingStar: faRankingStar,
};

const AboutUs = () => {
    const textStyles = "text-gray-500 p-2";

    const cardVariants = {
        initial: {
            width: "100px",
            height: "100px",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "white",
            borderRadius: "0.5rem",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        hover: {
            width: "600px",
            height: "auto",
            padding: "1.5rem",
            background: "linear-gradient(90deg, rgba(255,204,0,1) 0%, rgba(255,165,0,1) 100%)",
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    const iconVariants = {
        initial: {
            opacity: 1,
            display: "block",
        },
        hover: {
            opacity: 0,
            display: "none",
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    const contentVariants = {
        initial: {
            opacity: 0,
            display: "none"
        },
        hover: {
            opacity: 1,
            display: "block",
            transition: {
                duration: 0.3,
                ease: "easeInOut",
                delay: 0.1
            }
        }
    };


    return (
        <div>
            <section>
                <Navigation/>
            </section>
            {/* Hero Section */}
            <div className="container mx-auto mt-16 pt-8">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2">
                        <h1 className={textStyles}>
                            The most important things we develop are people
                        </h1>
                        <p className="text-md text-gray-500 font-bold">
                            We&apos;re a diverse digital community with a mission to change
                            lives for the better.
                        </p>
                        <p className="text-sm text-gray-500">
                            Whether you are eager to kickstart your tech journey, seeking a
                            new direction in your tech career or a kid curious about coding, The BigBrain Tech is the
                            ultimate
                            destination for your success. Our supportive community,
                            unparalleled resources, and commitment to your growth make us the
                            perfect choice for coding bootcamp. Get ready to
                            unlock your full potential with The Bigbrain Tech Apply now for our
                            coding bootcamp, and let&apos;s embark on a
                            transformative tech journey together. The future of technology
                            awaits you!
                        </p>
                        <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-400 mt-5">Apply
                            Now
                        </button>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img
                            src={AboutCharacter}
                            alt="hero"
                            className="w-full"
                        />
                    </div>
                </div>
            </div>


            <p className="text-4xl text-center text-gray-500 p-5 mt-14">Why Us?</p>
            <div className="container mx-auto my-8 flex justify-center space-x-4">
                {AboutText.slice(0, 3).map((data) => {
                    const IconComponent = iconMap[data.icon];
                    return (
                        <motion.div
                            key={data.id}
                            className="bg-white shadow-md rounded-lg flex items-center justify-center p-6"
                            initial="initial"
                            whileHover="hover"
                            variants={cardVariants}
                        >
                            <motion.div
                                className="text-center"
                                variants={iconVariants}
                            >
                                <FontAwesomeIcon icon={IconComponent} className="text-yellow-500 text-4xl"/>
                            </motion.div>
                            <motion.div
                                className="mt-4 text-left hidden"
                                variants={contentVariants}
                            >
                                <h2 className={textStyles}><strong>{data.Heading}</strong></h2>
                                <h3 className={textStyles}>{data.subHeading}</h3>
                                <p className={textStyles}>{data.text1}</p>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>


            {/* Third Section */}
            <div className="container-fluid mx-auto py-10 bg-gray-100 mb-8">
                <div className="flex flex-wrap">
                    <div className="w-full">
                        <h1 className="text-center text-gray-500">What goes on in the The BigBrain Tech community?</h1>
                        <h3 className="text-center text-gray-500">
                            You&apos;ll find plenty of the support you need at the BigBrain Tech
                            community, as well as sociable gatherings and the chance to make
                            new friends and recruiters.<br></br> Support and assistance with BigBrain Tech
                            coders
                        </h3>
                    </div>
                    <div className="w-full md:w-1/2">
                        <ul className={textStyles}>
                            <li>
                                <h2 className={textStyles}>
                                    <i className="fa-solid fa-chalkboard-user fa-2xl"
                                       style={{color: "#eab308"}}></i> Support
                                    & Mentorship
                                </h2>
                                <p className={textStyles}>
                                    From coding questions to personal welfare and career advice,
                                    we&apos;ll be there. You&apos;ll also find support and
                                    guidance on The BigBrain Tech Slack community.
                                </p>
                            </li>
                            <li>
                                <h2 className={textStyles}>
                                    <i className="fa-brands fa-stack-overflow fa-2xl"
                                       style={{color: "#eab308"}}></i> Talks &
                                    Hackathons
                                </h2>
                                <p className={textStyles}>
                                    You&apos;ll
                                    have the chance to learn about related topics, share your
                                    research, practice presenting, work on projects and solve team
                                    challenges.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2">
                        <ul className={textStyles}>
                            <li>
                                <h2 className={textStyles}>
                                    <i className="fa-solid fa-people-arrows fa-2xl"
                                       style={{color: "#eab308"}}></i> Social
                                    Gatherings
                                </h2>
                                <p className={textStyles}>
                                    We run online and in-person social activities, from
                                    show-and-tell events to games or ping-pong evenings to help
                                    you make friends for life – conditions permitting, of course.
                                </p>
                            </li>
                            <li>
                                <h2 className={textStyles}>
                                    <i className="fa-solid fa-arrows-down-to-people fa-2xl"
                                       style={{color: "#eab308"}}></i> An Inclusive Atmosphere
                                </h2>
                                <p className={textStyles}>
                                    The Bigbrain Tech embraces diversity in all its forms, and provides a warm,
                                    supportive and inclusive experience for every single student.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <p className="text-center text-4xl text-gray-600">Setting Us Apart</p>

            <div className="container-fluid mx-auto py-10 bg-white mb-8 p-10">
                <h2 className="text-center text-gray-500 text-sm">
                    At The Bigbrain Tech, we are more than just an coding bootcamp; we are a
                    thriving community of passionate technologists on a mission to change
                    lives for the better. As a leading organization in the tech industry,
                    we specialize in offering cutting-edge coding bootcamps, paving the way for aspiring programmers to
                    embark
                    on their dream tech careers.
                </h2>
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2">
                        <h3 className={textStyles}>
                            <strong>Our Coding Bootcamps:</strong>
                        </h3>
                        <p className={textStyles}>
                            Our intensive and immersive coding bootcamps are designed to equip
                            you with the practical skills and knowledge necessary to excel in
                            the dynamic world of technology. Whether you are an absolute
                            beginner or a seasoned coder seeking to upskill, our comprehensive
                            programs cater to all skill levels. Led by industry experts and
                            experienced mentors, our bootcamps cover a wide array of
                            programming languages, frameworks, and the latest tech trends to
                            ensure you stay at the forefront of innovation.
                        </p>

                        <h3 className={textStyles}>
                            <strong>Why Choose The Bigbrain Tech Bootcamps?</strong>
                        </h3>
                        <p className={textStyles}>
                            Our bootcamps focus on hands-on learning, allowing you to work on
                            real-world projects and gain practical experience that employers
                            value. Career Support: We don&apos;t just stop at teaching you how
                            to code; our dedicated career support team provides guidance,
                            interview preparation, and networking opportunities to help you
                            land your dream job. Inclusive Environment: At BigBrain, we
                            celebrate diversity and foster an inclusive atmosphere where
                            everyone feels welcome and empowered to thrive.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h3 className={textStyles}><strong> Our Placement Assistance:</strong></h3>
                        <p className={textStyles}>
                            Securing a job in the tech industry can be a
                            daunting task, but not with The BigBrain Tech by your side. Our unparalleled
                            placement Assistance connect you with leading companies actively
                            seeking tech talent. Whether you&apos;re a recent bootcamp graduate or an
                            experienced professional looking for new opportunities, our
                            extensive network of tech partners ensures that your skills and
                            talents are showcased to the right employers.
                        </p>
                        <h3 className={textStyles}><strong>Why BigBrain Assistance?</strong></h3>
                        <p className={textStyles}>
                            We have forged strong
                            relationships with top tech companies, giving you access to
                            exclusive job openings and internships. Personalized Approach: Our
                            team takes the time to understand your unique strengths
                            and career aspirations, tailoring resume for job opportunities that align with
                            your goals. Ongoing Support: Even after you secure a position, we
                            continue to support your professional growth, providing mentorship
                            and resources to help you thrive in your new role.
                        </p>
                    </div>
                </div>
            </div>

            {/* Last Section */}
            <div
                className="container-fluid mx-auto py-16 bg-gradient-to-r from-yellow-600 to-yellow-400 p-10 my-10 min-h-80">
                <div className="text-center">
                    <h1 className="text-gray-600">Ready to Join The Bigbrain Tech?</h1>
                    <button className="bg-yellow-500 text-black py-2 px-4 mx-4 rounded hover:bg-yellow-400">Apply for
                        Bootcamp
                    </button>

                </div>
            </div>
            <section>
                <ContactUs/>
            </section>
            <section>
                <Footer/>
            </section>
        </div>
    );
};

export default AboutUs;
