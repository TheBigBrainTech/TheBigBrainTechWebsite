import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Authenticator } from "@aws-amplify/ui-react";
import Homepage from './Component/Homepage/HomePageRender/Homepage';
import Login from './Component/LoginPage/Login';
import InquiryForm from "../src/Component/Homepage/inquiry/SignupForm";
import AboutUsPage from './Component/About/AboutUs';
import Questions from './Component/Questions/Questions';
import Testimonials from "./Component/About/Testimonials";
import Blog from "./Component/About/Blog";
import BlogPost from "./Component/About/BlogPost";
import Career from "./Component/Careers/career";
import Press from "./Component/Press/Press";
import FullstackCourse from "./Component/ALLCoueses/FullStack/FullstackCourse";
import QAAutomation from "./Component/ALLCoueses/QA/QACourse";
import FrontendCourse from "./Component/ALLCoueses/react/FrontendCourse";
import EnrollmentCard from "./Component/EnrollmentForm/EnrolmentCard";
import EarlyLearners1 from "./Component/ALLCoueses/EarlyLearners1/EarlyLearners1";
import EarlyLearners2 from "./Component/ALLCoueses/EarlyLearners2/EarlyLearners2";
import EarlyLearners3 from "./Component/ALLCoueses/EarlyLearners3/EarlyLearners3";
import EarlyLearnersEnrollmentCard from "./Component/EnrollmentForm/EarlyLearnersEnrollmentCard";
import FinancingOptions from "./Component/ALLCoueses/reusable/Financing";
import Support from "./Component/Support/supportPage";
import ErrorPage from "./Component/Error/ErrorPage";
import ModalManager from "./Component/CommonComponents/ModalManager";
import Dashboard from "./Component/Dashboard/Dashboard";
import Profile from "./Component/Profile/Profile";

function InquiryFormWrapper() {
    const [isInquiryFormOpen, setInquiryFormOpen] = useState(true);
    const navigate = useNavigate();

    const handleClose = () => {
        setInquiryFormOpen(false);
        navigate('/');
    };

    return isInquiryFormOpen ? <InquiryForm onClose={handleClose} /> : <Homepage />;
}

function AppRoutes() {
    return (
        <Authenticator.Provider>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/Error" element={<ErrorPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/about-us" element={<AboutUsPage />} />
                    <Route path="/Questions" element={<Questions />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:id" element={<BlogPost />} />
                    <Route path="/careers" element={<Career />} />
                    <Route path="/press" element={<Press />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/inquiry" element={<InquiryFormWrapper />} />

                    <Route path="/Programs/Individuals/Frontend" element={<FrontendCourse />} />
                    <Route path="/Programs/Individuals/Fullstack" element={<FullstackCourse />} />
                    <Route path="/Programs/Individuals/QAAutomation" element={<QAAutomation />} />

                    <Route path="/Programs/EarlyLearners/Basic" element={<EarlyLearners1 />} />
                    <Route path="/Programs/EarlyLearners/Intermediate" element={<EarlyLearners2 />} />
                    <Route path="/Programs/EarlyLearners/Advanced" element={<EarlyLearners3 />} />

                    <Route path="/Programs/Individuals/:course/enroll" element={<EnrollmentCard />} />
                    <Route path="/Programs/EarlyLearners/:level/enroll" element={<EarlyLearnersEnrollmentCard />} />

                    <Route path="/financing" element={<FinancingOptions />} />
                    <Route path="/enroll" element={<EnrollmentCard />} />

                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
                <ModalManager />
        </Authenticator.Provider>
    );
}

export default AppRoutes;