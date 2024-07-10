import React from "react";
import EarlyLearnersEnrollment from "./EarlyLearnersEnrollment";
import Navigation from "../Homepage/Navbar/Navbar";
import Footer from "../Homepage/Footer/Footer";
import Logo from "../../Assets/images/logo/BigBrainTechLogoBlack.png";

const EarlyLearnersEnrollmentCard = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-r from-yellow-500 to-yellow-300">
            <section>
                <Navigation />
            </section>
            <div className="flex-grow flex items-center justify-center m-20 p-12">
                <div className="w-full max-w-4xl bg-white rounded-lg shadow-2xl p-6">
                    <div className="mb-4 text-center">
                        <img
                            className="mb-4 mt-2"
                            style={{height: "55px", width: "auto"}}
                            src={Logo}
                            alt="BigBrainTech Inc."
                        />
                        <h3 className="text-2xl font-bold text-gray-500">Early Learners Bootcamp Enrollment form</h3>

                    </div>
                    <EarlyLearnersEnrollment/>
                </div>
            </div>
            <section>
                <Footer/>
            </section>
        </div>
    );
};

export default EarlyLearnersEnrollmentCard;
