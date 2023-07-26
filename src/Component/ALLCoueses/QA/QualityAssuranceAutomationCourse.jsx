import React from "react";
import Navigation from "../../Homepage/Navbar/Navbar";
import Footer from "../../Homepage/Footer/Footer";
import SecondNavi from "../reusable/SecondNavi";
import QACourseInfo from "./QACourseInfo";
import Modules from "./ReactCourseModules";
import Financing from "../../../Component/ALLCoueses/reusable/Financing";
import Admissions from "../../../Component/ALLCoueses/reusable/admissionProcess";
import Faq from "../../../Component/ALLCoueses/reusable/FrequentQuestion";

export default function QualityAssuranceAutomationCourse() {
  return (
    <div>
      <section>
        <Navigation />
      </section>
      <header
        style={{
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Left side content */}
        <div className="my-4" style={{ flex: 1, paddingLeft: "50px" }}>
          <div className="text-dark">
            <h1 className="mb-3">QA Test Automation (SDET) course</h1>
            <h4 className="mb-3">
              Learn the latest and greatest from Automation Testing World
            </h4>
            <a
              className="btn btn-outline-dark btn-lg mx-2"
              href="/Enroll/Application"
              role="button"
            >
              Enroll now
            </a>
            <a className="btn btn-outline-dark btn-lg" href="#!" role="button">
              view Syllabus
            </a>
          </div>
        </div>

        {/* Right side image */}
        <div
          className="p-5"
          style={{
            backgroundImage:
              "url('https://teksyntaxwebimages.s3.amazonaws.com/images/OtherImages/QAICON.jpg')",
            height: 950,
            flex: 1,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          ></div>
        </div>
      </header>
      <div>
        <section>
          <SecondNavi />
        </section>
        <section>
          <QACourseInfo />
        </section>
        <section>
          <Modules />
        </section>
        <section className="my-4">
          <Admissions />
        </section>
        <section className="my-4">
          <Financing />
        </section>
        <section className="my-4">
          <Faq />
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </div>
  );
}
