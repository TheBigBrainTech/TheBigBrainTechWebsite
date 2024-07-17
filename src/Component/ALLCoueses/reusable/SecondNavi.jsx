import React, { useState } from "react";
import PropTypes from "prop-types";
import FrontendCourseInfo from "../react/FrontendCourseInfo";
import FullstackCourseInfo from "../FullStack/FullstackcourseInfo";
import QACourseInfo from "../QA/QACourseInfo";
import EarlyLearners1CourseInfo from "../EarlyLearners1/EarlyLearners1CourseInfo";
import EarlyLearners2CourseInfo from "../EarlyLearners2/EarlyLearners2CourseInfo";
import EarlyLearners3CourseInfo from "../EarlyLearners3/EarlyLearners3CourseInfo";

import FrontendStudentReview from "../react/FrontendStudentReview";
import FullstackStudentReview from "../FullStack/FullstackStudentReview";
import QAStudentReview from "../QA/QAStudentReview";
import EarlyLearners1StudentReview from "../EarlyLearners1/EarlyLearners1StudentReview";
import EarlyLearners2StudentReview from "../EarlyLearners2/EarlyLearners2StudentReview";
import EarlyLearners3StudentReview from "../EarlyLearners3/EarlyLearners3StudentReview";

import FrontendAdmission from "../reusable/IndividualAdmissionProcess";
import FullstackAdmission from "../reusable/IndividualAdmissionProcess";
import QAAdmission from "../reusable/IndividualAdmissionProcess";
import EarlyLearners1Admission from "../reusable/EarlyLearnerAdmissionProcess";
import EarlyLearners2Admission from "../reusable/EarlyLearnerAdmissionProcess";
import EarlyLearners3Admission from "../reusable/EarlyLearnerAdmissionProcess";

import FrontendFinancingOptions from "../react/FrontendFinancing";
import FullstackFinancingOptions from "../FullStack/FullStackFinancing";
import QAFinancingOptions from "../QA/QAFinancing";
import EarlyLearners1FinancingOptions from "../EarlyLearners1/EarlyLearners1Financing";
import EarlyLearners2FinancingOptions from "../EarlyLearners2/EarlyLearners2Financing";
import EarlyLearners3FinancingOptions from "../EarlyLearners3/EarlyLearners3Financing";

import FrontendWhyBigBrainTech from "../reusable/WhyBigBrainTech";
import FullstackWhyBigBrainTech from "../reusable/WhyBigBrainTech";
import QAWhyBigBrainTech from "../reusable/WhyBigBrainTech";
import EarlyLearners1WhyBigBrainTech from "../reusable/EarlyLearnersWhyBigBrainTech";
import EarlyLearners2WhyBigBrainTech from "../reusable/EarlyLearnersWhyBigBrainTech";
import EarlyLearners3WhyBigBrainTech from "../reusable/EarlyLearnersWhyBigBrainTech";

import Instructor from "../reusable/Instructor";

