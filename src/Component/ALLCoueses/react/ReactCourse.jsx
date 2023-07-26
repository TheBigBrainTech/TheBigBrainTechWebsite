import React from "react";
import Navigation from "../../Homepage/Navbar/Navbar";
import Footer from "../../Homepage/Footer/Footer";
import SecondNavigation from "../reusable/SecondNavi";
import CourseInfo from "./ReactCourseInfo";
import CourseModules from "../java/JavacourseModules";
import Admission from "../reusable/admissionProcess";
import Financing from "../reusable/Financing";
import FAQ from "../reusable/FrequentQuestion";

export default function ReactCourse() {
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
          height: "690px",
        }}
      >
        {/* Left side content */}
        <div style={{ flex: 1, paddingLeft: "50px" }}>
          <div className="text-secondary">
            <p>LEARN FROM THE INDUSTRY&apos;S TOP TALLENT</p>
            <h1 className="mb-3">
              <strong>React JS Course</strong>
            </h1>
            <h4 className="mb-3">
              Expand your React programming skills, and boost your profile on
              the job market. Learn to build sophisticated, scalable web
              applications.
            </h4>
            <a
              className="btn btn-outline-secondary btn-lg mx-3"
              href="#!"
              role="button"
            >
              Enroll Now
            </a>
            <a
              className="btn btn-outline-secondary btn-lg"
              href="#!"
              role="button"
            >
              View Syllabus
            </a>
          </div>
        </div>

        {/* Right side image */}
        <div
          className="p-5"
          style={{
            backgroundImage:
              "url('https://teksyntaxwebimages.s3.amazonaws.com/images/OtherImages/ReactDevelopment.webp')",
            height: "681px",
            flex: 1,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
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
          <SecondNavigation />
        </section>
        <section>
          <CourseInfo />
        </section>
        <CourseModules />
        <div className="my-4">
          <Admission />
        </div>
      </div>
      <section>
        <Financing />
      </section>
      <section className="my-4">
        <FAQ />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
