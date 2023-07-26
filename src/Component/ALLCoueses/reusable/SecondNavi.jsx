import React from "react";


const SecondNavi = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ borderBottom: "2px solid #f0ad4e" }}
      >
        {/* Container wrapper */}
        <div className="container-fluid">
          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarCenteredExample"
            aria-controls="navbarCenteredExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          {/* Collapsible wrapper */}
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarCenteredExample"
          >
            {/* Left links */}
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#!"
                  style={{ borderBottom: "2px solid #f0ad4e" }} // Bottom bar color for active link
                >
                  Course Info
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Admission
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Financing Options
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SecondNavi;