const SecondNavi = ({ module }) => {
    const [selectedComponent, setSelectedComponent] = useState("CourseInfo");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const renderComponent = () => {
        switch (selectedComponent) {
            case "CourseInfo":
                switch (module) {
                    case "frontend":
                        return <FrontendCourseInfo />;
                    case "fullstack":
                        return <FullstackCourseInfo />;
                    case "qa":
                        return <QACourseInfo />;
                    case "earlylearners1":
                        return <EarlyLearners1CourseInfo />;
                    case "earlylearners2":
                        return <EarlyLearners2CourseInfo />;
                    case "earlylearners3":
                        return <EarlyLearners3CourseInfo />;
                    default:
                        return <FrontendCourseInfo />;
                }
            case "StudentReview":
                switch (module) {
                    case "frontend":
                        return <FrontendStudentReview />;
                    case "fullstack":
                        return <FullstackStudentReview />;
                    case "qa":
                        return <QAStudentReview />;
                    case "earlylearners1":
                        return <EarlyLearners1StudentReview />;
                    case "earlylearners2":
                        return <EarlyLearners2StudentReview />;
                    case "earlylearners3":
                        return <EarlyLearners3StudentReview />;
                    default:
                        return <FrontendStudentReview />;
                }
            case "Admission":
                switch (module) {
                    case "frontend":
                        return <FrontendAdmission />;
                    case "fullstack":
                        return <FullstackAdmission />;
                    case "qa":
                        return <QAAdmission />;
                    case "earlylearners1":
                        return <EarlyLearners1Admission />;
                    case "earlylearners2":
                        return <EarlyLearners2Admission />;
                    case "earlylearners3":
                        return <EarlyLearners3Admission />;
                    default:
                        return <FrontendAdmission />;
                }
            case "FinancingOptions":
                switch (module) {
                    case "frontend":
                        return <FrontendFinancingOptions />;
                    case "fullstack":
                        return <FullstackFinancingOptions />;
                    case "qa":
                        return <QAFinancingOptions />;
                    case "earlylearners1":
                        return <EarlyLearners1FinancingOptions />;
                    case "earlylearners2":
                        return <EarlyLearners2FinancingOptions />;
                    case "earlylearners3":
                        return <EarlyLearners3FinancingOptions />;
                    default:
                        return <FrontendFinancingOptions />;
                }
            case "WhyBigBrainTech":
                switch (module) {
                    case "frontend":
                        return <FrontendWhyBigBrainTech />;
                    case "fullstack":
                        return <FullstackWhyBigBrainTech />;
                    case "qa":
                        return <QAWhyBigBrainTech />;
                    case "earlylearners1":
                        return <EarlyLearners1WhyBigBrainTech />;
                    case "earlylearners2":
                        return <EarlyLearners2WhyBigBrainTech />;
                    case "earlylearners3":
                        return <EarlyLearners3WhyBigBrainTech />;
                    default:
                        return <FrontendWhyBigBrainTech />;
                }
            case "Instructor":
                return <Instructor />;
            default:
                switch (module) {
                    case "frontend":
                        return <FrontendCourseInfo />;
                    case "fullstack":
                        return <FullstackCourseInfo />;
                    case "qa":
                        return <QACourseInfo />;
                    case "earlylearners1":
                        return <EarlyLearners1CourseInfo />;
                    case "earlylearners2":
                        return <EarlyLearners2CourseInfo />;
                    case "earlylearners3":
                        return <EarlyLearners3CourseInfo />;
                    default:
                        return <FrontendCourseInfo />;
                }
        }
    };

    return (
        <div>
            <nav className="bg-gray-100 border-b-2 border-yellow-500 sticky top-20">
                <div className="container mx-auto flex justify-between items-center px-4 py-2">
                    {/* Toggle button */}
                    <button
                        className="flex-1 lg:hidden text-gray-700 focus:outline-none"
                        type="button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-controls="navbarCenteredExample"
                        aria-expanded={isMenuOpen}
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars p-6"></i>
                        <p className="lg:hidden">View More</p>
                    </button>

                    {/* Collapsible wrapper */}
                    <div className={`lg:flex justify-center w-full ${isMenuOpen ? "flex-1" : "hidden"}`} id="navbarCenteredExample">
                        {/* Links */}
                        <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-8">
                            <li className="nav-item">
                                <button
                                    className="nav-link text-gray-700 hover:text-yellow-500 border-b-2 border-transparent hover:border-yellow-500"
                                    onClick={() => setSelectedComponent("CourseInfo")}
                                >
                                    Course Info
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="nav-link text-gray-700 hover:text-yellow-500 border-b-2 border-transparent hover:border-yellow-500"
                                    onClick={() => setSelectedComponent("Admission")}
                                >
                                    Admission
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="nav-link text-gray-700 hover:text-yellow-500 border-b-2 border-transparent hover:border-yellow-500"
                                    onClick={() => setSelectedComponent("FinancingOptions")}
                                >
                                    Financing Options
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="nav-link text-gray-700 hover:text-yellow-500 border-b-2 border-transparent hover:border-yellow-500"
                                    onClick={() => setSelectedComponent("WhyBigBrainTech")}
                                >
                                    Why BigBrain Tech
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="nav-link text-gray-700 hover:text-yellow-500 border-b-2 border-transparent hover:border-yellow-500"
                                    onClick={() => setSelectedComponent("Instructor")}
                                >
                                    Instructor
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="nav-link text-gray-700 hover:text-yellow-500 border-b-2 border-transparent hover:border-yellow-500"
                                    onClick={() => setSelectedComponent("StudentReview")}
                                >
                                    Student Review
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container mx-auto p-4">{renderComponent()}</div>
        </div>
    );
};

SecondNavi.propTypes = {
    module: PropTypes.string.isRequired,
};
export default SecondNavi;
