import React from "react";
import Navigation from "../../Homepage/Navbar/Navbar";
import Footer from "../../Homepage/Footer/Footer";
import SecondNavigation from "../reusable/SecondNavi";
import CourseInfo from "./JavacourseInfo";
import CourseModules from "./JavacourseModules";
import Admission from "../reusable/admissionProcess";
import Financing from "../reusable/Financing";
import FAQ from '../reusable/FrequentQuestion';

export default function JavaCourse() {
  const handleDownloadBrochure = () => {
    // The URL of the brochure you want to download
    const brochureURL = "https://teksyntaxbrochures.s3.amazonaws.com/JavaFullStack.pdf";

    // Create a temporary anchor element
    const tempAnchor = document.createElement("a");
    tempAnchor.href = brochureURL;
    tempAnchor.target = "_blank"; // Opens the link in a new tab
    tempAnchor.download = "JavaFullStackBrochure.pdf"; // Sets the downloaded file name

    // Trigger the click event on the anchor to initiate the download
    tempAnchor.click();
  };

  return (
    <div>
      <section>
        <Navigation />
      </section>
      <header
        style={{
          backgroundColor: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          padding: "20px",
          marginTop: 50,
        }}
      >
        {/* Left side content */}
        <div style={{ flex: 1, paddingLeft: "50px" }}>
          <div className="text-secondary">
            <h1 className="mb-3">Java Development Course</h1>
            <h4 className="mb-3">
              Learn to build java applications from scratch and land your dream
              job as Developer with the #1 ranked bootcamp in the world.
            </h4>
            <a
              className="btn btn-outline-dark btn-lg mx-3"
              href="#!"
              role="button"
            >
              Enroll Now
            </a>
            <a
              className="btn btn-outline-dark btn-lg"
              href="/#/course/java/1"
              role="button"
              onClick={handleDownloadBrochure}
            >
              Download Brochure
            </a>
          </div>
        </div>

        {/* Right side image */}
        <div
          className="p-5"
          style={{
            backgroundImage:
              "url('https://teksyntaxwebimages.s3.amazonaws.com/images/OtherImages/javaDeveloper.jpg')",
            height: "800px",
            padding: 15,
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
          <SecondNavigation />
        </section>
        <section>
          <CourseInfo />
        </section>
        <CourseModules />
        <section className="my-4">
          <Admission />
        </section>
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
    </div>
  );
}
