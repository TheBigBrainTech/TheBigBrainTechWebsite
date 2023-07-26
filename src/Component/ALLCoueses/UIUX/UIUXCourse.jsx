import React from "react";
import Navigation from "../../Homepage/Navbar/Navbar";
import Footer from "../../Homepage/Footer/Footer";

export default function UIUXCourse() {
  return (
    <div>
      <section>
        <Navigation />
      </section>
      <header
        style={{
          backgroundColor: "blue",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Left side content */}
        <div style={{ flex: 1, paddingLeft: "50px" }}>
          <div className="text-dark">
            <h1 className="mb-3">Heading</h1>
            <h4 className="mb-3">Subheading</h4>
            <a className="btn btn-outline-dark btn-lg" href="#!" role="button">
              Call to action
            </a>
          </div>
        </div>

        {/* Right side image */}
        <div
          className="p-5"
          style={{
            backgroundImage:
              "url('https://downloader.la/temp/[Downloader.la]-64bd9ab2b8e26.jpg')",
            height: 400,
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
      <section>
        <Footer/>
      </section>
    </div>
  );
}
