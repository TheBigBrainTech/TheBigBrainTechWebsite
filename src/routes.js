import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Homepage from './Component/Homepage/HomePageRender/Homepage';
import LoginPage from './Component/LoginPage/StudentLogin';
import InquiryForm from "./Component/Homepage/inquiry/signUpForm";
import AboutUsPage from './Component/About/AboutUs';
import Questions from './Component/Questions/Questions';
import Testimonials from "./Component/About/Testimonials";
import Blog from "./Component/About/Blog";
import BlogPost from "./Component/About/BlogPost";
import Career from "./Component/Careers/career";
import Press from "./Component/Press/Press";
import FullstackCourse from "./Component/ALLCoueses/FullStack/FullstackCourse";
import QAAutomation from "./Component/ALLCoueses/QA/QACourse"
import FrontendCourse from "./Component/ALLCoueses/react/FrontendCourse";
import EnrollmentCard from "./Component/EnrollmentForm/EnrolmentCard";
import EarlyLearners1 from "./Component/ALLCoueses/EarlyLearners1/EarlyLearners1";
import EarlyLearners2 from "./Component/ALLCoueses/EarlyLearners2/EarlyLearners2";
import EarlyLearners3 from "./Component/ALLCoueses/EarlyLearners3/EarlyLearners3";
import EarlyLearnersEnrollmentCard from "./Component/EnrollmentForm/EarlyLearnersEnrollmentCard";
import FinancingOptions from "./Component/ALLCoueses/reusable/Financing";
import Support from "./Component/Support/supportPage"
import ErrorPage from "./Component/Error/ErrorPage";

function AppRoutes() {
  const [isInquiryFormOpen, setInquiryFormOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClose = () => {
    setInquiryFormOpen(false);
    navigate('/'); // Navigate to the homepage
  };

  useEffect(() => {
    if (location.pathname === '/inquiry') {
      setInquiryFormOpen(true);
    } else {
      setInquiryFormOpen(false);
    }
  }, [location.pathname]);

  return (
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Error" element={<ErrorPage/>}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/Questions" element={<Questions />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/careers" element={<Career/>}/>
          <Route path="/press" element={<Press />} />
          <Route path="/support" element={<Support />}/>
          <Route path="/inquiry" element={isInquiryFormOpen ? <InquiryForm onClose={handleClose} /> : <Homepage />} />

          <Route path="/Programs/Individuals/Frontend" element={<FrontendCourse />} />
          <Route path="/Programs/Individuals/Fullstack" element={<FullstackCourse />} />
          <Route path="/Programs/Individuals/QAAutomation" element={<QAAutomation />} />

          <Route path="/Programs/EarlyLearners/Basic" element={<EarlyLearners1 />} />
          <Route path="/Programs/EarlyLearners/Intermediate" element={<EarlyLearners2 />} />
          <Route path="/Programs/EarlyLearners/Advanced" element={<EarlyLearners3 />} />

          <Route path="/Programs/Individuals/Frontend/enroll" element={<EnrollmentCard />} />
          <Route path="/Programs/Individuals/Fullstack/enroll" element={<EnrollmentCard />} />
          <Route path="/Programs/Individuals/QAAutomation/enroll" element={<EnrollmentCard />} />

          <Route path="/Programs/EarlyLearners/Basic/enroll" element={<EarlyLearnersEnrollmentCard />} />
          <Route path="/Programs/EarlyLearners/Intermediate/enroll" element={<EarlyLearnersEnrollmentCard />} />
          <Route path="/Programs/EarlyLearners/Advanced/enroll" element={<EarlyLearnersEnrollmentCard />} />


          <Route path="/financing" element={<FinancingOptions/>}/>
          <Route path="/enroll" element={<EnrollmentCard/>}/>
      </Routes>
  );
}

export default AppRoutes;
